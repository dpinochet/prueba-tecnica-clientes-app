
# ClientesApp

ClientesApp es una aplicación Angular para gestionar y visualizar clientes.

## Requisitos

- Node.js (v14 o superior)
- Angular CLI (v10 o superior)

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/tu-usuario/ClientesApp.git
    cd ClientesApp
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

## Configuración

1. Asegúrate de que el archivo `src/environments/environment.ts` apunte a la URL de tu backend. Por defecto, debería ser:

    ```typescript
    export const environment = {
      production: false,
      apiUrl: 'https://localhost:5001/api'
    };
    ```

## Ejecución

Para ejecutar la aplicación en modo de desarrollo, utiliza:

```sh
ng serve
```

La aplicación estará disponible en `http://localhost:4200`.

## Pruebas Unitarias

Para ejecutar las pruebas unitarias, utiliza:

```sh
ng test
```

### Pruebas Incluidas

#### ClientesService

- `should be created`: Verifica que el servicio se crea correctamente.
- `getClientesAsync_ReturnsAllClientes`: Verifica que el servicio devuelve todos los clientes correctamente.

#### ClientesListComponent

- `should create`: Verifica que el componente se crea correctamente.

#### AppComponent

- `should create the app`: Verifica que el componente principal se crea correctamente.
- `should have as title 'Hello, ClientesApp'`: Verifica que el título del componente principal es correcto.
- `should render title`: Verifica que el título se renderiza correctamente en el DOM.
- `should render the heading "Prueba Técnica"`: Verifica que el encabezado "Prueba Técnica" se renderiza correctamente.

## Muestra operativa
<img width="1169" alt="Captura de pantalla 2024-07-25 a la(s) 4 08 24 p  m" src="https://github.com/user-attachments/assets/232a7263-9cbc-4cb1-bc58-351db7c05fb8">


