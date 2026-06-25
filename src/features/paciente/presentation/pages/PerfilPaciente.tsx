import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton
} from '@ionic/react';

import {
  personCircleOutline,
  notificationsOutline,
  homeOutline,
  calendarOutline,
  documentTextOutline,
  medkitOutline,
  peopleOutline,
  mailOutline,
  callOutline,
  locationOutline,
  idCardOutline,
  createOutline,
  logOutOutline
} from 'ionicons/icons';

import { useHistory } from 'react-router-dom';

import './PerfilPaciente.css';

const PerfilPaciente: React.FC = () => {
  const history = useHistory();

  const usuario = {
    nombre: 'Juan Pérez',
    rut: '12.345.678-9',
    email: 'juan.perez@email.com',
    telefono: '+56 9 1234 5678',
    region: 'Región Metropolitana',
    comuna: 'Santiago',
    rol: 'Paciente'
  };

  const handleCerrarSesion = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    history.push('/login');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="perfil-paciente-content">
        <div className="perfil-paciente-container">

          {/* Header */}
          <header className="perfil-paciente-header">
            <div className="perfil-paciente-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="perfil-paciente-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Título */}
          <section className="perfil-title-section">
            <h1>Mi Perfil</h1>
          </section>

          {/* Card principal */}
          <section className="perfil-card">
            <div className="perfil-avatar">
              <IonIcon icon={personCircleOutline} />
            </div>

            <h2>{usuario.nombre}</h2>
            <p>{usuario.rol}</p>

            <IonButton className="perfil-edit-button">
              <IonIcon icon={createOutline} slot="start" />
              Editar perfil
            </IonButton>
          </section>

          {/* Información personal */}
          <section className="perfil-info-card">
            <h3>Información personal</h3>

            <div className="perfil-info-item">
              <IonIcon icon={idCardOutline} />
              <div>
                <span>RUT</span>
                <p>{usuario.rut}</p>
              </div>
            </div>

            <div className="perfil-info-item">
              <IonIcon icon={mailOutline} />
              <div>
                <span>Correo electrónico</span>
                <p>{usuario.email}</p>
              </div>
            </div>

            <div className="perfil-info-item">
              <IonIcon icon={callOutline} />
              <div>
                <span>Teléfono</span>
                <p>{usuario.telefono}</p>
              </div>
            </div>

            <div className="perfil-info-item">
              <IonIcon icon={locationOutline} />
              <div>
                <span>Ubicación</span>
                <p>{usuario.comuna}, {usuario.region}</p>
              </div>
            </div>
          </section>

          {/* Acciones */}
          <section className="perfil-actions-card">
            <IonButton
              expand="block"
              className="perfil-logout-button"
              onClick={handleCerrarSesion}
            >
              <IonIcon icon={logOutOutline} slot="start" />
              Cerrar sesión
            </IonButton>
          </section>

          <div className="perfil-paciente-bottom-space"></div>

          {/* Navegación inferior */}
          <nav className="perfil-paciente-bottom-nav">
            <div
              className="perfil-paciente-nav-item"
              onClick={() => history.push('/paciente/home')}
            >
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div
              className="perfil-paciente-nav-item"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div
              className="perfil-paciente-nav-item"
              onClick={() => history.push('/paciente/historial')}
            >
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div
              className="perfil-paciente-nav-item"
              onClick={() => history.push('/paciente/recetas')}
            >
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div
              className="perfil-paciente-nav-item"
              onClick={() => history.push('/paciente/especialistas')}
            >
              <IonIcon icon={peopleOutline} />
              <span>Especialistas</span>
            </div>
          </nav>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default PerfilPaciente;