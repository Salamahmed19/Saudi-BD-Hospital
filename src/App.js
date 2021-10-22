import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SiteNavbar from './Components/SiteNavbar/SiteNavbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Insurances from './Components/Insurances/Insurances';
import Doctors from './Components/Doctors/Doctors';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';
import Booking from './Components/Booking/Booking';
import AuthProvider from './contexts/AuthProvider';
import SignUp from './Components/SignUp/SignUp';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <SiteNavbar/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/booking/:servicesId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/insurances">
            <Insurances></Insurances>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
