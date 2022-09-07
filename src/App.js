import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import SignUp from './pages/SignUP';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Kenya National Library Service Book Review
      </header>
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
