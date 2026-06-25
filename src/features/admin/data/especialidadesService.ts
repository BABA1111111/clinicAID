import api from '../../../core/http/api';

export const obtenerEspecialidades = async () => {
  return await api.get('/especialidades');
};

export const crearEspecialidad = async (especialidad: {
  nombre: string;
  estado: string;
}) => {
  return await api.post('/especialidades', especialidad);
};

export const actualizarEspecialidad = async (
  id: number,
  especialidad: {
    nombre: string;
    estado: string;
  }
) => {
  return await api.put(`/especialidades/${id}`, especialidad);
};

export const eliminarEspecialidad = async (id: number) => {
  return await api.delete(`/especialidades/${id}`);
};