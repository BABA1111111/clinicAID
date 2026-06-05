# ClinicAid

Proyecto desarrollado para la asignatura **Ingeniería Web y Móvil** utilizando **Ionic + React**.

ClinicAid corresponde a una plataforma web y móvil de telemedicina orientada a facilitar la gestión de atención médica remota mediante herramientas digitales modernas.

---

# Descripción del Proyecto

La aplicación busca mejorar el acceso a atención médica remota mediante funcionalidades como:

- Agendamiento de citas médicas virtuales.
- Gestión de solicitudes de atención.
- Visualización de historial médico.
- Emisión de recetas electrónicas.
- Gestión administrativa de usuarios y especialidades médicas.

La plataforma considera distintos tipos de usuario:
- Paciente
- Médico
- Administrador

---

# Tecnologías Utilizadas

- Ionic React
- React Router
- TypeScript
- CSS
- Figma

---

# Arquitectura del Proyecto

El frontend fue organizado utilizando una estructura modular basada en roles y separación de responsabilidades.

```text
src/
 ├── assets/
 ├── components/
 ├── layouts/
 ├── pages/
 │    ├── admin/
 │    ├── auth/
 │    ├── medico/
 │    └── paciente/
 ├── routes/
 ├── services/
 ├── App.tsx
 └── main.tsx
```

---

# Funcionalidades Implementadas

## Paciente
- Inicio de sesión
- Registro
- Agendar citas
- Visualizar historial médico
- Visualizar recetas
- Visualizar especialistas

## Médico
- Gestionar consultas
- Gestionar pacientes
- Emitir recetas electrónicas

## Administrador
- Dashboard administrativo
- Gestión de usuarios
- Gestión de especialidades

---

# Navegación y Seguridad

La aplicación implementa:

- React Router
- Rutas públicas
- Rutas protegidas
- Redirección obligatoria al login
- Separación de acceso según roles

El sistema utiliza autenticación simulada mediante `localStorage` para efectos académicos.

---

# Instalación y Ejecución

## Clonar repositorio

```bash
git clone <https://github.com/BABA1111111/clinicAID>
```

---

## Instalar dependencias

```bash
npm install
```

---

## Ejecutar aplicación

```bash
ionic serve
```

La aplicación se ejecutará normalmente en:

```text
http://localhost:8100
```

---

# Prototipo UI/UX

El prototipo de interfaces fue desarrollado en Figma considerando:

- Diseño mobile-first
- Navegación diferenciada según roles
- Interfaces móviles y web
- Componentes visuales consistentes

---

# Estado del Proyecto

Proyecto académico en desarrollo correspondiente a la Entrega Parcial 1 (EP1).
