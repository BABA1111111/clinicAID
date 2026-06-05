import { useEffect, useState } from 'react';
import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonSearchbar,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

import {
  peopleOutline,
  trashOutline,
  createOutline,
  personCircleOutline,
  addOutline,
  statsChartOutline,
  medicalOutline,
  personOutline
} from 'ionicons/icons';

import { obtenerUsuarios, eliminarUsuario, crearUsuario} from '../../services/usuariosService';
import './Usuarios.css';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

const Usuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [error, setError] = useState('');

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rolId, setRolId] = useState<number>(1);

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const response = await obtenerUsuarios();
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
        setError('No se pudieron cargar los usuarios desde el servidor.');
      }
    };

    cargarUsuarios();
  }, []);

  useEffect(() => {
  console.log('Cargando usuarios...');

  const cargarUsuarios = async () => {
    try {
      const response = await obtenerUsuarios();
      console.log(response);

      setUsuarios(response.data);
    } catch (error) {
      console.error(error);
      setError('No se pudieron cargar los usuarios desde el servidor.');
    }
  };

  cargarUsuarios();
}, []);

  const handleEliminarUsuario = async (id: number) => {
  try {
    await eliminarUsuario(id);

    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    setError('No se pudo eliminar el usuario.');
  }
  };
  const handleCrearUsuario = async () => {
    try {
      if (!nombre || !email || !password || !rolId) {
        setError('Debe completar todos los campos del usuario.');
        return;
      }

      const response = await crearUsuario({
        nombre,
        email,
        password,
        rol_id: rolId
      });

      const nuevoUsuario = {
        id: response.data.id,
        nombre: response.data.nombre,
        email: response.data.email,
        rol:
          response.data.rol_id === 1
            ? 'paciente'
            : response.data.rol_id === 2
            ? 'medico'
            : 'admin'
      };

      setUsuarios([...usuarios, nuevoUsuario]);

      setNombre('');
      setEmail('');
      setPassword('');
      setRolId(1);
      setMostrarFormulario(false);
      setError('');
    } catch (error) {
      console.error('Error al crear usuario:', error);
      setError('No se pudo crear el usuario.');
    }
  };
  return (
    <IonPage>
      <IonContent fullscreen>

        <div className="admin-layout">

          <aside className="admin-sidebar">
            <h1>Admin</h1>

            <nav>
              <div className="sidebar-item">
                <IonIcon icon={statsChartOutline} />
                <span>Dashboard</span>
              </div>

              <div className="sidebar-item active">
                <IonIcon icon={personOutline} />
                <span>Usuarios</span>
              </div>

              <div className="sidebar-item">
                <IonIcon icon={medicalOutline} />
                <span>Especialidades</span>
              </div>
            </nav>

            <div className="sidebar-logo">ClinicAID +</div>
          </aside>

          <main className="admin-main">

            <header className="admin-header">
              <h2>Hola, Administrador 👋</h2>
              <IonIcon icon={personCircleOutline} className="profile-icon" />
            </header>

            <section className="admin-content">

              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <div className="summary-card">
                <IonIcon icon={peopleOutline} />
                <span>Usuarios registrados: {usuarios.length}</span>
              </div>

              <div className="actions-row">
                <IonButton className="filter-button" fill="clear">
                  Filtros
                </IonButton>

                <IonButton className="add-button"
                  onClick={() => setMostrarFormulario(!mostrarFormulario)}
                >
                  <IonIcon icon={addOutline} slot="start"/>
                  Añadir Usuario
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

                  <IonInput
                    placeholder="Correo electrónico"
                    type="email"
                    value={email}
                    onIonInput={(e) => setEmail(e.detail.value!)}
                  />

                  <IonInput
                    placeholder="Contraseña"
                    type="password"
                    value={password}
                    onIonInput={(e) => setPassword(e.detail.value!)}
                  />

                  <IonSelect
                    placeholder="Rol"
                    value={rolId}
                    onIonChange={(e) => setRolId(Number(e.detail.value))}
                  >
                    <IonSelectOption value={1}>Paciente</IonSelectOption>
                    <IonSelectOption value={2}>Médico</IonSelectOption>
                    <IonSelectOption value={3}>Admin</IonSelectOption>
                  </IonSelect>

                  <IonButton expand="block" onClick={handleCrearUsuario}>
                    Guardar usuario
                  </IonButton>
                </div>
              )}

              <div className="users-table">
                <div className="table-header">
                  <span></span>
                  <span>Nombre</span>
                  <span>Rol</span>
                  <span>Estado</span>
                  <span></span>
                </div>

                {usuarios.map((usuario, index) => (
                  <div className="table-row" key={usuario.id}>
                    <span>
                      <input type="checkbox" />
                    </span>

                    <span>{usuario.nombre}</span>

                    <span>{usuario.rol}</span>

                    <span>{index % 2 === 0 ? 'Activo' : 'Inactivo'}</span>

                    <span className="row-actions">
                      <IonIcon
                        icon={trashOutline}
                        onClick={() => handleEliminarUsuario(usuario.id)}
                      />
                      <IonIcon icon={createOutline} />
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

export default Usuarios;