import api from './api';

export const obtenerUsuarios = async () => {
  try {
    const response = await api.get('/usuarios');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const crearUsuario = async (usuario: any) => {
  try {
    const response = await api.post('/usuarios', usuario);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const actualizarUsuario = async (id: number, usuario: any) => {
  try {
    const response = await api.put(`/usuarios/${id}`, usuario);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const eliminarUsuario = async (id: number) => {
  try{
    const response = await api.delete(`/usuarios/${id}`);
    return response.data;    
  }catch (error) {
    throw error;
  }
};