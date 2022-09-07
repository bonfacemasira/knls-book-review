import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
// import SignUp from './components/SignUP';
// import Landingpage from './pages/Landingpage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Kenya National Library Service Book Review
      </header>
      {/* <Landingpage /> */}
      <Login />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
