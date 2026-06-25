import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonAlert
} from '@ionic/react';

import {
  personCircleOutline,
  notificationsOutline,
  homeOutline,
  calendarOutline,
  documentTextOutline,
  medkitOutline,
  peopleOutline
} from 'ionicons/icons';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './HomePaciente.css';

const HomePaciente: React.FC = () => {

  console.log('Estoy en HomePaciente actualizado');
    
  const history = useHistory();

  const [citaCancelada, setCitaCancelada] = useState(false);
  const [mostrarConfirmacionCancelar, setMostrarConfirmacionCancelar] = useState(false);

  const [especialistaActivo, setEspecialistaActivo] = useState(1);

  const especialistas = [
    {
      id: 1,
      nombre: 'Dr. Esteban Cruz',
      especialidad: 'Cardiología',
      disponible: 'Disponible 18:00',
      imagen: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      nombre: 'Dra. María Soto',
      especialidad: 'Psicología',
      disponible: 'Disponible Hoy',
      imagen: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      nombre: 'Dr. Carlos Ruiz',
      especialidad: 'Medicina General',
      disponible: 'Disponible 14:30',
      imagen: 'https://randomuser.me/api/portraits/men/65.jpg'
    }
  ];

  const handleCancelarCita = () => {
    setCitaCancelada(true);
    setMostrarConfirmacionCancelar(false);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="home-paciente-content">
        <div className="home-paciente-container">

          {/* Header */}
          <header className="home-header">
            <div className="home-logo">
              ClinicAID<span>+</span>
            </div>

              <div className="home-icons">
                <IonIcon
                  icon={personCircleOutline}
                  onClick={() => history.push('/paciente/perfil')}
                />
                <IonIcon icon={notificationsOutline} />
              </div>
          </header>

          {/* Saludo */}
          <section className="welcome-section">
            <h1>Buenos días, Usuario 👋</h1>
          </section>

          {/* Próxima cita */}
          {!citaCancelada ? (
            <section className="next-appointment-card">
              <div className="appointment-header">
                Próxima Cita
              </div>

              <div className="appointment-body">
                <h2>Médico: Dr. Juan Pérez</h2>
                <p>Especialidad: Cardiología</p>
                <p>Fecha y hora: Hoy - 16:30</p>
                <p>Estado: Consulta virtual</p>

                <div className="appointment-actions">
                  <IonButton className="join-button">
                    Unirse
                  </IonButton>

                  <IonButton
                    fill="outline"
                    className="details-button"
                    onClick={() => history.push('/paciente/cita/detalle')}
                  >
                    Detalles
                  </IonButton>

                  <IonButton
                    fill="outline"
                    className="cancel-appointment-button"
                    onClick={() => setMostrarConfirmacionCancelar(true)}
                  >
                    Cancelar
                  </IonButton>
                </div>
              </div>
            </section>
          ) : (
            <section className="no-appointment-card">
              <h2>No tienes citas próximas</h2>
              <p>Puedes agendar una nueva consulta con un especialista disponible.</p>

              <IonButton
                className="go-schedule-button"
                onClick={() => history.push('/paciente/agendar')}
              >
                Agendar cita
              </IonButton>
            </section>
          )}

          {/* Especialistas */}
          <section className="specialists-section">
            <h2>Especialistas Disponibles:</h2>

            <div className="specialists-carousel">
              {especialistas.map((especialista, index) => (
                <div
                  key={especialista.id}
                  className={`specialist-card ${index === especialistaActivo ? 'active' : ''}`}
                >
                  <img
                    src={especialista.imagen}
                    alt={especialista.nombre}
                    className="specialist-img"
                  />

                  <h3>{especialista.nombre}</h3>
                  <p>{especialista.especialidad}</p>
                  <span>{especialista.disponible}</span>

                  <IonButton
                    className="see-more-button"
                    onClick={() => history.push('/paciente/especialistas/detalle')}
                  >
                    Ver perfil
                  </IonButton>
                </div>
              ))}
            </div>

            <div className="carousel-dots">
              {especialistas.map((especialista, index) => (
                <button
                  key={especialista.id}
                  className={index === especialistaActivo ? 'active-dot' : ''}
                  onClick={() => setEspecialistaActivo(index)}
                />
              ))}
            </div>
          </section>

          {/* Espacio para que el menú inferior no tape contenido */}
          <div className="bottom-space"></div>

          {/* Navegación inferior */}
          <nav className="home-bottom-nav">
            <div className="home-nav-item active">
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div className="home-nav-item" onClick={() => history.push('/paciente/agendar')}>
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div className="home-nav-item" onClick={() => history.push('/paciente/historial')}>
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div className="home-nav-item" onClick={() => history.push('/paciente/recetas')}>
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div className="home-nav-item" onClick={() => history.push('/paciente/especialistas')}>
              <IonIcon icon={peopleOutline} />
              <span>Especialistas</span>
            </div>
</nav>

          <IonAlert
            isOpen={mostrarConfirmacionCancelar}
            header="Cancelar cita"
            message="¿Estás seguro de que deseas cancelar esta cita?"
            buttons={[
              {
                text: 'No',
                role: 'cancel',
                handler: () => setMostrarConfirmacionCancelar(false)
              },
              {
                text: 'Sí, cancelar',
                role: 'destructive',
                handler: handleCancelarCita
              }
            ]}
            onDidDismiss={() => setMostrarConfirmacionCancelar(false)}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};


export default HomePaciente;