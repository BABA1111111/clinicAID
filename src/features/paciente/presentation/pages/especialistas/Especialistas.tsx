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
  star,
  starHalfOutline,
  starOutline,
  locationOutline,
  timeOutline
} from 'ionicons/icons';

import { useHistory } from 'react-router-dom';

import './Especialistas.css';

const Especialistas: React.FC = () => {

  console.log('Estoy en Especialistas de FEATURES');

  const history = useHistory();

  const especialistas = [
    {
      id: 1,
      nombre: 'Dra. María Soto',
      especialidad: 'Psicología',
      disponibilidad: 'Disponible Hoy',
      horario: '10:00 - 16:00',
      modalidad: 'Consulta virtual',
      imagen: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Cardiología',
      disponibilidad: 'Disponible Mañana',
      horario: '09:00 - 13:00',
      modalidad: 'Consulta virtual',
      imagen: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      nombre: 'Dr. Carlos Ruiz',
      especialidad: 'Medicina General',
      disponibilidad: 'Disponible 14:30',
      horario: '14:30 - 18:00',
      modalidad: 'Consulta virtual',
      imagen: 'https://randomuser.me/api/portraits/men/65.jpg'
    }
  ];

  return (
    <IonPage>
      <IonContent fullscreen className="especialistas-content">
        <div className="especialistas-container">

          {/* Header */}
          <header className="especialistas-header">
            <div className="especialistas-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="especialistas-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Título */}
          <section className="especialistas-title-section">
            <h1>Especialistas</h1>
          </section>

          {/* Filtros */}
          <section className="especialistas-filters-card">
            <div className="especialistas-search-box">
              <IonIcon icon={searchOutline} />
              <IonInput
                placeholder="Buscar especialista..."
                className="especialistas-search-input"
              />
            </div>

            <div className="especialistas-filter-option">
              <IonSelect placeholder="Especialidad" interface="popover">
                <IonSelectOption value="psicologia">Psicología</IonSelectOption>
                <IonSelectOption value="cardiologia">Cardiología</IonSelectOption>
                <IonSelectOption value="medicina-general">Medicina General</IonSelectOption>
              </IonSelect>
            </div>

            <div className="especialistas-filter-option active">
              <IonSelect placeholder="Disponibilidad" interface="popover">
                <IonSelectOption value="hoy">Hoy</IonSelectOption>
                <IonSelectOption value="manana">Mañana</IonSelectOption>
                <IonSelectOption value="semana">Esta semana</IonSelectOption>
              </IonSelect>
            </div>
          </section>

          {/* Lista especialistas */}
          <section className="especialistas-list">
            {especialistas.map((especialista) => (
              <div className="especialista-card" key={especialista.id}>
                <div className="especialista-main-info">
                  <img
                    src={especialista.imagen}
                    alt={especialista.nombre}
                    className="especialista-img"
                  />

                  <div className="especialista-text">
                    <h2>{especialista.nombre}</h2>
                    <h3>{especialista.especialidad}</h3>

                    <div className="especialista-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={starHalfOutline} />
                      <IonIcon icon={starOutline} />
                    </div>
                  </div>
                </div>

                <div className="especialista-details">
                  <p>
                    <IonIcon icon={timeOutline} />
                    {especialista.disponibilidad} · {especialista.horario}
                  </p>

                  <p>
                    <IonIcon icon={locationOutline} />
                    {especialista.modalidad}
                  </p>
                </div>

                <div className="especialista-actions">
                    <IonButton
                      fill="outline"
                      className="especialista-profile-button"
                      onClick={() => history.push('/paciente/especialistas/detalle')}
                    >
                      Ver perfil
                    </IonButton>

                  <IonButton
                    className="especialista-schedule-button"
                    onClick={() => history.push('/paciente/agendar')}
                  >
                    Agendar
                  </IonButton>
                </div>
              </div>
            ))}
          </section>

          <div className="especialistas-bottom-space"></div>

          {/* Navegación inferior */}
          <nav className="especialistas-bottom-nav">
            <div
              className="especialistas-nav-item"
              onClick={() => history.push('/paciente/home')}
            >
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div
              className="especialistas-nav-item"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div
              className="especialistas-nav-item"
              onClick={() => history.push('/paciente/historial')}
            >
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div
              className="especialistas-nav-item"
              onClick={() => history.push('/paciente/recetas')}
            >
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div className="especialistas-nav-item active">
              <IonIcon icon={peopleOutline} />
              <span>Especialistas</span>
            </div>
          </nav>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Especialistas;