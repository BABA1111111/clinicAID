import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import '@ionic/react/css/core.css';

/* Auth */
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

/* Paciente */
import HomePaciente from './pages/paciente/HomePaciente';
import Agendar from './pages/paciente/Agendar';
import Historial from './pages/paciente/Historial';
import RecetasPaciente from './pages/paciente/RecetasPaciente';

/* Médico */
import HomeMedico from './pages/medico/HomeMedico';
import Consultas from './pages/medico/Consultas';
import Pacientes from './pages/medico/Pacientes';
import RecetasMedico from './pages/medico/RecetasMedico';

/* Admin */
import Dashboard from './pages/admin/Dashboard';
import Usuarios from './pages/admin/Usuarios';
import Especialidades from './pages/admin/Especialidades';

/* Protected Route */
import ProtectedRoute from './routes/ProtectedRoute';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>

        <IonRouterOutlet>

          {/* Públicas */}
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />

          {/* Paciente */}
          <ProtectedRoute
            path="/paciente/home"
            component={HomePaciente}
            exact
            allowedRoles={['paciente']}
          />

          <ProtectedRoute
            path="/paciente/agendar"
            component={Agendar}
            exact
            allowedRoles={['paciente']}
          />

          <ProtectedRoute
            path="/paciente/historial"
            component={Historial}
            exact
            allowedRoles={['paciente']}
          />

          <ProtectedRoute
            path="/paciente/recetas"
            component={RecetasPaciente}
            exact
            allowedRoles={['paciente']}
          />

          {/* Médico */}
          <ProtectedRoute
            path="/medico/home"
            component={HomeMedico}
            exact
            allowedRoles={['medico']}
          />

          <ProtectedRoute
            path="/medico/consultas"
            component={Consultas}
            exact
            allowedRoles={['medico']}
          />

          <ProtectedRoute
            path="/medico/pacientes"
            component={Pacientes}
            exact
            allowedRoles={['medico']}
          />

          <ProtectedRoute
            path="/medico/recetas"
            component={RecetasMedico}
            exact
            allowedRoles={['medico']}
          />

          {/* Admin */}
          <ProtectedRoute
            path="/admin/dashboard"
            component={Dashboard}
            exact
            allowedRoles={['admin']}
          />

          <ProtectedRoute
            path="/admin/usuarios"
            component={Usuarios}
            exact
            allowedRoles={['admin']}
          />

          <ProtectedRoute
            path="/admin/especialidades"
            component={Especialidades}
            exact
            allowedRoles={['admin']}
          />

          {/* Redirección inicial */}
          <Redirect exact from="/" to="/login" />

        </IonRouterOutlet>

      </IonReactRouter>
    </IonApp>
  );
};

export default App;