# Pénsum Interactivo – Computación UCV 🎓

Este es un visualizador interactivo del pénsum de la Licenciatura en Computación de la Universidad Central de Venezuela (UCV). Permite a los estudiantes gestionar su avance académico de manera visual, sencilla y privada.

## 🚀 ¿Qué es y para qué sirve?

El **Pénsum Interactivo** es una herramienta diseñada para que los estudiantes de la Escuela de Computación puedan:
- **Visualizar su progreso:** Ver qué materias han aprobado, cuáles están cursando y cuáles tienen pendientes.
- **Gestionar prelaciones:** Al pasar el mouse sobre una materia, se iluminan automáticamente sus prelaciones (rojo) y las materias que desbloquea (azul).
- **Simular Especializaciones (Ramas):** Permite escoger hasta dos ramas de la carrera simultáneamente para ver qué electivas y obligatorias optativas se adaptan mejor a su perfil.
- **Calcular Estadísticas:** Suma automáticamente las Unidades de Crédito (UC) aprobadas y muestra información del perfil del estudiante.
- **Persistencia Local:** Toda la información cargada (nombre, notas, materias aprobadas) se guarda de forma segura en la computadora del usuario, sin necesidad de servidores externos.

## ✨ ¿Por qué se hizo?

Nació de la necesidad de tener una forma más amigable y dinámica de entender el complejo mapa de prelaciones de la carrera. A menudo, el PDF oficial es difícil de seguir; este interactivo busca que el estudiante sea el dueño de su planificación académica con un solo clic.

---

## 🛠️ Instrucciones para Desarrolladores

Si deseas modificar el código o compilarlo por tu cuenta, sigue estos pasos:

### 1. Requisitos previos
Debes tener instalado [Node.js](https://nodejs.org/) en tu sistema.

### 2. Clonar e Instalar dependencias
Abre una terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
Para ver la aplicación funcionando sin necesidad de instalarla:
```bash
npm start
```

### 4. Generar el Instalador (.exe)
Para crear un archivo instalable que puedas pasar a tus compañeros:
```bash
npm run dist
```
*El ejecutable final se encontrará en la carpeta `/dist`.*

---

## 📂 Estructura del Proyecto
- `index.html`: Interfaz principal y lógica visual.
- `main.js` & `preload.js`: Configuración de Electron para el acceso nativo a archivos.
- `kardex.js`: Estructura de datos base para el perfil del estudiante.
- `package.json`: Configuración de dependencias y scripts de compilación.

---
*Hecho con ❤️ para la comunidad de Computación UCV.*
