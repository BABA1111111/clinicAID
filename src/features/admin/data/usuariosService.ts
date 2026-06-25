import api from '../../../core/http/api';

export const obtenerUsuarios = async () => {
  return await api.get('/usuarios');
};

export const crearUsuario = async (usuario: {
  nombre: string;
  email: string;
  password: string;
  rol_id: number;
}) => {
  return await api.post('/usuarios', usuario);
};

export const actualizarUsuario = (
  id: number,
  usuario: {
    nombre: string;
    email: string;
    rol_id: number;
    password?: string;
  }
) => {
  return api.put(`/usuarios/${id}`, usuario);
};

export const eliminarUsuario = async (id: number) => {
  return await api.delete(`/usuarios/${id}`);
};