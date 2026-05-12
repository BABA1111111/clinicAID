import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated, getRole, UserRole } from '../services/authService';

interface ProtectedRouteProps {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  allowedRoles?: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  allowedRoles,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated()) {
          return <Redirect to="/login" />;
        }

        const role = getRole();

        if (allowedRoles && role && !allowedRoles.includes(role)) {
          return <Redirect to="/login" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;