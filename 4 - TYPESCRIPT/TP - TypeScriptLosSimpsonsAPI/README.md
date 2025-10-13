1.2 Explicar en un comentario dentro del README.md qué hace este comando y
qué archivo genera.

    El comando "npm init -y" sirve para inicializar un proyecto de Node.js (NPM: Node Package Manager). Esto genera el archivo package.json en el directorio con la configuración estandar.

1.3 ¿Por qué se usa --save-dev en lugar de guardar TypeScript como
dependencia normal?

    Se usa porque TypeScript solo se necesita durante el desarrollo para compilar el código, no en producción. En producción se ejecuta el JavaScript generado, no el TS original.

1.4 Investigar y explicar qué hacen las opciones strict, target y outDir.

    La opción "strict" activa todas las comprobaciones estrictas de TS para detectar más errores en el código. "target" define a qué versión de JS se va a complilar. Y "outDir" indica la carpeta donde se guardarán los archivos JS generados tras la compilación.

1.5 Explicar qué hace cada uno de estos scripts y cuándo se usarían.

    El script "build" ejecuta el compilador de TS una vez, transformando los archivos .ts en .js. Se usa cuando se quiere generar la versión final del código para ejecutar o desplegar.
    El script "watch" hace lo mismo, pero mantiene el compilador activo y vuelve a compilar automáticamente cada vez que guardás un cambio, ideal mientras estás desarrollando.

2.2 Documentar la estructura de datos que devuelve la API
    
    {
        "id": 3,
        "age": 10,
        "birthdate": "1980-02-23",
        "gender": "Male",
        "name": "Bart Simpson",
        "occupation": "Student at Springfield Elementary School",
        "portrait_path": "/character/3.webp",
        "phrases": [
            "¡Ay Caramba!",
            "Eat my shorts!",
            "I didnt do it!",
            "Dont have a cow, man.",
            "I’m Bart Simpson, who the hell are you?",
            "Aah! Sideshow Bob!",
            "Nobody better lay a finger on my Butterfinger!",
            "I didnt think it was physically possible, but this both sucks and blows."
        ],
        "status": "Alive"
        },