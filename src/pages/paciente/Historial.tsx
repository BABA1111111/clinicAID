import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonFooter
} from '@ionic/react';

import { useHistory } from 'react-router-dom';

import './Historial.css';

const Historial: React.FC = () => {

  const history = useHistory();

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>ClinicAid</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding historial-content">

        <h1 className="page-title">
          Historial Médico
        </h1>

        <IonCard className="consulta-card">
          <IonCardContent>

            <h2>Consulta Cardiología</h2>

            <p>Dr. Juan Pérez</p>
            <p>12 Junio 2026</p>

            <div className="card-buttons">

              <IonButton size="small">
                Ver Detalles
              </IonButton>

              <IonButton size="small" fill="outline">
                Ver Receta
              </IonButton>

            </div>

          </IonCardContent>
        </IonCard>

        <IonCard className="consulta-card">
          <IonCardContent>

            <h2>Consulta Psicología</h2>

            <p>Dra. María Soto</p>
            <p>02 Junio 2026</p>

            <div className="card-buttons">

              <IonButton size="small">
                Ver Detalles
              </IonButton>

              <IonButton size="small" fill="outline">
                Ver Receta
              </IonButton>

            </div>

          </IonCardContent>
        </IonCard>

      </IonContent>

      <IonFooter>
        <IonToolbar>

          <div className="bottom-nav">

            <span onClick={() => history.push('/paciente/home')}>
              Inicio
            </span>

            <span onClick={() => history.push('/paciente/agendar')}>
              Agendar
            </span>

            <span
              className="active"
              onClick={() => history.push('/paciente/historial')}
            >
              Historial
            </span>

            <span onClick={() => history.push('/paciente/recetas')}>
              Recetas
            </span>

          </div>

        </IonToolbar>
      </IonFooter>

    </IonPage>
  );
};

export default Historial;