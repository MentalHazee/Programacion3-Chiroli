TypeScript

    Es un lenguaje de programación que amplía JavaScript agregando tipos (como string, number, boolean, etc) 
    para detectar errores antes de ejecutar el código. Luego se convierte en JS para que los navegadores puedan usarlo.
    
    Para iniciar un protecto nuevo debe crearse la siguiente estructura:
    
    ejemplo-api-project/
    │
    ├── src/
    │ ├── styles.css
    │ └── main.ts
    │—-index.html
    ├── package.json
    └── tsconfig.json
    
    luego se ejecuta el comando "npm init -y", que sirve para inicializar un proyecto de Node.js (NPM: Node Package Manager). 
    Esto genera el archivo package.json en el directorio con la configuración estandar.

    Luego debemos inicializar el proyecto en TypeScript con "npm install typescript --save-dev".
    Se usa el "--save-dev" porque TypeScript solo se necesita durante el desarrollo para compilar el código, no en producción. 
    En producción se ejecuta el JavaScript generado automáticamente, no el TS original.


Vite 

    Dentro de TS nosotros podemos usar una herramienta llamada VITE, 
    que nos permite crear y ejecutar proyectos web rápido y fácil. 
    En TS te permite configurar un entorno listo para recibir código TS 
    y verlo en el navegador al instante, sin muchas configuraciones.

Configurar Vite en VSCode

    - Instalar Vite con CMD dentro de la carpeta donde queremos realizar el proyecto (distribución de carpetas vanilla)
    - Una vez instalado, en la terminal de VSCode, instalar node con "npm i"
    - Eliminar los archivos innecesarios
    - Configurar el archivo vite.config.ts con las direcciones de los archivos de nuestra app
