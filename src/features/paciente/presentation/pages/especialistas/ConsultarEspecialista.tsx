import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonInput
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
  sendOutline,
  callOutline,
  videocamOutline,
  chatbubbleEllipsesOutline
} from 'ionicons/icons';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './ConsultarEspecialista.css';

interface Mensaje {
  id: number;
  texto: string;
  emisor: 'paciente' | 'especialista';
  hora: string;
}

const ConsultarEspecialista: React.FC = () => {
  const history = useHistory();

  const [mensaje, setMensaje] = useState('');

  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: 1,
      texto: 'Hola, soy la Dra. María Soto. ¿En qué puedo ayudarte?',
      emisor: 'especialista',
      hora: '10:00'
    },
    {
      id: 2,
      texto: 'Hola doctora, quería consultar si atiende casos de ansiedad.',
      emisor: 'paciente',
      hora: '10:02'
    },
    {
      id: 3,
      texto: 'Sí, trabajo con ansiedad, estrés y acompañamiento psicológico para adultos.',
      emisor: 'especialista',
      hora: '10:04'
    }
  ]);

  const enviarMensaje = () => {
    if (!mensaje.trim()) return;

    const nuevoMensaje: Mensaje = {
      id: Date.now(),
      texto: mensaje,
      emisor: 'paciente',
      hora: 'Ahora'
    };

    setMensajes([...mensajes, nuevoMensaje]);
    setMensaje('');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="consultar-especialista-content">
        <div className="consultar-especialista-container">

          {/* Header */}
          <header className="consultar-especialista-header">
            <div className="consultar-especialista-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="consultar-especialista-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Volver */}
          <div
            className="consultar-especialista-back"
            onClick={() => history.push('/paciente/especialistas/detalle')}
          >
            <IonIcon icon={arrowBackOutline} />
            <span>Volver</span>
          </div>

          {/* Título */}
          <section className="consultar-especialista-title-section">
            <h1>Consultar especialista</h1>
            <p>Comunícate directamente con el especialista antes de agendar.</p>
          </section>

          {/* Card especialista */}
          <section className="consultar-especialista-profile-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Dra. María Soto"
              className="consultar-especialista-img"
            />

            <div className="consultar-especialista-profile-info">
              <h2>Dra. María Soto</h2>
              <p>Psicología</p>
              <span>Disponible hoy · Responde normalmente en pocos minutos</span>
            </div>

            <div className="consultar-especialista-profile-actions">
              <IonButton
                fill="outline"
                className="consultar-especialista-action-button"
              >
                <IonIcon icon={callOutline} />
              </IonButton>

              <IonButton
                fill="outline"
                className="consultar-especialista-action-button"
              >
                <IonIcon icon={videocamOutline} />
              </IonButton>
            </div>
          </section>

          {/* Chat */}
          <section className="consultar-chat-card">
            <div className="consultar-chat-header">
              <div>
                <h2>Mensajes</h2>
                <p>Consulta tus dudas sobre disponibilidad, modalidad o especialidad.</p>
              </div>

              <IonIcon icon={chatbubbleEllipsesOutline} />
            </div>

            <div className="consultar-chat-messages">
              {mensajes.map((msg) => (
                <div
                  key={msg.id}
                  className={`consultar-message ${
                    msg.emisor === 'paciente'
                      ? 'consultar-message-paciente'
                      : 'consultar-message-especialista'
                  }`}
                >
                  <p>{msg.texto}</p>
                  <span>{msg.hora}</span>
                </div>
              ))}
            </div>

            <div className="consultar-chat-input-row">
              <IonInput
                placeholder="Escribe tu consulta..."
                value={mensaje}
                onIonInput={(e) => setMensaje(e.detail.value || '')}
                className="consultar-chat-input"
              />

              <IonButton
                className="consultar-send-button"
                onClick={enviarMensaje}
              >
                <IonIcon icon={sendOutline} />
              </IonButton>
            </div>
          </section>

          <div className="consultar-especialista-bottom-space"></div>

          {/* Navbar inferior */}
          <nav className="consultar-especialista-bottom-nav">
            <div
              className="consultar-especialista-nav-item"
              onClick={() => history.push('/paciente/home')}
            >
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div
              className="consultar-especialista-nav-item"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div
              className="consultar-especialista-nav-item"
              onClick={() => history.push('/paciente/historial')}
            >
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div
              className="consultar-especialista-nav-item"
              onClick={() => history.push('/paciente/recetas')}
            >
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div
              className="consultar-especialista-nav-item active"
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

export default ConsultarEspecialista;