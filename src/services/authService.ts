export type UserRole = 'paciente' | 'medico' | 'admin';

export const login = (role: UserRole) => {
  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('role', role);
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('role');
};

export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const getRole = (): UserRole | null => {
  return localStorage.getItem('role') as UserRole | null;
};

export default getRole;