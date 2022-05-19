import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import CountriesCountainer from './Pages/CountriesContainer';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<CountriesCountainer />} />
    </Routes>
  </Router>
);

export default App;
