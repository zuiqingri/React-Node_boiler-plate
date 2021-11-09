
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      
<Router>
      <div>
        
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          
          <Route exact path="/login" element={<LoginPage/>}/>
          
          <Route exact path="/register" element={<RegisterPage/>}/>
          
        </Routes>
      </div>
    </Router>
    </div>
  );
}

 

// You can think of these components as "pages"
// in your app.


export default App;
