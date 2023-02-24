import './layout.scss';

const Layout = () => {

  const onHoverDropdown = (e) => {
    var dropdownMenu = e.target.querySelector(".bt-rjs-navbar-dropdown-menu")
    if(dropdownMenu !== null){
      dropdownMenu.classList.remove("hide")
    }
  }

  const outHoverDropdown = (e) => {
    var dropdown = e.target 
    while(!dropdown.classList.contains("bt-rjs-navbar-dropdown")){
      dropdown = dropdown.parentElement
    }
    var dropdownMenu = dropdown.querySelector(".bt-rjs-navbar-dropdown-menu")
    if(dropdownMenu !== null){
      dropdownMenu.classList.add("hide")
    }
  }

  return (
    <div className="bt-rjs-layout primary">
      <nav className='bt-rjs-navbar'>
        <div className='bt-rjs-nav-container'>
          <div className='bt-rjs-navbar-left'>
            <a href='#' className='bt-rjs-a-navbar-icon'>
              <img className='bt-rjs-navbar-icon' src={require("../../assets/doubledragon.jpg")} />
            </a>
            <div className='bt-rjs-navbar-title'>
              Double Dragon
            </div>
            <div className='bt-rjs-navbar-menu'>
              <a className='bt-rjs-navbar-link' href='#'>
                <div className='bt-rjs-navbar-menu-item'>
                  Home
                </div>
              </a>
              <div className='bt-rjs-navbar-menu-item bt-rjs-navbar-dropdown' onMouseEnter={onHoverDropdown} onMouseLeave={outHoverDropdown}>
                Home
                <div className='bt-rjs-navbar-dropdown-menu hide'>
                  <div className='bt-rjs-navbar-dropdown-menu-item'>
                    dropdown item
                  </div>
                  <div className='bt-rjs-navbar-dropdown-menu-item'>
                    dropdown item
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bt-rjs-navbar-center'>2</div>
          <div className='bt-rjs-navbar-right'>3</div>
        </div>
      </nav>
      <div className='bt-rjs-sidebar'>
        <div className='header'>
          <div className='title'>Test Title Test Title</div>
        </div>
        <div className='content'>
          <div className='section'>
            <div className='category-name'>Menu</div>
            <div className='category-items'>
              <div className='item'>Dashboard</div>
              <div className='item'>Inventory</div>
              <div className='item'>Sales</div>
            </div>
          </div>
        </div>
        <div className='footer'></div>
      </div>
    </div>
  );
}

export default Layout;