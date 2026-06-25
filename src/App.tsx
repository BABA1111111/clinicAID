import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import '@ionic/react/css/core.css';

/* Auth */
import Login from './features/auth/presentation/pages/Login';
import Register from './features/auth/presentation/pages/Register';

/* Paciente */
import Agendar from './features/paciente/presentation/pages/citas/Agendar';
import DetalleCita from './features/paciente/presentation/pages/citas/DetalleCita';

import Historial from './features/paciente/presentation/pages/historial/Historial';
import DetalleHistorial from './features/paciente/presentation/pages/historial/DetalleHistorial';

import HomePaciente from './features/paciente/presentation/pages/HomePaciente';
import PerfilPaciente from './features/paciente/presentation/pages/PerfilPaciente';

import Especialistas from './features/paciente/presentation/pages/especialistas/Especialistas';
import DetalleEspecialista from './features/paciente/presentation/pages/especialistas/DetalleEspecialista';
import ConsultarEspecialista from './features/paciente/presentation/pages/especialistas/ConsultarEspecialista';

import RecetasPaciente from './features/paciente/presentation/pages/recetas/RecetasPaciente';
import DetalleReceta from './features/paciente/presentation/pages/recetas/DetalleReceta';

/* Médico */
import HomeMedico from './features/medico/presentation/pages/HomeMedico';
import Consultas from './features/medico/presentation/pages/Consultas';
import Pacientes from './features/medico/presentation/pages/Pacientes';
import RecetasMedico from './features/medico/presentation/pages/RecetasMedico';

/* Admin */
import Dashboard from './features/admin/presentation/pages/Dashboard';
import Usuarios from './features/admin/presentation/pages/Usuarios';
import Especialidades from './features/admin/presentation/pages/Especialidades';

/* Protected Route */
import ProtectedRoute from './core/routes/ProtectedRoute';

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
            path="/paciente/historial/detalle"
            component={DetalleHistorial}
            exact
            allowedRoles={['paciente']}
          />

          <ProtectedRoute
            path="/paciente/recetas"
            component={RecetasPaciente}
            exact
            allowedRoles={['paciente']}
          />

          <ProtectedRoute
            path="/paciente/recetas/detalle"
            component={DetalleReceta}
            exact
            allowedRoles={['paciente']}
          />          

          <ProtectedRoute
            path="/paciente/especialistas"
            component={Especialistas}
            exact
            allowedRoles={['paciente']}
          />

          <ProtectedRoute
            path="/paciente/especialistas/detalle"
            component={DetalleEspecialista}
            exact
            allowedRoles={['paciente']}
          />

          <ProtectedRoute
            path="/paciente/especialistas/consultar"
            component={ConsultarEspecialista}
            exact
            allowedRoles={['paciente']}
          />

          <ProtectedRoute
            path="/paciente/perfil"
            component={PerfilPaciente}
            exact
            allowedRoles={['paciente']}
          />

          <ProtectedRoute
            path="/paciente/cita/detalle"
            component={DetalleCita}
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