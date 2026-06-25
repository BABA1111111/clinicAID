import { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonSearchbar,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
} from '@ionic/react';

import {
  trashOutline,
  createOutline,
  personCircleOutline,
  addOutline,
  statsChartOutline,
  medicalOutline,
  personOutline
} from 'ionicons/icons';

import {
  obtenerEspecialidades,
  crearEspecialidad,
  eliminarEspecialidad,
  actualizarEspecialidad
} from '../../data/especialidadesService';

import './Especialidades.css';

interface Especialidad {
  id: number;
  nombre: string;
  estado: string;
}

const Especialidades: React.FC = () => {
  const [especialidades, setEspecialidades] = useState<Especialidad[]>([]);
  const [error, setError] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState('');
  const [estado, setEstado] = useState('Activa');
  const [editandoId, setEditandoId] = useState<number | null>(null);

  useEffect(() => {
    cargarEspecialidades();
  }, []);

  const cargarEspecialidades = async () => {
    try {
      const response = await obtenerEspecialidades();
      setEspecialidades(response.data.data);
    } catch (error) {
      console.error(error);
      setError('No se pudieron cargar las especialidades.');
    }
  };

  const handleCrearEspecialidad = async () => {
    try {
      if (!nombre || !estado) {
        setError('Debe completar todos los campos de la especialidad.');
        return;
      }

      const response = await crearEspecialidad({
        nombre,
        estado
      });

      setEspecialidades([...especialidades, response.data.data]);

      setNombre('');
      setEstado('Activa');
      setMostrarFormulario(false);
      setError('');
    } catch (error) {
      console.error(error);
      setError('No se pudo crear la especialidad.');
    }
  };

  const handleEditarEspecialidad = (especialidad: Especialidad) => {
    setNombre(especialidad.nombre);
    setEstado(especialidad.estado);

    setEditandoId(especialidad.id);
    setMostrarFormulario(true);
  };

  const handleGuardarEspecialidad = async () => {
    try {
      if (!nombre || !estado) {
        setError('Debe completar todos los campos.');
        return;
      }

      if (editandoId) {

        await actualizarEspecialidad(editandoId, {
          nombre,
          estado
        });

        setEspecialidades(
          especialidades.map((esp) =>
            esp.id === editandoId
              ? { ...esp, nombre, estado }
              : esp
          )
        );

      } else {

        const response = await crearEspecialidad({
          nombre,
          estado
        });

        setEspecialidades([
          ...especialidades,
          response.data.data
        ]);
      }

      setNombre('');
      setEstado('Activa');
      setEditandoId(null);
      setMostrarFormulario(false);

    } catch (error) {
      console.error(error);
    }
  };

  const handleEliminarEspecialidad = async (id: number) => {
    try {
      await eliminarEspecialidad(id);
      setEspecialidades(
        especialidades.filter((especialidad) => especialidad.id !== id)
      );
    } catch (error) {
      console.error(error);
      setError('No se pudo eliminar la especialidad.');
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="admin-layout">
          <aside className="admin-sidebar">
            <h1>Admin</h1>

            <nav>
              <IonItem className="sidebar-item" routerLink="/admin/dashboard">
                <IonIcon icon={statsChartOutline} slot="start" />
                <IonLabel>Dashboard</IonLabel>
              </IonItem>

              <IonItem className="sidebar-item" routerLink="/admin/usuarios">
                <IonIcon icon={personOutline} slot="start" />
                <IonLabel>Usuarios</IonLabel>
              </IonItem>

              <IonItem className="sidebar-item active" routerLink="/admin/especialidades">
                <IonIcon icon={medicalOutline} slot="start" />
                <IonLabel>Especialidades</IonLabel>
              </IonItem>
            </nav>

            <div className="sidebar-logo">ClinicAID +</div>
          </aside>

          <main className="admin-main">
            <header className="admin-header">
              <h2>Gestión de Especialidades</h2>
              <IonIcon icon={personCircleOutline} className="profile-icon" />
            </header>

            <section className="admin-content">
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <div className="summary-card">
                <IonIcon icon={medicalOutline} />
                <span>Especialidades registradas: {especialidades.length}</span>
              </div>

              <div className="actions-row">
                <IonButton
                  className="add-button"
                  onClick={() => setMostrarFormulario(!mostrarFormulario)}
                >
                  <IonIcon icon={addOutline} slot="start" />
                  Añadir Especialidad
                </IonButton>

                <IonSearchbar
                  className="searchbar"
                  placeholder="Buscar"
                />
              </div>

              {mostrarFormulario && (
                <div className="user-form">
                  <IonInput
                    placeholder="Nombre"
                    value={nombre}
                    onIonInput={(e) => setNombre(e.detail.value!)}
                  />

                  <IonSelect
                    placeholder="Estado"
                    value={estado}
                    onIonChange={(e) => setEstado(e.detail.value)}
                  >
                    <IonSelectOption value="Activa">Activa</IonSelectOption>
                    <IonSelectOption value="Inactiva">Inactiva</IonSelectOption>
                  </IonSelect>

                  <IonButton expand="block" onClick={handleGuardarEspecialidad}>
                    {editandoId ? 'Actualizar especialidad' : 'Guardar especialidad'}
                  </IonButton>
                </div>
              )}

              <div className="specialties-table">
                <div className="specialties-header">
                  <span></span>
                  <span>Nombre</span>
                  <span>Estado</span>
                  <span></span>
                </div>

                {especialidades.map((especialidad) => (
                  <div className="specialties-row" key={especialidad.id}>
                    <span>
                      <input type="checkbox" />
                    </span>

                    <span>{especialidad.nombre}</span>

                    <span>{especialidad.estado}</span>

                    <span className="row-actions">
                      <IonIcon
                        icon={trashOutline}
                        onClick={() => handleEliminarEspecialidad(especialidad.id)}
                      />
                      <IonIcon
                        icon={createOutline}
                        onClick={() => handleEditarEspecialidad(especialidad)}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Especialidades;