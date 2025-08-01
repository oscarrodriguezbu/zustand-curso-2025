# React + TypeScript + Vite + Zustand + TailwindCSS + ReactRouterDom

Este es un cascarón de proyecto, siéntete libre de usarlo para tus proyectos.

<img src="https://github.com/oscarrodriguezbu/zustand-curso-2025/blob/main/public/screenshot.png?raw=true" alt="Dashboard Screenshot">



## Instalar

1. Clonar proyecto
2. Instalar dependencias ```npm install```
3. Correr en desarrollo ```npm run dev```
4. Confugrar un backend, pero para este ejercicio se usó Firebase, entonces con Firebase crear nuevo proyecto, buscar menu compilacion, realtime database, crear base de datos, seleccionar la region por edefecto, seleccionar modo de prueba y habilitar. En reglas cambiar "now < 1756443600000" por true (Solo con fines didacticos). Publicar. Copiar una url como: https://zustand-storage2025-default-rtdb.firebaseio.com/ luego crear la data, pero ejemplo person: { fistName: xss, etc...} y agregar. Con esa url y con /person tenemos listo un endpoint para hacer la peticion. Luego solucionar un posible problema de cors, ir a firebase, en el menu izquierdo buscar compilacion, autentication, comenzar, comfiguracion, verificar que esté el localhost

## Nota sobre DevTools
Si desean mostrar en las DevTools los nombres de las acciones, cree una rama especial para mostrarles el tipado de todo el árbol, desde Immer, DevTools y Persist. Url: 

