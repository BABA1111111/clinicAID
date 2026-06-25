import { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonText,
  IonCheckbox,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

import { useHistory } from 'react-router-dom';
import api from '../../../../core/http/api';
import './Register.css';

const Register: React.FC = () => {
  const history = useHistory();

  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setError('');

    if (!nombre || !rut || !email || !region || !comuna || !password || !confirmarPassword) {
      setError('Debe completar todos los campos.');
      return;
    }

    if (password !== confirmarPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (!aceptaTerminos) {
      setError('Debe aceptar los términos y condiciones.');
      return;
    }

    try {
      await api.post('/auth/register', {
        nombre,
        rut,
        email,
        region,
        comuna,
        password,
        rol: 'paciente'
      });

      history.push('/login');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setError('No se pudo registrar el usuario.');
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="register-content">
        <div className="register-container">

          <div className="register-logo">
            ClinicAID<span>+</span>
          </div>

          <h1 className="register-title">¡Bienvenido!</h1>

          <div className="register-form">
            <IonItem className="register-input">
              <IonInput
                placeholder="Nombre"
                value={nombre}
                onIonInput={(e) => setNombre(e.detail.value!)}
              />
            </IonItem>

            <IonItem className="register-input">
              <IonInput
                placeholder="RUT"
                value={rut}
                onIonInput={(e) => setRut(e.detail.value!)}
              />
            </IonItem>

            <IonItem className="register-input">
              <IonInput
                placeholder="Email"
                type="email"
                value={email}
                onIonInput={(e) => setEmail(e.detail.value!)}
              />
            </IonItem>

            <IonItem className="register-input">
              <IonSelect
                placeholder="Región"
                value={region}
                onIonChange={(e) => setRegion(e.detail.value)}
              >
                <IonSelectOption value="metropolitana">Región Metropolitana</IonSelectOption>
                <IonSelectOption value="valparaiso">Valparaíso</IonSelectOption>
                <IonSelectOption value="biobio">Biobío</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="register-input">
              <IonSelect
                placeholder="Comuna"
                value={comuna}
                onIonChange={(e) => setComuna(e.detail.value)}
              >
                <IonSelectOption value="santiago">Santiago</IonSelectOption>
                <IonSelectOption value="providencia">Providencia</IonSelectOption>
                <IonSelectOption value="maipu">Maipú</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="register-input">
              <IonInput
                placeholder="Contraseña"
                type="password"
                value={password}
                onIonInput={(e) => setPassword(e.detail.value!)}
              />
            </IonItem>

            <IonItem className="register-input">
              <IonInput
                placeholder="Confirmar contraseña"
                type="password"
                value={confirmarPassword}
                onIonInput={(e) => setConfirmarPassword(e.detail.value!)}
              />
            </IonItem>

            <div className="register-terms">
              <IonCheckbox
                checked={aceptaTerminos}
                onIonChange={(e) => setAceptaTerminos(e.detail.checked)}
              />
              <span>Acepto los términos y condiciones</span>
            </div>

            {error && (
              <IonText color="danger">
                <p className="register-error">{error}</p>
              </IonText>
            )}

            <IonButton
              expand="block"
              className="register-button"
              onClick={handleRegister}
            >
              REGISTRARSE
            </IonButton>

            <p className="register-text">
              ¿Ya tienes una cuenta?{' '}
              <span onClick={() => history.push('/login')}>
                Inicia sesión
              </span>
            </p>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;