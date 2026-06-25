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
  videocamOutline,
  timeOutline,
  calendarClearOutline,
  medicalOutline,
  personOutline,
  informationCircleOutline,
  arrowBackOutline
} from 'ionicons/icons';

import { useHistory } from 'react-router-dom';

import './DetalleCita.css';

const DetalleCita: React.FC = () => {
  const history = useHistory();

  console.log('Estoy en DetalleCita');  

  const cita = {
    medico: 'Dr. Juan Pérez',
    especialidad: 'Cardiología',
    fecha: 'Hoy',
    hora: '16:30',
    modalidad: 'Consulta virtual',
    estado: 'Confirmada',
    motivo: 'Control cardiológico general',
    indicaciones:
      'Ingresar 5 minutos antes de la consulta. Tener a mano exámenes previos si existen.'
  };

  return (
    <IonPage>
      <IonContent fullscreen className="detalle-cita-content">
        <div className="detalle-cita-container">

          {/* Header */}
          <header className="detalle-cita-header">
            <div className="detalle-cita-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="detalle-cita-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Volver */}
          <div className="detalle-back-row" onClick={() => history.push('/paciente/home')}>
            <IonIcon icon={arrowBackOutline} />
            <span>Volver</span>
          </div>

          {/* Título */}
          <section className="detalle-title-section">
            <h1>Detalle de Cita</h1>
          </section>

          {/* Card principal */}
          <section className="detalle-main-card">
            <div className="detalle-card-header">
              <h2>{cita.medico}</h2>
              <span>{cita.estado}</span>
            </div>

            <div className="detalle-doctor-row">
              <div className="detalle-avatar">
                <IonIcon icon={personCircleOutline} />
              </div>

              <div>
                <h3>{cita.especialidad}</h3>
                <p>{cita.modalidad}</p>
              </div>
            </div>

            <div className="detalle-info-list">
              <div className="detalle-info-item">
                <IonIcon icon={calendarClearOutline} />
                <div>
                  <span>Fecha</span>
                  <p>{cita.fecha}</p>
                </div>
              </div>

              <div className="detalle-info-item">
                <IonIcon icon={timeOutline} />
                <div>
                  <span>Hora</span>
                  <p>{cita.hora}</p>
                </div>
              </div>

              <div className="detalle-info-item">
                <IonIcon icon={medicalOutline} />
                <div>
                  <span>Especialidad</span>
                  <p>{cita.especialidad}</p>
                </div>
              </div>

              <div className="detalle-info-item">
                <IonIcon icon={videocamOutline} />
                <div>
                  <span>Modalidad</span>
                  <p>{cita.modalidad}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Información adicional */}
          <section className="detalle-extra-card">
            <h2>Información de la consulta</h2>

            <div className="detalle-extra-item">
              <IonIcon icon={informationCircleOutline} />
              <div>
                <span>Motivo</span>
                <p>{cita.motivo}</p>
              </div>
            </div>

            <div className="detalle-extra-item">
              <IonIcon icon={documentTextOutline} />
              <div>
                <span>Indicaciones</span>
                <p>{cita.indicaciones}</p>
              </div>
            </div>
          </section>

          {/* Acciones */}
          <section className="detalle-actions">
            <IonButton className="detalle-join-button">
              <IonIcon icon={videocamOutline} slot="start" />
              Unirse a consulta
            </IonButton>

            <IonButton
              fill="outline"
              className="detalle-cancel-button"
              onClick={() => history.push('/paciente/home')}
            >
              Volver al inicio
            </IonButton>
          </section>

          <div className="detalle-cita-bottom-space"></div>

          {/* Navbar inferior */}
          <nav className="detalle-cita-bottom-nav">
            <div
              className="detalle-cita-nav-item active"
              onClick={() => history.push('/paciente/home')}
            >
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div
              className="detalle-cita-nav-item"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div
              className="detalle-cita-nav-item"
              onClick={() => history.push('/paciente/historial')}
            >
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div
              className="detalle-cita-nav-item"
              onClick={() => history.push('/paciente/recetas')}
            >
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div
              className="detalle-cita-nav-item"
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

export default DetalleCita;