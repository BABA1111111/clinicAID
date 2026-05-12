import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonFooter
} from '@ionic/react';

import { useHistory } from 'react-router-dom';

import './Agendar.css';

const Agendar: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>ClinicAid</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding agendar-content">
        <h1 className="page-title">Agendar Cita</h1>

        <IonSearchbar placeholder="Buscar médico o especialidad..." />

        <IonItem>
          <IonLabel>Especialidad</IonLabel>
          <IonSelect placeholder="Seleccionar">
            <IonSelectOption value="psicologia">Psicología</IonSelectOption>
            <IonSelectOption value="cardiologia">Cardiología</IonSelectOption>
            <IonSelectOption value="pediatria">Pediatría</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Fecha</IonLabel>
          <IonSelect placeholder="Seleccionar">
            <IonSelectOption value="hoy">Hoy</IonSelectOption>
            <IonSelectOption value="manana">Mañana</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonCard className="doctor-card">
          <IonCardContent>
            <h2>Dra. María Soto</h2>
            <p>Psicología</p>
            <p>Disponible hoy</p>
            <p>Valor consulta: $20.000</p>
            <p>Rating: ★★★★★</p>

            <IonButton expand="block">
              Agendar
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <div className="bottom-nav">

            <span onClick={() => history.push('/paciente/home')}>
              Inicio
            </span>

            <span
              className="active"
              onClick={() => history.push('/paciente/agendar')}
            >
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

export default Agendar;