import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import PublicLayout from '../../components/layout/public/PublicLayout';
import GlobalContext from '../contexts/GlobalContext';

const PublicRouteHoc = ({ component: Component, path }) => {
  const { userData } = useContext(GlobalContext);
  return (
    <Route
      exact
      path={path}
      render={() =>
        userData === null ? (
          <PublicLayout>
            <Component />
          </PublicLayout>
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};

export default PublicRouteHoc;
