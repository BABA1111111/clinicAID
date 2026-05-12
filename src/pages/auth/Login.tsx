import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonText
} from '@ionic/react';

import { useHistory } from 'react-router-dom';
import { login, UserRole } from '../../services/authService';
import './Login.css';

const Login: React.FC = () => {
  const history = useHistory();

  const handleLogin = (role: UserRole) => {
    login(role);

    if (role === 'paciente') history.push('/paciente/home');
    if (role === 'medico') history.push('/medico/home');
    if (role === 'admin') history.push('/admin/dashboard');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="login-content">
        <div className="login-container">

          <div className="login-logo">
            ClinicAID<span>+</span>
          </div>

          <h1>¡Bienvenido de vuelta!</h1>

          <div className="login-form">
            <IonItem className="login-input">
              <IonInput placeholder="Correo electrónico" type="email" />
            </IonItem>

            <IonItem className="login-input">
              <IonInput placeholder="Contraseña" type="password" />
            </IonItem>

            <IonText className="forgot-password">
              ¿Olvidaste tu contraseña?
            </IonText>

            <IonButton expand="block" className="main-button" onClick={() => handleLogin('paciente')}>
              INICIAR SESIÓN
            </IonButton>

            <p className="register-text">
              ¿No tienes una cuenta? <span onClick={() => history.push('/register')}>Regístrate</span>
            </p>
          </div>

          <div className="role-buttons">
            <p>Acceso rápido por rol</p>

            <IonButton size="small" fill="outline" onClick={() => handleLogin('paciente')}>
              Paciente
            </IonButton>

            <IonButton size="small" fill="outline" onClick={() => handleLogin('medico')}>
              Médico
            </IonButton>

            <IonButton size="small" fill="outline" onClick={() => handleLogin('admin')}>
              Admin
            </IonButton>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;