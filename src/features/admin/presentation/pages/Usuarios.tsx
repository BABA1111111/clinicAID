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
  IonLabel
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

import { obtenerUsuarios, eliminarUsuario, crearUsuario, actualizarUsuario} from '../../data/usuariosService';
import './Usuarios.css';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado?: string;
}

console.log('Estoy en Usuarios.tsx');

const Usuarios: React.FC = () => {
  
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [error, setError] = useState('');

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('');
  const [password, setPassword] = useState('');
  const [rolId, setRolId] = useState<number>();
  const [editandoId, setEditandoId] = useState<number | null>(null);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const response = await obtenerUsuarios();

      console.log('USUARIOS:', response);

      setUsuarios(response.data.data);
    } catch (error) {
      console.error(error);
      setUsuarios([]);
      setError('No se pudieron cargar los usuarios.');
    }
  };

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

      const usuarioCreado = response.data.data;

      const nuevoUsuario = {
        id: usuarioCreado.id,
        nombre: usuarioCreado.nombre,
        email: usuarioCreado.email,
        rol:
          usuarioCreado.rol_id === 1
            ? 'paciente'
            : usuarioCreado.rol_id === 2
            ? 'medico'
            : 'admin'
      };

      setUsuarios([...usuarios, nuevoUsuario]);

      setNombre('');
      setEmail('');
      setPassword('');
      setRolId(1);
      setEstado('Activo')
      setMostrarFormulario(false);
      setError('');
    } catch (error) {
      console.error('Error al crear usuario:', error);
      setError('No se pudo crear el usuario.');
    }
  };

    const handleEditarUsuario = (usuario: Usuario) => {
      setNombre(usuario.nombre);
      setEmail(usuario.email);
      setPassword('');

      const rolConvertido =
        usuario.rol === 'paciente'
          ? 1
          : usuario.rol === 'medico'
          ? 2
          : 3;

      setRolId(rolConvertido);
      setEstado(usuario.estado || 'Activo');

      setEditandoId(usuario.id);
      setMostrarFormulario(true);
      setError('');
    };

  const handleGuardarUsuario = async () => {
    try {
      if (!nombre || !email || !rolId) {
        setError('Debe completar nombre, correo y rol.');
        return;
      }

      if (!editandoId && !password) {
        setError('Debe ingresar una contraseña para crear el usuario.');
        return;
      }

      if (editandoId) {
        const datosActualizados: {
          nombre: string;
          email: string;
          rol_id: number;
          password?: string;
        } = {
          nombre,
          email,
          rol_id: rolId
        };

        if (password) {
          datosActualizados.password = password;
        }

        await actualizarUsuario(editandoId, datosActualizados);

        setUsuarios(
          usuarios.map((usuario) =>
            usuario.id === editandoId
              ? {
                  ...usuario,
                  nombre,
                  email,
                  rol:
                    rolId === 1
                      ? 'paciente'
                      : rolId === 2
                      ? 'medico'
                      : 'admin',
                  estado: estado || usuario.estado || 'Activo'
                }
              : usuario
          )
        );
      } else {
        const response = await crearUsuario({
          nombre,
          email,
          password,
          rol_id: rolId
        });

        const usuarioCreado = response.data.data;

        const nuevoUsuario: Usuario = {
          id: usuarioCreado.id,
          nombre: usuarioCreado.nombre,
          email: usuarioCreado.email,
          rol:
            usuarioCreado.rol_id === 1
              ? 'paciente'
              : usuarioCreado.rol_id === 2
              ? 'medico'
              : 'admin',
          estado: 'Activo'
        };

        setUsuarios([...usuarios, nuevoUsuario]);
      }

      setNombre('');
      setEmail('');
      setPassword('');
      setRolId(undefined);
      setEstado('Activo');
      setEditandoId(null);
      setMostrarFormulario(false);
      setError('');
    } catch (error) {
      console.error('Error al guardar usuario:', error);
      setError('No se pudo guardar el usuario.');
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

              <IonItem className="sidebar-item active" routerLink="/admin/usuarios">
                <IonIcon icon={personOutline} slot="start" />
                <IonLabel>Usuarios</IonLabel>
              </IonItem>

              <IonItem className="sidebar-item" routerLink="/admin/especialidades">
                <IonIcon icon={medicalOutline} slot="start" />
                <IonLabel>Especialidades</IonLabel>
              </IonItem> 
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
                <span>Usuarios registrados: {usuarios?.length || 0}</span>
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

                  <IonButton expand="block" onClick={handleGuardarUsuario}>
                    {editandoId ? 'Actualizar usuario' : 'Guardar usuario'}
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
                
                {(usuarios || []).map((usuario, index) => (
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
                      <IonIcon
                        icon={createOutline}
                        onClick={() => handleEditarUsuario(usuario)}
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

export default Usuarios;