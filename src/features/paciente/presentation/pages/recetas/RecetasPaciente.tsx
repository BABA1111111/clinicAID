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
  downloadOutline,
  qrCodeOutline,
  medicalOutline,
  personOutline,
  calendarClearOutline
} from 'ionicons/icons';

import { useHistory } from 'react-router-dom';

import './RecetasPaciente.css';

const RecetasPaciente: React.FC = () => {
  console.log('Estoy en RecetasPaciente de FEATURES');
  const history = useHistory();

  const recetas = [
    {
      id: 1,
      medicamento: 'Losartán 50mg',
      dosis: '1 comprimido diario',
      indicaciones: 'Tomar después de las comidas',
      medico: 'Dr. Juan Pérez',
      especialidad: 'Cardiología',
      fecha: '12 Junio 2026',
      estado: 'Vigente'
    },
    {
      id: 2,
      medicamento: 'Ibuprofeno 400mg',
      dosis: '1 comprimido cada 8 horas',
      indicaciones: 'Tomar solo en caso de dolor',
      medico: 'Dra. María Soto',
      especialidad: 'Medicina General',
      fecha: '02 Junio 2026',
      estado: 'Vigente'
    }
  ];

  return (
    <IonPage>
      <IonContent fullscreen className="recetas-paciente-content">
        <div className="recetas-paciente-container">

          {/* Header */}
          <header className="recetas-paciente-header">
            <div className="recetas-paciente-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="recetas-paciente-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Título */}
          <section className="recetas-paciente-title-section">
            <h1>Mis Recetas</h1>
          </section>

          {/* Filtros */}
          <section className="recetas-paciente-filters-card">
            <div className="recetas-paciente-search-box">
              <IonIcon icon={searchOutline} />
              <IonInput
                placeholder="Buscar receta..."
                className="recetas-paciente-search-input"
              />
            </div>

            <div className="recetas-paciente-filter-option">
              <IonSelect placeholder="Especialidad" interface="popover">
                <IonSelectOption value="cardiologia">Cardiología</IonSelectOption>
                <IonSelectOption value="psicologia">Psicología</IonSelectOption>
                <IonSelectOption value="medicina-general">Medicina General</IonSelectOption>
              </IonSelect>
            </div>

            <div className="recetas-paciente-filter-option">
              <IonSelect placeholder="Fecha" interface="popover">
                <IonSelectOption value="reciente">Más reciente</IonSelectOption>
                <IonSelectOption value="antiguo">Más antiguo</IonSelectOption>
              </IonSelect>
            </div>

            <div className="recetas-paciente-filter-option active">
              <IonSelect placeholder="Estado" interface="popover">
                <IonSelectOption value="vigente">Vigente</IonSelectOption>
                <IonSelectOption value="vencida">Vencida</IonSelectOption>
              </IonSelect>
            </div>
          </section>

          {/* Lista recetas */}
          <section className="recetas-paciente-list">
            {recetas.map((receta) => (
              <div className="receta-paciente-card" key={receta.id}>
                <div className="receta-paciente-card-header">
                  <div>
                    <h2>{receta.medicamento}</h2>
                    <span>{receta.estado}</span>
                  </div>

                  <IonIcon icon={qrCodeOutline} className="receta-qr-icon" />
                </div>

                <div className="receta-paciente-info">
                  <p>
                    <IonIcon icon={medicalOutline} />
                    {receta.dosis}
                  </p>

                  <p>
                    <IonIcon icon={documentTextOutline} />
                    {receta.indicaciones}
                  </p>

                  <p>
                    <IonIcon icon={personOutline} />
                    {receta.medico} - {receta.especialidad}
                  </p>

                  <p>
                    <IonIcon icon={calendarClearOutline} />
                    {receta.fecha}
                  </p>
                </div>

                <div className="receta-paciente-actions">
                  <IonButton
                    className="ver-receta-button"
                    onClick={() => history.push('/paciente/recetas/detalle')}
                  >
                    <IonIcon icon={eyeOutline} slot="start" />
                    Ver receta
                  </IonButton>

                  <IonButton fill="outline" className="descargar-receta-button">
                    <IonIcon icon={downloadOutline} slot="start" />
                    Descargar
                  </IonButton>
                </div>
              </div>
            ))}
          </section>

          <div className="recetas-paciente-bottom-space"></div>

          {/* Navegación inferior */}
          <nav className="recetas-paciente-bottom-nav">
            <div
              className="recetas-paciente-nav-item"
              onClick={() => history.push('/paciente/home')}
            >
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div
              className="recetas-paciente-nav-item"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div
              className="recetas-paciente-nav-item"
              onClick={() => history.push('/paciente/historial')}
            >
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div className="recetas-paciente-nav-item active">
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div
              className="recetas-paciente-nav-item"
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

export default RecetasPaciente;