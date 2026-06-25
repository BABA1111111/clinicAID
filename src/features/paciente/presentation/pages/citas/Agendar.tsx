import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonAlert
} from '@ionic/react';

import {
  personCircleOutline,
  notificationsOutline,
  searchOutline,
  homeOutline,
  calendarOutline,
  documentTextOutline,
  medkitOutline,
  peopleOutline,
  star,
  starHalfOutline,
  starOutline
} from 'ionicons/icons';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Agendar.css';

const Agendar: React.FC = () => {
  const history = useHistory();  

  const [citaAgendada, setCitaAgendada] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
 
  const handleAgendarCita = () => {
    setCitaAgendada(true);
    setMostrarAlerta(true);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="agendar-content">
        <div className="agendar-container">

          {/* Header */}
          <header className="agendar-header">
            <div className="agendar-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="agendar-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Título */}
          <section className="agendar-title-section">
            <h1>Agendar Cita</h1>
          </section>

          {/* Filtros */}
          <section className="filters-card">
            <div className="search-box">
              <IonIcon icon={searchOutline} />
              <IonInput
                placeholder="Buscar..."
                className="search-input"
              />
            </div>

            <div className="filter-option">
              <IonSelect
                placeholder="Especialidad"
                interface="popover"
              >
                <IonSelectOption value="cardiologia">Cardiología</IonSelectOption>
                <IonSelectOption value="psicologia">Psicología</IonSelectOption>
                <IonSelectOption value="medicina-general">Medicina General</IonSelectOption>
              </IonSelect>
            </div>

            <div className="filter-option active">
              <IonSelect
                placeholder="Fecha"
                interface="popover"
              >
                <IonSelectOption value="hoy">Hoy</IonSelectOption>
                <IonSelectOption value="manana">Mañana</IonSelectOption>
                <IonSelectOption value="semana">Esta semana</IonSelectOption>
              </IonSelect>
            </div>

            <div className="filter-option">
              <IonSelect
                placeholder="Especialista"
                interface="popover"
              >
                <IonSelectOption value="maria-soto">Dra. María Soto</IonSelectOption>
                <IonSelectOption value="juan-perez">Dr. Juan Pérez</IonSelectOption>
                <IonSelectOption value="carlos-ruiz">Dr. Carlos Ruiz</IonSelectOption>
              </IonSelect>
            </div>
          </section>

          {/* Tarjeta especialista */}
          <section className="doctor-card">
            <div className="doctor-info">
              <h2>Dra. María Soto</h2>
              <h3>Psicología</h3>

              <p>Disponible Hoy</p>
              <p>Valor consulta: $20.000</p>

              <div className="rating-row">
                <span>Rating:</span>
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={starHalfOutline} />
                <IonIcon icon={starOutline} />
              </div>

              <p>Horarios: 10:00 &nbsp; 11:30 &nbsp; 16:00</p>

                <IonButton
                  className="schedule-button"
                  onClick={handleAgendarCita}
                  disabled={citaAgendada}
                >
                  {citaAgendada ? 'Agendada' : 'Agendar'}
                </IonButton>
            </div>

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Dra. María Soto"
              className="doctor-img"
            />
          </section>

          <div className="bottom-space"></div>

          {/* Navegación inferior */}
          <nav className="agendar-bottom-nav">
            <div className="agendar-nav-item" onClick={() => history.push('/paciente/home')}>
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div className="agendar-nav-item active">
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div className="agendar-nav-item" onClick={() => history.push('/paciente/historial')}>
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div className="agendar-nav-item" onClick={() => history.push('/paciente/recetas')}>
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div className="agendar-nav-item" onClick={() => history.push('/paciente/especialistas')}>
              <IonIcon icon={peopleOutline} />
              <span>Especialistas</span>
            </div>
          </nav>

          <IonAlert
            isOpen={mostrarAlerta}
            header="Cita agendada"
            message="Tu cita con la Dra. María Soto fue agendada correctamente."
            buttons={[
              {
                text: 'Ver detalle',
                handler: () => {
                  history.push('/paciente/detalle-cita');
                }
              },
              {
                text: 'Aceptar',
                role: 'cancel'
              }
            ]}
            onDidDismiss={() => setMostrarAlerta(false)}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Agendar;