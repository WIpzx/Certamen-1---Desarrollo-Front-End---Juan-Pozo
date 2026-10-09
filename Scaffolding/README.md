# Scaffolding para Certamen 1 — React + Material UI

Proyecto base **sin resolver el certamen**. Está configurado con Vite, React, Material UI y solo los módulos CSS de grillas y utilidades de Bootstrap, coherentes con lo desarrollado en clases.

## Preparación (Node.js 22 recomendado)

```bash
npm install
npm run dev
```

Abre la URL local que indique Vite (usualmente `http://localhost:5173`).

Antes de comenzar la evaluación, verifica que también funcione:

```bash
npm run build
```

## Organización

- `src/main.jsx`: montaje de React e importación de estilos.
- `src/App.jsx`: componente de entrada y pantalla base de comprobación.
- `src/components/`: componentes visuales reutilizables.
- `src/containers/`: contenedores y coordinación de estado.
- `src/utils/`: funciones auxiliares.
- `src/assets/`: archivos estáticos.

## Estado actual

Incluye una tarjeta de demostración para confirmar que **React, Material UI y la grilla Bootstrap** cargan correctamente. **No incluye** los textos del AppBar solicitado, formulario, estados de guerreros, tabla, Chips, reglas de negocio ni eliminación; esos son elementos propios del trabajo evaluado.

## Notas del certamen

- Entrega: URL del repositorio de GitHub por Aula USM.
- Trabajo estrictamente individual.
- Se permite documentación oficial, recursos web y ejercicios anteriores.
- El enunciado indica que si se determina un uso de IA generativa superior al 40 %, se realizará una interrogación técnica cuya pauta prevalecerá.
- No se necesitan validaciones adicionales a las restricciones intrínsecas mencionadas por el enunciado.

## Repositorio de GitHub

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "chore: scaffolding React MUI y Bootstrap"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Crea el repositorio vacío en GitHub antes de añadir `origin`. No subas `node_modules/`.

> Nota: En el entorno que generó este ZIP no hubo acceso al registro de npm; por ello no se adjuntan `node_modules` ni `package-lock.json`. Al ejecutar `npm install` en tu computador, se creará `package-lock.json`. Después súbelo al repositorio junto con el proyecto.
