import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PrivateRoute from '../component/PrivateRoute';
import Landing from '../pages/Landing'
// import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'


const router = () => (
    <Router>
      <Switch>
        {/* <PrivateRoute path="/home" component={Home} /> */}
        <Route path="/" component={Landing} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
  export default router;