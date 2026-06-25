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
  arrowBackOutline,
  calendarClearOutline,
  personOutline,
  medicalOutline,
  clipboardOutline,
  documentAttachOutline,
  checkmarkCircleOutline
} from 'ionicons/icons';

import { useHistory } from 'react-router-dom';

import './DetalleHistorial.css';

const DetalleHistorial: React.FC = () => {
  const history = useHistory();

  const consulta = {
    fecha: '1 de Marzo',
    medico: 'Dra. María Soto',
    especialidad: 'Psicología',
    estado: 'Finalizada',
    motivo: 'Consulta psicológica de seguimiento',
    diagnostico: 'Estrés y ansiedad leve',
    indicaciones:
      'Mantener rutinas de descanso, realizar ejercicios de respiración y asistir a control en 30 días.',
    receta: 'Sin receta asociada'
  };

  return (
    <IonPage>
      <IonContent fullscreen className="detalle-historial-content">
        <div className="detalle-historial-container">

          {/* Header */}
          <header className="detalle-historial-header">
            <div className="detalle-historial-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="detalle-historial-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Volver */}
          <div
            className="detalle-historial-back"
            onClick={() => history.push('/paciente/historial')}
          >
            <IonIcon icon={arrowBackOutline} />
            <span>Volver</span>
          </div>

          {/* Título */}
          <section className="detalle-historial-title">
            <h1>Detalle de Consulta</h1>
          </section>

          {/* Card principal */}
          <section className="detalle-historial-main-card">
            <div className="detalle-historial-card-header">
              <h2>{consulta.especialidad}</h2>
              <span>{consulta.estado}</span>
            </div>

            <div className="detalle-historial-info-grid">
              <div className="detalle-historial-info-item">
                <IonIcon icon={calendarClearOutline} />
                <div>
                  <span>Fecha</span>
                  <p>{consulta.fecha}</p>
                </div>
              </div>

              <div className="detalle-historial-info-item">
                <IonIcon icon={personOutline} />
                <div>
                  <span>Médico</span>
                  <p>{consulta.medico}</p>
                </div>
              </div>

              <div className="detalle-historial-info-item">
                <IonIcon icon={medicalOutline} />
                <div>
                  <span>Especialidad</span>
                  <p>{consulta.especialidad}</p>
                </div>
              </div>

              <div className="detalle-historial-info-item">
                <IonIcon icon={checkmarkCircleOutline} />
                <div>
                  <span>Estado</span>
                  <p>{consulta.estado}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Detalles clínicos */}
          <section className="detalle-historial-detail-card">
            <h2>Información de la atención</h2>

            <div className="detalle-historial-detail-item">
              <IonIcon icon={clipboardOutline} />
              <div>
                <span>Motivo de consulta</span>
                <p>{consulta.motivo}</p>
              </div>
            </div>

            <div className="detalle-historial-detail-item">
              <IonIcon icon={medicalOutline} />
              <div>
                <span>Diagnóstico</span>
                <p>{consulta.diagnostico}</p>
              </div>
            </div>

            <div className="detalle-historial-detail-item">
              <IonIcon icon={documentTextOutline} />
              <div>
                <span>Indicaciones</span>
                <p>{consulta.indicaciones}</p>
              </div>
            </div>

            <div className="detalle-historial-detail-item">
              <IonIcon icon={documentAttachOutline} />
              <div>
                <span>Receta</span>
                <p>{consulta.receta}</p>
              </div>
            </div>
          </section>

          {/* Acciones */}
          <section className="detalle-historial-actions">
            <IonButton
              className="detalle-historial-back-button"
              onClick={() => history.push('/paciente/historial')}
            >
              Volver al historial
            </IonButton>

            <IonButton
              fill="outline"
              className="detalle-historial-receta-button"
              onClick={() => history.push('/paciente/recetas')}
            >
              Ver recetas
            </IonButton>
          </section>

          <div className="detalle-historial-bottom-space"></div>

          {/* Navbar inferior */}
          <nav className="detalle-historial-bottom-nav">
            <div
              className="detalle-historial-nav-item"
              onClick={() => history.push('/paciente/home')}
            >
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div
              className="detalle-historial-nav-item"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div className="detalle-historial-nav-item active">
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div
              className="detalle-historial-nav-item"
              onClick={() => history.push('/paciente/recetas')}
            >
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div
              className="detalle-historial-nav-item"
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

export default DetalleHistorial;