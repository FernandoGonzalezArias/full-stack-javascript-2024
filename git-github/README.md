# Comandos de Consola

Este repositorio contiene una colección de comandos de consola útiles para el desarrollo y administración de proyectos. A continuación, se presentan los comandos más comunes y sus descripciones.

## Comandos de Git:

#### Configuración
- **`git config --global user.name "Tu Nombre"`**  
  Configura tu nombre de usuario para Git en tu máquina local.

- **`git config --global user.email "tuemail@ejemplo.com"`**  
  Configura tu dirección de correo electrónico para Git en tu máquina local.

#### Creación y Clonación de Repositorios
- **`git init`**  
  Inicializa un nuevo repositorio Git en el directorio actual.

- **`git clone <url-del-repositorio>`**  
  Clona un repositorio remoto a tu máquina local.

#### Estado y Modificaciones
- **`git status`**  
  Muestra el estado de los archivos en el directorio de trabajo y el área de preparación.

- **`git diff`**  
  Muestra las diferencias entre los archivos modificados y los archivos confirmados en el repositorio.

#### Añadir y Confirmar Cambios
- **`git add <archivo>`**  
  Añade un archivo al área de preparación para el próximo commit.

- **`git commit -m "Mensaje del commit"`**  
  Realiza un commit con un mensaje que describe los cambios realizados.

#### Trabajar con Ramas
- **`git branch`**  
  Muestra una lista de las ramas existentes en tu repositorio.

- **`git branch <nombre-de-la-rama>`**  
  Crea una nueva rama con el nombre especificado.

- **`git checkout <nombre-de-la-rama>`**  
  Cambia a la rama especificada.

- **`git merge <nombre-de-la-rama>`**  
  Fusiona la rama especificada en la rama actual.

#### Enlazar Repositorio Local con GitHub
- **`git remote add origin <url-del-repositorio>`**  
  Enlaza tu repositorio local con un repositorio remoto en GitHub (reemplaza `<url-del-repositorio>` con la URL del repositorio en GitHub).

- **`git remote -v`**  
  Muestra las URLs de los repositorios remotos asociados con tu repositorio local.

- **`git remote remove origin`**  
  Elimina la conexión con el repositorio remoto llamado `origin`.

#### Sincronización con el Repositorio Remoto
- **`git pull`**  
  Descarga y fusiona los cambios del repositorio remoto en tu rama actual.

- **`git push`**  
  Sube tus commits locales al repositorio remoto.

#### Otros Comandos Útiles
- **`git log`**  
  Muestra el historial de commits en la rama actual.

- **`git reset <archivo>`**  
  Deshace los cambios en un archivo específico desde el área de preparación.

- **`git rm <archivo>`**  
  Elimina un archivo del repositorio y del directorio de trabajo.

## Comandos de Terminal (Bash):

#### Navegación y Gestión de Archivos
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

#### Información del Sistema
- **`pwd`**  
  Muestra el directorio de trabajo actual.

- **`top`**  
  Muestra los procesos en ejecución y su uso de recursos.

- **`df -h`**  
  Muestra el uso del espacio en disco.

- **`free -h`**  
  Muestra la memoria libre y usada en el sistema.



## Creación de un Repositorio Git y Enlace con GitHub

Para crear un repositorio Git local y enlazarlo con GitHub, sigue estos pasos:

1. Inicializa un nuevo repositorio Git en el directorio actual:
    ```bash
    git init
    ```

2. Añade todos los archivos del directorio al área de preparación:
    ```bash
    git add .
    ```

3. Verifica el estado del repositorio y los archivos preparados:
    ```bash
    git status
    ```

4. Realiza el primer commit con un mensaje descriptivo:
    ```bash
    git commit -m "Primer commit"
    ```

5. Crea o renombra la rama principal:
    ```bash
    git branch -M main
    ```

6. Enlaza el repositorio local con el repositorio remoto en GitHub (reemplaza `<url-del-repositorio>` con la URL del repositorio en GitHub):
    ```bash
    git remote add origin <url-del-repositorio>
    ```

7. Sube tus commits locales al repositorio remoto:
    ```bash
    git push -u origin main
    ```

























