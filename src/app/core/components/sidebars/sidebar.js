import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="bt-rjs-sidebar primary">
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
  );
}

export default Sidebar;