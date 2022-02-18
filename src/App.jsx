import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRouteHoc from './core/hoc/PrivateRouteHoc';
import PublicRouteHoc from './core/hoc/PublicRouteHoc';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Purchases from './pages/purchases/Purchases';
import Register from './pages/register/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouteHoc path="/login" component={Login} />
        <PublicRouteHoc path="/register" component={Register} />
        <PrivateRouteHoc path="/home" component={Home} />
        <PrivateRouteHoc path="/purchases" component={Purchases} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
