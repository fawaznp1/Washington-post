import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Business from './components/Business';
import Fashion from './components/Fashion';
import Latest from './components/Latest';
import Sports from './components/Sports';
import Tech from './components/Tech';
import Webname from './components/Webname';
import NewsDetail from './components/Newsdetail';
import Footer from './components/Footer';
import Crime from './components/Crime'
import Businessdetail from './components/Businessdetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Webname />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/business' element={<Business />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/crime' element={<Crime />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/tech' element={<Tech />} />
        <Route path="/news/:newsId" element={<NewsDetail />} />
        <Route path="/business/:id" component={Businessdetail} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
