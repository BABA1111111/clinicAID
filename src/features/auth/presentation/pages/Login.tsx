import { useState } from 'react';

import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonText
} from '@ionic/react';

import { useHistory } from 'react-router-dom';
import { login, UserRole } from '../../data/authService';
import api from '../../../../core/http/api';
import './Login.css';

const Login: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const redirigirPorRol = (role: UserRole) => {
    if (role === 'paciente') history.push('/paciente/home');
    if (role === 'medico') history.push('/medico/home');
    if (role === 'admin') history.push('/admin/dashboard');
  };

  const handleLogin = async () => {
    try {
      setError('');

      if (!email || !password) {
        setError('Debe ingresar correo y contraseña.');
        return;
      }

      const response = await api.post('/auth/login', {
        email,
        password
      });

      const token = response.data.token;
      const role = response.data.rol as UserRole;

      login(token, role);

      redirigirPorRol(role);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Correo o contraseña incorrectos.');
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="login-content">
        <div className="login-container">

          <div className="login-logo">
            ClinicAID<span>+</span>
          </div>

          <div>
            <h1>¡Bienvenido de vuelta!</h1>

            <div className="login-form">
              <IonItem className="login-input">
                <IonInput
                  placeholder="Correo electrónico"
                  type="email"
                  value={email}
                  onIonInput={(e) => setEmail(e.detail.value!)}
                />
              </IonItem>

              <IonItem className="login-input">
                <IonInput
                  placeholder="Contraseña"
                  type="password"
                  value={password}
                  onIonInput={(e) => setPassword(e.detail.value!)}
                />
              </IonItem>

              {error && (
                <IonText color="danger">
                  <p className="login-error">{error}</p>
                </IonText>
              )}

              <IonText className="forgot-password">
                ¿Olvidaste tu contraseña?
              </IonText>

              <IonButton
                expand="block"
                className="main-button"
                onClick={handleLogin}
              >
                INICIAR SESIÓN
              </IonButton>

              <p className="register-text">
                ¿No tienes una cuenta?{' '}
                <span onClick={() => history.push('/register')}>
                  Regístrate
                </span>
              </p>
            </div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
