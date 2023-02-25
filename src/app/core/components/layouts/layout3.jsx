import { Outlet } from 'react-router-dom';
import './layout3.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Layout3 = (props) => {
  const { tabs, logo, name } = props;
  const [activeTab, setActiveTab] = useState(window.location.pathname.split("/")[1])

  const onHoverDropdown = (e) => {
    var dropdownMenu = e.target.closest(".bt-rjs-navbar-dropdown").querySelector(".bt-rjs-navbar-dropdown-menu")

    if(dropdownMenu !== null){
      dropdownMenu.classList.remove("hide")
    }
  }

  const outHoverDropdown = (e) => {
    var dropdownMenu = e.target.closest(".bt-rjs-navbar-dropdown").querySelector(".bt-rjs-navbar-dropdown-menu")

    if(dropdownMenu !== null){
      dropdownMenu.classList.add("hide")
    }
  }

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
    <div className="bt-rjs-layout3 primary">
      <nav className="bt-rjs-navbar">
        <div className="bt-rjs-navbar-brand">
          <img src={require("../../assets/doubledragon.jpg")} alt="" className="bt-rjs-navbar-brand-logo" />
          <div className='bt-rjs-navbar-brand-name'>Library System</div>
        </div>
        <div className="bt-rjs-navbar-menus">
          <div className="search-bar">
            <input type="text" name="search" id="" placeholder='Search Reading Material...' autoComplete='off' />
            <img src={require("../../assets/icons/search.png")} alt="" />
          </div>
        </div>
        <div className="bt-rjs-navbar-actions">
          <div className="bt-rjs-navbar-dropdown" onMouseEnter={onHoverDropdown} onMouseLeave={outHoverDropdown}>
            <img src={require("../../assets/icons/unknown-user.png")} alt="" />
            <div className='bt-rjs-navbar-dropdown-menu hide'>
              <div className='bt-rjs-navbar-dropdown-menu-item'>
                Profile
              </div>
              <div className='bt-rjs-navbar-dropdown-menu-item'>
                Log Out
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='bt-rjs-sidebar'>
        <div className='bt-rjs-sidebar-bg' onClick={closeMenu} ></div>
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
      {/* <div className='bt-rjs-body'>
        <div className='bt-rjs-body-container'>
          <div className='bt-rjs-body-header'>
            <div className='bt-rjs-body-header-title'>{pageName}</div>
          </div>
          <div className='bt-rjs-body-content'>
            <Outlet/>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Layout3;