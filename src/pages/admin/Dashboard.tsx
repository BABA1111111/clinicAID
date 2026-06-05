import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react';

import { useHistory } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h1>Panel de Administración</h1>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Gestión de Usuarios</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>Permite visualizar los usuarios registrados en ClinicAid.</p>

            <IonButton
              expand="block"
              onClick={() => history.push('/admin/usuarios')}
            >
              Ver usuarios
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Especialidades</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>Permite administrar las especialidades médicas disponibles.</p>

            <IonButton
              expand="block"
              onClick={() => history.push('/admin/especialidades')}
            >
              Ver especialidades
            </IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Dashboard;