import {
  IonContent,
  IonIcon,
  IonPage,
  IonItem,
  IonLabel
} from '@ionic/react';

import {
  peopleOutline,
  personOutline,
  medkitOutline,
  calendarOutline,
  statsChartOutline,
  medicalOutline
} from 'ionicons/icons';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="admin-layout">
          <aside className="admin-sidebar">
            <h1>Admin</h1>

            <nav>
              <IonItem
                className="sidebar-item active"
                routerLink="/admin/dashboard"
              >
                <IonIcon icon={statsChartOutline} slot="start" />
                <IonLabel>Dashboard</IonLabel>
              </IonItem>

              <IonItem
                className="sidebar-item"
                routerLink="/admin/usuarios"
              >
                <IonIcon icon={personOutline} slot="start" />
                <IonLabel>Usuarios</IonLabel>
              </IonItem>

              <IonItem
                className="sidebar-item"
                routerLink="/admin/especialidades"
              >
                <IonIcon icon={medicalOutline} slot="start" />
                <IonLabel>Especialidades</IonLabel>
              </IonItem>
            </nav>

            <div className="admin-brand">ClinicAID +</div>
          </aside>

          <main className="admin-main">
            <header className="admin-header">
              <h2>Hola, Administrador 👋</h2>
              <div className="admin-avatar">👤</div>
            </header>

            <section className="dashboard-content">
              <div className="stats-grid">
                <div className="stat-card">
                  <IonIcon icon={peopleOutline} />
                  <p>Usuarios registrados</p>
                  <h3>2</h3>
                </div>

                <div className="stat-card">
                  <IonIcon icon={personOutline} />
                  <p>Pacientes</p>
                  <h3>1</h3>
                </div>

                <div className="stat-card">
                  <IonIcon icon={medkitOutline} />
                  <p>Médicos</p>
                  <h3>0</h3>
                </div>

                <div className="stat-card">
                  <IonIcon icon={calendarOutline} />
                  <p>Citas pendientes</p>
                  <h3>0</h3>
                </div>
              </div>

              <div className="dashboard-chart">
                <h3>Resumen de actividad</h3>

                <div className="chart-bars">
                  <div>
                    <span style={{ height: '80px' }}></span>
                    <p>Usuarios</p>
                  </div>

                  <div>
                    <span style={{ height: '40px' }}></span>
                    <p>Pacientes</p>
                  </div>

                  <div>
                    <span style={{ height: '20px' }}></span>
                    <p>Médicos</p>
                  </div>

                  <div>
                    <span style={{ height: '20px' }}></span>
                    <p>Citas</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;