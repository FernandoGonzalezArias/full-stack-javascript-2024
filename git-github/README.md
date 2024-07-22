## Creación de un Repositorio en GitHub

1. **Crea una cuenta en GitHub**:
   - Si aún no tienes una cuenta, regístrate en [GitHub](https://github.com/).

2. **Inicia sesión en GitHub**:
   - Abre [GitHub](https://github.com/) y accede con tus credenciales.

3. **Crea un nuevo repositorio**:
   - Haz clic en el botón `New` (Nuevo) en la esquina superior derecha de la página o navega a [https://github.com/new](https://github.com/new).
   - Completa el formulario:
     - **Repository name** (Nombre del repositorio): Elige un nombre único para tu repositorio.
     - **Description** (Descripción): (Opcional) Añade una breve descripción de tu proyecto.
     - **Public/Private** (Público/Privado): Elige si deseas que tu repositorio sea público o privado.
     - **Initialize this repository with a README** (Inicializar este repositorio con un README): Marca esta opción si deseas añadir un archivo README inicial.
     - **Add .gitignore** (Añadir .gitignore): (Opcional) Selecciona una plantilla .gitignore adecuada para tu proyecto.
     - **Choose a license** (Elegir una licencia): (Opcional) Selecciona una licencia para tu proyecto.
   - Haz clic en el botón `Create repository` (Crear repositorio).

4. **Clona tu repositorio**:
   - Abre tu terminal o línea de comandos.
   - Navega al directorio donde deseas clonar el repositorio.
   - Ejecuta el siguiente comando, reemplazando `URL_DEL_REPOSITORIO` con la URL de tu repositorio:
     ```sh
     git clone URL_DEL_REPOSITORIO
     ```


# Guía Rápida de Git

## Configuración Inicial

Antes de comenzar a trabajar con Git, es fundamental configurar tu nombre de usuario y correo electrónico para que tus commits estén correctamente asociados contigo. Utiliza los siguientes comandos para configurar estos detalles:

- Configura tu nombre de usuario con:
-  `git config --global user.name "Tu Nombre"`.

- Configura tu correo electrónico con:
-  `git config --global user.email "tuemail@example.com"`.

## Flujo de Trabajo Básico

Una vez que Git está configurado, puedes gestionar tus repositorios siguiendo estos pasos básicos:

1. **Inicializar un repositorio**:`git init`
   - Si estás comenzando un nuevo proyecto, inicializa un nuevo repositorio en tu directorio de trabajo con git init. Este comando crea un nuevo repositorio de Git en el directorio actual.

3. **Clonar un repositorio**:  `git clone URL_DEL_REPOSITORIO`
   - Para trabajar en un proyecto existente, clona un repositorio desde una URL usando git clone URL_DEL_REPOSITORIO. Esto descargará una copia del repositorio existente.

5. **Verificar el estado del repositorio**: `git status`
   - Revisa qué cambios has realizado y qué archivos están listos para ser confirmados con git status.

7. **Añadir cambios al área de preparación**: `git add NOMBRE_DEL_ARCHIVO` `git add .`
   - Cuando estés listo para guardar los cambios, añade los archivos modificados al área de preparación. Usa git add NOMBRE_DEL_ARCHIVO para añadir un archivo específico o git add . para añadir todos los cambios.

9. **Confirmar cambios**: `git commit -m "Mensaje del commit"`
    - Guarda los cambios en el historial de Git realizando un commit con un mensaje descriptivo usando git commit -m "Mensaje del commit".

11. **Enviar cambios al repositorio remoto**: `git push origin NOMBRE_DE_LA_RAMA`
    - Para subir tus cambios locales al repositorio remoto, utiliza git push origin NOMBRE_DE_LA_RAMA. Este comando envía tus commits al repositorio remoto para que otros puedan verlos.

## Ramas y Fusión

Trabajar con ramas te permite gestionar diferentes versiones de tu proyecto de manera eficiente:

1. **Crear una nueva rama**: `git branch NOMBRE_DE_LA_RAMA`
   - Para comenzar a trabajar en una nueva característica o corrección, crea una nueva rama con git branch NOMBRE_DE_LA_RAMA.

3. **Cambiar a una rama diferente**: `git checkout NOMBRE_DE_LA_RAMA`
   - Para cambiar a una rama específica, usa git checkout NOMBRE_DE_LA_RAMA.

5. **Fusionar una rama**: `git merge NOMBRE_DE_LA_RAMA`
   - Una vez que hayas terminado de trabajar en una rama y quieras integrar los cambios a la rama principal, utiliza git merge NOMBRE_DE_LA_RAMA para fusionar la rama con la actual.

## Recuperar Cambios

Mantén tu repositorio actualizado con los últimos cambios del repositorio remoto:

1. **Actualizar el repositorio local**: `git pull`
   - Para recuperar los cambios realizados por otros y fusionarlos con tu rama actual, usa git pull.

3. **Ver historial de commits**: `git log`
   - Revisa el historial de commits y los cambios realizados en el repositorio con git log.

---

Esta guía proporciona una visión general para comenzar con Git y gestionar tus repositorios de manera eficiente. Puedes personalizarla según las necesidades específicas de tu proyecto.



















