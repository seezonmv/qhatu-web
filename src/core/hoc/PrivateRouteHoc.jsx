import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalContext from '../contexts/GlobalContext';
import PrivateLayout from '../../components/layout/private/PrivateLayout';

const PrivateRouteHoc = ({ component: Component, path }) => {
  const { userData } = useContext(GlobalContext);
  return (
    <Route
      exact
      path={path}
      render={() =>
        userData != null ? (
          <PrivateLayout>
            <Component />
          </PrivateLayout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRouteHoc;
