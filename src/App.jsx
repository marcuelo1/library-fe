import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './app/core/utils/loading';

import Layout2 from './/app/core/components/layouts/layout2';

import DashboardIcon from "./app/core/assets/icons/dashboard.png";
import DashboardIconWhite from "./app/core/assets/icons/dashboard-white.png";
import DeliveryIcon from "./app/core/assets/icons/delivery.png";
import DeliveryIconWhite from "./app/core/assets/icons/delivery-white.png";
import StationReportsIcon from "./app/core/assets/icons/stationreports.png";
import StationReportsIconWhite from "./app/core/assets/icons/stationreports-white.png";
import SuppliersIcon from "./app/core/assets/icons/suppliers.png";
import SuppliersIconWhite from "./app/core/assets/icons/suppliers-white.png";
import BranchesIcon from "./app/core/assets/icons/branches.png";
import BranchesIconWhite from "./app/core/assets/icons/branches-white.png";
import Logo from "./app/core/assets/doubledragon.jpg";
import PortalIndexView from './app/features/portal/views/portalIndexView';
import SignUpView from './app/features/portal/views/signUpView';
import Layout3 from './app/core/components/layouts/layout3';

const tabs = [
  {
    urlName: "",
    tabName: "Dashboard",
    activeTabIcon: DashboardIcon,
    inactiveTabIcon: DashboardIconWhite
  },
  {
    urlName: "inventory",
    tabName: "Inventory",
    activeTabIcon: DeliveryIcon,
    inactiveTabIcon: DeliveryIconWhite
  },
  {
    urlName: "sales",
    tabName: "Sales",
    activeTabIcon: StationReportsIcon,
    inactiveTabIcon: StationReportsIconWhite
  },
  {
    urlName: "customers",
    tabName: "Customers",
    activeTabIcon: SuppliersIcon,
    inactiveTabIcon: SuppliersIconWhite
  },
  {
    urlName: "logs",
    tabName: "Logs",
    activeTabIcon: BranchesIcon,
    inactiveTabIcon: BranchesIconWhite
  }
]

function App() {
  return (
    <Router>
      <div className="App">
        <Loading />
        <Routes>
          <Route path="sign_in" element={<PortalIndexView />} />
          <Route path="sign_up" element={<SignUpView />} />
          <Route path="/" element={<Layout3 tabs={tabs} logo={Logo} name="Library System" />} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
