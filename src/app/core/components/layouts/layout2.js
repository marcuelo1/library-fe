import { Outlet } from 'react-router-dom';
import './layout2.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Layout2 = (props) => {
  const { tabs, logo, name } = props;
  const [activeTab, setActiveTab] = useState(window.location.pathname.split("/")[1])

  const getPageName = () => {
    let pageName;

    tabs.forEach(tabConfig => {
      if(activeTab === tabConfig.urlName){
        pageName = tabConfig.tabName
      }
    })

    return pageName;
  }
  const [pageName, setPageName] = useState(getPageName())
  const [click, setClick] = useState(false)

  const openMenu = (e) => {
    var sidebar = document.querySelector(".bt-rjs-sidebar");
    sidebar.classList.add("active")
  }

  const closeMenu = (e) => {
    var sidebar = document.querySelector(".bt-rjs-sidebar");
    sidebar.classList.remove("active")
  }

  useEffect(() => {
    setActiveTab(window.location.pathname.split("/")[1])
    setPageName(getPageName())
    setClick(false)
  }, [click])

  return (
    <div className="bt-rjs-layout2 primary">
      <div className='bt-rjs-sidebar'>
        <div className='bt-rjs-sidebar-bg' onClick={closeMenu} ></div>
        <div className='header'>
          <img className='bt-rjs-sidebar-logo' src={logo} />
          <div className='title'>{name}</div>
          <div className='bt-rjs-sidebar-header-collapse'>
            <img className='menu-icon' src={require("../../assets/icons/circled-menu-white.png")} onClick={openMenu} />
          </div>
        </div>
        <div className='content'>
          <div className='section'>
            <div className='category-name'>Menu</div>
            <div className='category-items'>
              {tabs.map(tabConfig => 
                <Link key={tabConfig.urlName} to={tabConfig.urlName} onClick={()=> setClick(true)}>
                  <div className={'category-item ' + (activeTab === tabConfig.urlName ? "active" : "")}>
                    <img className='bt-rjs-sidebar-icon active' src={tabConfig.activeTabIcon} />
                    <img className='bt-rjs-sidebar-icon not-active' src={tabConfig.inactiveTabIcon} />
                    {tabConfig.tabName}
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className='footer'></div>
      </div>
      <div className='bt-rjs-body'>
        <div className='bt-rjs-body-container'>
          <div className='bt-rjs-body-header'>
            <div className='bt-rjs-body-header-title'>{pageName}</div>
          </div>
          <div className='bt-rjs-body-content'>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout2;