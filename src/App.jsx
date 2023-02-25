import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './app/core/utils/loading';

// import Layout2 from './/app/core/components/layouts/layout2';

import HomeIcon from "./app/core/assets/icons/dashboard.png";
import HomeIconWhite from "./app/core/assets/icons/dashboard-white.png";
import BookIcon from "./app/core/assets/icons/book.png";
import BookIconWhite from "./app/core/assets/icons/book-white.png";
import MagazineIcon from "./app/core/assets/icons/magazine.png";
import MagazineIconWhite from "./app/core/assets/icons/magazine-white.png";
import EbookIcon from "./app/core/assets/icons/ebook.png";
import EbookIconWhite from "./app/core/assets/icons/ebook-white.png";
import ThesisIcon from "./app/core/assets/icons/thesis.png";
import ThesisIconWhite from "./app/core/assets/icons/thesis-white.png";
import NewspaperIcon from "./app/core/assets/icons/newspaper.png";
import NewspaperIconWhite from "./app/core/assets/icons/newspaper-white.png";
import Logo from "./app/core/assets/doubledragon.jpg";
import PortalIndexView from './app/features/portal/views/portalIndexView';
import SignUpView from './app/features/portal/views/signUpView';
import Layout3 from './app/core/components/layouts/layout3';
import HomeIndexView from './app/features/public/home/views/homeIndexView';
import BooksIndexView from './app/features/public/books/views/booksIndexView';
import MagazinesIndexView from './app/features/public/magazines/views/magazinesIndexView';

const tabs = [
  {
    urlName: "",
    tabName: "Home",
    activeTabIcon: HomeIcon,
    inactiveTabIcon: HomeIconWhite
  },
  {
    urlName: "books",
    tabName: "Books",
    activeTabIcon: BookIcon,
    inactiveTabIcon: BookIconWhite
  },
  {
    urlName: "magazines",
    tabName: "Magazines",
    activeTabIcon: MagazineIcon,
    inactiveTabIcon: MagazineIconWhite
  },
  {
    urlName: "ebooks",
    tabName: "E-Books",
    activeTabIcon: EbookIcon,
    inactiveTabIcon: EbookIconWhite
  },
  {
    urlName: "thesis",
    tabName: "Thesis",
    activeTabIcon: ThesisIcon,
    inactiveTabIcon: ThesisIconWhite
  },
  {
    urlName: "newspaper",
    tabName: "Newspaper",
    activeTabIcon: NewspaperIcon,
    inactiveTabIcon: NewspaperIconWhite
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
            <Route path="" element={<HomeIndexView />} />
            <Route path="books" element={<BooksIndexView />} />
            <Route path="magazines" element={<MagazinesIndexView />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
