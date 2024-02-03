import "./App.css";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';


import "react-toastify/dist/ReactToastify.css";




function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <PrivateRoute path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
