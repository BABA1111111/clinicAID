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
  qrCodeOutline,
  downloadOutline,
  medicalOutline,
  personOutline,
  calendarClearOutline,
  documentAttachOutline,
  shieldCheckmarkOutline
} from 'ionicons/icons';

import { useHistory } from 'react-router-dom';

import './DetalleReceta.css';

const DetalleReceta: React.FC = () => {
  const history = useHistory();

  const receta = {
    paciente: 'Juan Pérez',
    medicamento: 'Losartán 50mg',
    dosis: '1 comprimido diario',
    indicaciones: 'Tomar después de las comidas',
    medico: 'Dr. Juan Pérez',
    especialidad: 'Cardiología',
    fecha: '12 Junio 2026',
    estado: 'Vigente',
    folio: 'RX-2026-0001'
  };

  return (
    <IonPage>
      <IonContent fullscreen className="detalle-receta-content">
        <div className="detalle-receta-container">

          {/* Header */}
          <header className="detalle-receta-header">
            <div className="detalle-receta-logo">
              ClinicAID<span>+</span>
            </div>

            <div className="detalle-receta-icons">
              <IonIcon
                icon={personCircleOutline}
                onClick={() => history.push('/paciente/perfil')}
              />
              <IonIcon icon={notificationsOutline} />
            </div>
          </header>

          {/* Volver */}
          <button
            className="detalle-receta-back"
            onClick={() => history.push('/paciente/recetas')}
          >
            <IonIcon icon={arrowBackOutline} />
            Volver
          </button>

          {/* Título */}
          <section className="detalle-receta-title-section">
            <h1>Detalle de Receta</h1>
          </section>

          {/* Card receta */}
          <section className="detalle-receta-card">

            <div className="detalle-receta-card-top">
              <div className="detalle-receta-card-title">
                <h2>Receta Electrónica</h2>
                <p>Folio: {receta.folio}</p>
              </div>

              <span className="detalle-receta-status">
                {receta.estado}
              </span>
            </div>

            {/* Paciente */}
            <div className="detalle-receta-section">
              <div className="detalle-receta-row">
                <IonIcon icon={personOutline} />

                <div className="detalle-receta-row-text">
                  <span className="detalle-receta-label">Paciente</span>
                  <span className="detalle-receta-value">{receta.paciente}</span>
                </div>
              </div>
            </div>

            {/* Medicamento */}
            <div className="detalle-receta-section">
              <div className="detalle-receta-row">
                <IonIcon icon={medicalOutline} />

                <div className="detalle-receta-row-text">
                  <span className="detalle-receta-label">Medicamento</span>
                  <span className="detalle-receta-value">{receta.medicamento}</span>
                </div>
              </div>

              <div className="detalle-receta-row">
                <IonIcon icon={documentAttachOutline} />

                <div className="detalle-receta-row-text">
                  <span className="detalle-receta-label">Dosis</span>
                  <span className="detalle-receta-value">{receta.dosis}</span>
                </div>
              </div>

              <div className="detalle-receta-row">
                <IonIcon icon={documentTextOutline} />

                <div className="detalle-receta-row-text">
                  <span className="detalle-receta-label">Indicaciones</span>
                  <span className="detalle-receta-value">{receta.indicaciones}</span>
                </div>
              </div>
            </div>

            {/* Médico */}
            <div className="detalle-receta-section">
              <div className="detalle-receta-row">
                <IonIcon icon={personOutline} />

                <div className="detalle-receta-row-text">
                  <span className="detalle-receta-label">Médico</span>
                  <span className="detalle-receta-value">
                    {receta.medico} - {receta.especialidad}
                  </span>
                </div>
              </div>

              <div className="detalle-receta-row">
                <IonIcon icon={calendarClearOutline} />

                <div className="detalle-receta-row-text">
                  <span className="detalle-receta-label">Fecha de emisión</span>
                  <span className="detalle-receta-value">{receta.fecha}</span>
                </div>
              </div>
            </div>

            {/* Firma y QR */}
            <div className="detalle-receta-footer">
              <div className="detalle-receta-signature">
                <h3>Firma digital</h3>

                <p>
                  <IonIcon icon={shieldCheckmarkOutline} />
                  Receta validada electrónicamente
                </p>
              </div>

              <div className="detalle-receta-qr">
                <IonIcon icon={qrCodeOutline} />
                <span>Código QR</span>
              </div>
            </div>

            {/* Acciones */}
            <div className="detalle-receta-actions">
              <IonButton className="detalle-receta-download-button">
                <IonIcon icon={downloadOutline} slot="start" />
                Descargar
              </IonButton>

              <IonButton
                fill="outline"
                className="detalle-receta-share-button"
                onClick={() => history.push('/paciente/recetas')}
              >
                Volver a recetas
              </IonButton>
            </div>
          </section>

          <div className="detalle-receta-bottom-space"></div>

          {/* Navbar inferior */}
          <nav className="detalle-receta-bottom-nav">
            <div
              className="detalle-receta-nav-item"
              onClick={() => history.push('/paciente/home')}
            >
              <IonIcon icon={homeOutline} />
              <span>Inicio</span>
            </div>

            <div
              className="detalle-receta-nav-item"
              onClick={() => history.push('/paciente/agendar')}
            >
              <IonIcon icon={calendarOutline} />
              <span>Agendar</span>
            </div>

            <div
              className="detalle-receta-nav-item"
              onClick={() => history.push('/paciente/historial')}
            >
              <IonIcon icon={documentTextOutline} />
              <span>Historial</span>
            </div>

            <div className="detalle-receta-nav-item active">
              <IonIcon icon={medkitOutline} />
              <span>Recetas</span>
            </div>

            <div
              className="detalle-receta-nav-item"
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

export default DetalleReceta;