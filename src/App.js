import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet} from 'react-router-dom' 
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Kenya National Library Service Book Review
      </header>
      <Outlet />
      <Home />
      <footer>
        <div>&copy; {new Date().getFullYear()} Copyright: {'Bonface Masira'} </div>
      </footer>
    </div>
  );
}

export default App;
