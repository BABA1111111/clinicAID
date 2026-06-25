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
  star,
  starHalfOutline,
  starOutline,
  arrowBackOutline,
  timeOutline,
  medicalOutline,
  videocamOutline,
  cashOutline,
  schoolOutline,
  chatbubbleEllipsesOutline
} from 'ionicons/icons';

import { useHistory } from 'react-router-dom';

import './DetalleEspecialista.css';

const DetalleEspecialista: React.FC = () => {
  const history = useHistory();

  const especialista = {
    nombre: 'Dra. María Soto',
    especialidad: 'Psicología',
    disponibilidad: 'Disponible Hoy',
    horario: '10:00 - 16:00',
    valor: '$20.000',
    modalidad: 'Consulta virtual',
    experiencia: '8 años de experiencia',
    descripcion:
      'Especialista en salud mental, ansiedad, estrés y acompañamiento psicológico para adultos.',
    imagen: 'https://randomuser.me/api/portraits/women/44.jpg'
  };

  return (
    <IonPage>
      <IonContent fullscreen className="detalle-especialista-content">
        <div className="detalle-especialista-container">

          {/* Header */}
          <header className="detalle-especialista-header">
            <div className="detalle-especialista-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="detalle-especialista-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Volver */}
          <div
            className="detalle-especialista-back"
            onClick={() => history.push('/paciente/home')}
          >
            <IonIcon icon={arrowBackOutline} />
            <span>Volver</span>
            
          </div>

          {/* Título */}
          <section className="detalle-especialista-title">
            <h1>Detalle Especialista</h1>
          </section>

          {/* Card principal */}
          <section className="detalle-especialista-card">
            <div className="detalle-especialista-profile">
              <img
                src={especialista.imagen}
                alt={especialista.nombre}
                className="detalle-especialista-img"
              />

              <div className="detalle-especialista-main-info">
                <h2>{especialista.nombre}</h2>
                <h3>{especialista.especialidad}</h3>

                <div className="detalle-especialista-rating">
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                  <IonIcon icon={starHalfOutline} />
                  <IonIcon icon={starOutline} />
                </div>
              </div>
            </div>

            <p className="detalle-especialista-description">
              {especialista.descripcion}
            </p>
          </section>

          {/* Información */}
          <section className="detalle-especialista-info-card">
            <h2>Información de atención</h2>

            <div className="detalle-especialista-info-item">
              <IonIcon icon={medicalOutline} />
              <div>
                <span>Especialidad</span>
                <p>{especialista.especialidad}</p>
              </div>
            </div>

            <div className="detalle-especialista-info-item">
              <IonIcon icon={timeOutline} />
              <div>
                <span>Horario</span>
                <p>{especialista.horario}</p>
              </div>
            </div>

            <div className="detalle-especialista-info-item">
              <IonIcon icon={cashOutline} />
              <div>
                <span>Valor consulta</span>
                <p>{especialista.valor}</p>
              </div>
            </div>

            <div className="detalle-especialista-info-item">
              <IonIcon icon={videocamOutline} />
              <div>
                <span>Modalidad</span>
                <p>{especialista.modalidad}</p>
              </div>
            </div>

            <div className="detalle-especialista-info-item">
              <IonIcon icon={schoolOutline} />
              <div>
                <span>Experiencia</span>
                <p>{especialista.experiencia}</p>
              </div>
            </div>
          </section>

          {/* Acciones */}
          <section className="detalle-especialista-actions">
            <IonButton
              className="detalle-especialista-agendar-button"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} slot="start" />
              Agendar cita
            </IonButton>

            <IonButton
              fill="outline"
              className="detalle-especialista-message-button"
              onClick={() => history.push('/paciente/especialistas/consultar')}
            >
              <IonIcon icon={chatbubbleEllipsesOutline} slot="start" />
              Consultar
            </IonButton>
          </section>

          <div className="detalle-especialista-bottom-space"></div>

          {/* Navbar inferior */}
          <nav className="detalle-especialista-bottom-nav">
            <div
              className="detalle-especialista-nav-item active"
              onClick={() => history.push('/paciente/home')}
            >
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div
              className="detalle-especialista-nav-item"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div
              className="detalle-especialista-nav-item"
              onClick={() => history.push('/paciente/historial')}
            >
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div
              className="detalle-especialista-nav-item"
              onClick={() => history.push('/paciente/recetas')}
            >
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div
              className="detalle-especialista-nav-item"
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

export default DetalleEspecialista;