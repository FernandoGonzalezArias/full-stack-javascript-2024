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

# Comandos de Consola

Este repositorio contiene una colección de comandos de consola útiles para el desarrollo y administración de proyectos. A continuación, se presentan los comandos más comunes y sus descripciones.

## Comandos de Git

### Configuración
- **`git config --global user.name "Tu Nombre"`**  
  Configura tu nombre de usuario para Git en tu máquina local.

- **`git config --global user.email "tuemail@ejemplo.com"`**  
  Configura tu dirección de correo electrónico para Git en tu máquina local.

### Creación y Clonación de Repositorios
- **`git init`**  
  Inicializa un nuevo repositorio Git en el directorio actual.

- **`git clone <url-del-repositorio>`**  
  Clona un repositorio remoto a tu máquina local.

### Estado y Modificaciones
- **`git status`**  
  Muestra el estado de los archivos en el directorio de trabajo y el área de preparación.

- **`git diff`**  
  Muestra las diferencias entre los archivos modificados y los archivos confirmados en el repositorio.

### Añadir y Confirmar Cambios
- **`git add <archivo>`**  
  Añade un archivo al área de preparación para el próximo commit.

- **`git commit -m "Mensaje del commit"`**  
  Realiza un commit con un mensaje que describe los cambios realizados.

### Trabajar con Ramas
- **`git branch`**  
  Muestra una lista de las ramas existentes en tu repositorio.

- **`git branch <nombre-de-la-rama>`**  
  Crea una nueva rama con el nombre especificado.

- **`git checkout <nombre-de-la-rama>`**  
  Cambia a la rama especificada.

- **`git merge <nombre-de-la-rama>`**  
  Fusiona la rama especificada en la rama actual.

### Sincronización con el Repositorio Remoto
- **`git pull`**  
  Descarga y fusiona los cambios del repositorio remoto en tu rama actual.

- **`git push`**  
  Sube tus commits locales al repositorio remoto.

### Otros Comandos Útiles
- **`git log`**  
  Muestra el historial de commits en la rama actual.

- **`git reset <archivo>`**  
  Deshace los cambios en un archivo específico desde el área de preparación.

- **`git rm <archivo>`**  
  Elimina un archivo del repositorio y del directorio de trabajo.

## Comandos de Terminal (Bash)

### Navegación y Gestión de Archivos
- **`ls`**  
  Lista los archivos y directorios en el directorio actual.

- **`cd <directorio>`**  
  Cambia al directorio especificado.

- **`mkdir <directorio>`**  
  Crea un nuevo directorio.

- **`rm <archivo>`**  
  Elimina un archivo.

- **`rmdir <directorio>`**  
  Elimina un directorio vacío.

- **`cp <origen> <destino>`**  
  Copia archivos o directorios de origen a destino.

- **`mv <origen> <destino>`**  
  Mueve archivos o directorios de origen a destino.

### Información del Sistema
- **`pwd`**  
  Muestra el directorio de trabajo actual.

- **`top`**  
  Muestra los procesos en ejecución y su uso de recursos.

- **`df -h`**  
  Muestra el uso del espacio en disco.

- **`free -h`**  
  Muestra la memoria libre y usada en el sistema.

## Uso

1. Clona el repositorio:
    ```bash
    git clone <url-del-repositorio>
    ```

2. Navega al directorio del repositorio:
    ```bash
    cd <nombre-del-repositorio>
    ```

3. Usa los comandos según sea necesario.

## Contribuciones

Si tienes sugerencias o mejoras para los comandos listados aquí, siéntete libre de hacer un pull request.
















