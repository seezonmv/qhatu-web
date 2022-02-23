import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRouteHoc from './core/hoc/PrivateRouteHoc';
import PublicRouteHoc from './core/hoc/PublicRouteHoc';
import NotFound from './pages/404/NotFound';

import Home from './pages/home/Home';
import LoginStateful from './pages/login/LoginStateful';
import Purchases from './pages/purchases/Purchases';
import RegisterStateful from './pages/register/RegisterStateful';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouteHoc path="/login" component={LoginStateful} />
        <PublicRouteHoc path="/register" component={RegisterStateful} />
        <PrivateRouteHoc path="/home" component={Home} />
        <PrivateRouteHoc path="/purchases" component={Purchases} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
