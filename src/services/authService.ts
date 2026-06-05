export type UserRole = 'paciente' | 'medico' | 'admin';

export const login = (token: string, role: UserRole) => {
  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};

export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true'
    && !!localStorage.getItem('token');
};

export const getRole = (): UserRole | null => {
  return localStorage.getItem('role') as UserRole | null;
};

export const getToken = () => {
  return localStorage.getItem('token');
};