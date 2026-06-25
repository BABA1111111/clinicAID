import {
  IonPage,
  IonContent,
  IonIcon,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton
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
  eyeOutline,
  calendar,
  person,
  medical
} from 'ionicons/icons';

import { useHistory } from 'react-router-dom';

import './Historial.css';

const Historial: React.FC = () => {
  const history = useHistory();

  const consultas = [
    {
      id: 1,
      fecha: '1 de Marzo',
      medico: 'Dra. María Soto',
      especialidad: 'Psicología',
      estado: 'Finalizada'
    },
    {
      id: 2,
      fecha: '15 de Enero',
      medico: 'Dr. Esteban Quito',
      especialidad: 'Cardiología',
      estado: 'Finalizada'
    }
  ];

  return (
    <IonPage>
      <IonContent fullscreen className="historial-content">
        <div className="historial-container">

          {/* Header */}
          <header className="historial-header">
            <div className="historial-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="historial-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Título */}
          <section className="historial-title-section">
            <h1>Historial de Consultas</h1>
          </section>

          {/* Filtros */}
          <section className="historial-filters-card">
            <div className="historial-search-box">
              <IonIcon icon={searchOutline} />
              <IonInput
                placeholder="Buscar..."
                className="historial-search-input"
              />
            </div>

            <div className="historial-filter-option">
              <IonSelect placeholder="Especialidad" interface="popover">
                <IonSelectOption value="psicologia">Psicología</IonSelectOption>
                <IonSelectOption value="cardiologia">Cardiología</IonSelectOption>
                <IonSelectOption value="medicina-general">Medicina General</IonSelectOption>
              </IonSelect>
            </div>

            <div className="historial-filter-option">
              <IonSelect placeholder="Fecha" interface="popover">
                <IonSelectOption value="reciente">Más reciente</IonSelectOption>
                <IonSelectOption value="antiguo">Más antiguo</IonSelectOption>
              </IonSelect>
            </div>

            <div className="historial-filter-option active">
              <IonSelect placeholder="Estado" interface="popover">
                <IonSelectOption value="finalizada">Finalizada</IonSelectOption>
                <IonSelectOption value="pendiente">Pendiente</IonSelectOption>
                <IonSelectOption value="cancelada">Cancelada</IonSelectOption>
              </IonSelect>
            </div>
          </section>

          {/* Lista historial */}
          <section className="historial-list-card">
            {consultas.map((consulta) => (
              <div className="historial-item" key={consulta.id}>
                <div className="historial-line"></div>

                <div className="historial-info">
                  <p className="historial-date">
                    <IonIcon icon={calendar} />
                    <strong>{consulta.fecha}</strong>
                  </p>

                  <p>
                    <IonIcon icon={person} />
                    {consulta.medico}
                  </p>

                  <p>
                    <IonIcon icon={medical} />
                    {consulta.especialidad}
                  </p>

                  <span className="historial-status">
                    {consulta.estado}
                  </span>
                </div>

                <IonButton
                  className="historial-details-button"
                  onClick={() => history.push('/paciente/historial/detalle')}
                >
                  <IonIcon icon={eyeOutline} slot="start" />
                  Ver detalles
                </IonButton>
              </div>
            ))}
          </section>

          <div className="historial-bottom-space"></div>

          {/* Navegación inferior */}
          <nav className="historial-bottom-nav">
            <div
              className="historial-nav-item"
              onClick={() => history.push('/paciente/home')}
            >
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div
              className="historial-nav-item"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div className="historial-nav-item active">
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div
              className="historial-nav-item"
              onClick={() => history.push('/paciente/recetas')}
            >
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div
              className="historial-nav-item"
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

export default Historial;