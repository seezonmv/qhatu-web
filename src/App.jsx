import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRouteHoc from './core/hoc/PrivateRouteHoc';
import PublicRouteHoc from './core/hoc/PublicRouteHoc';
import NotFound from './pages/404/NotFound';

import HomeStf from './pages/home/HomeStf';
import LoginStf from './pages/login/LoginStf';
import PurchasesSfl from './pages/purchases/PurchasesSfl';
import RegisterStf from './pages/register/RegisterStf';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouteHoc path="/login" component={LoginStf} />
        <PublicRouteHoc path="/register" component={RegisterStf} />
        <PrivateRouteHoc path="/home" component={HomeStf} />
        <PrivateRouteHoc path="/purchases" component={PurchasesSfl} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
