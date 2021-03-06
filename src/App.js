import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import CountriesCountainer from './Pages/CountriesContainer';
import Region from './Pages/RegionContainer';

const App = () => (
  <Router>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route exact path="/" element={<CountriesCountainer />} />
      <Route path="/:country" element={<Region />} />
    </Routes>
  </Router>
);

export default App;
