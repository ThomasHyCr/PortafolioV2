# Portafolio Web - Thomas HC (Kuro)

Este es el repositorio del portafolio interactivo de Thomas HC (Kuro), Game Developer, Diseñador y Artista. El proyecto fue migrado de un entorno HTML/JS/CSS tradicional a una arquitectura moderna y optimizada.

##  Tecnologías Utilizadas
- **[React](https://react.dev/)**: Para la creación de componentes reutilizables (tarjetas de proyectos, habilidades) y el manejo del estado (menú móvil).
- **[Vite](https://vitejs.dev/)**: Como entorno de desarrollo rápido y empaquetador del proyecto.
- **[Tailwind CSS (v4)](https://tailwindcss.com/)**: Para el diseño responsivo y los estilos utilitarios.
- **HTML5 Canvas & Vanilla JS**: Para la simulación de partículas (nieve) y dibujo procedimental (aurora boreal).

##  Características Principales
- **Efecto Parallax Dinámico:** Las capas del fondo (montañas, auroras y logo) reaccionan al movimiento del cursor en PC y al giroscopio/toque en dispositivos móviles.
- **Componentización:** Refactorización del código para utilizar plantillas reutilizables (`<ProjectThumbnail />` y `<SkillCard />`), facilitando el mantenimiento y escalabilidad.
- **Diseño 100% Responsivo:** Unificación de los archivos de escritorio y móvil en una sola base de código adaptable a cualquier pantalla.
- **Tarjetas 3D (Tilt Effect):** Efecto de inclinación interactiva en las tarjetas de presentación calculado matemáticamente según la posición del cursor.
- **Despliegue Continuo:** Configurado con `gh-pages` para compilación y publicación automática.

## Instalación, fork y despliegue

La aplicación está dentro de `mi-portafolio`. Las rutas de Vite son relativas,
por lo que funcionan tanto en este repositorio como en un fork con otro nombre.

1. Crea el fork y habilita **Settings > Pages > Source: GitHub Actions**.
2. Sube los cambios a la rama `main`.
3. El workflow `.github/workflows/deploy-pages.yml` instalará dependencias,
   compilará el proyecto y publicará el sitio automáticamente.

La URL del fork será `https://<usuario>.github.io/<repositorio>/`.

## Instalación y uso local

Si deseas correr este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio y navega a la carpeta del proyecto:
   ```bash
   cd mi-portafolio
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Enlaces del proyecto

- **Página:** [https://ls1653.github.io/Portafolio-web/](https://ls1653.github.io/Portafolio-web/)
- **Video:** [Espacio listo para insertar el enlace del video]
- **Diapositivas:** [Espacio listo para insertar el enlace de las diapositivas]
