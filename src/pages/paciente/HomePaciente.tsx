import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonButton,
  IonFooter
} from '@ionic/react';

import { useHistory } from 'react-router-dom';
import './HomePaciente.css';

const HomePaciente: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>ClinicAid</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <h1 className="welcome-title">¡Hola, Usuario!</h1>

        <IonCard>
          <IonCardContent>

            <h2>Próxima Cita</h2>

            <p>Médico: Dr. Juan Pérez</p>
            <p>Especialidad: Cardiología</p>
            <p>Fecha: Hoy - 16:30</p>

            <IonButton expand="block">
              Unirse
            </IonButton>

          </IonCardContent>
        </IonCard>

        <h2 className="section-title">
          Especialistas Disponibles
        </h2>

        <IonCard>
          <IonCardContent>

            <h3>Dra. María Soto</h3>

            <p>Psicología</p>

            <IonButton fill="outline">
              Ver más
            </IonButton>

          </IonCardContent>
        </IonCard>

      </IonContent>

      <IonFooter>
        <IonToolbar>
          <div className="bottom-nav">
            <span className="active" onClick={() => history.push('/paciente/home')}>
              Inicio
            </span>

            <span onClick={() => history.push('/paciente/agendar')}>
              Agendar
            </span>

            <span onClick={() => history.push('/paciente/historial')}>
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

export default HomePaciente;