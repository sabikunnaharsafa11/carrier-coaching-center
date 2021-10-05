import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import Services from './Components/Services/Services';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <div>

      <Router>
      <Header></Header>   
        <Switch>
        <Route exact path="/" >
          <Home></Home>
         </Route>
          <Route exact path="/home" >
          <Home></Home>
         </Route>
         <Route exact path="/about">
        <About></About>
         </Route>
         <Route exact path="/services">
        <Services></Services>
         </Route>
         <Route exact path="/contactus">
         <ContactUs></ContactUs>
         </Route>
         <Route  path="*">
         <Error></Error>
         </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
