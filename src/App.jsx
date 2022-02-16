import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import PublicLayout from './components/layout/public/PublicLayout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
};

export default App;
