<div align="center">

<a href="https://uvm.edu.ve/">
   <img alt="Universidad Valle del Momboy" src="https://res.cloudinary.com/dtjgc9qlk/image/upload/w_200/v1685912942/Logos/Screenshot_2023-06-04_170828_bve37v.png" width="200" />
</a>

# **Accio Potions**

🟣Este es el servidor oficial de la Tienda de Pociones Magicas **Accio Potions**, desarrollado en el Stack MERN🟣

[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759279/Eventos%20UVM/MongoDB_r13ajm.png)](https://www.mongodb.com/docs/manual/)
[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759279/Eventos%20UVM/Expressjs_ewokei.webp)](https://expressjs.com/es/starter/installing.html)
[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759282/Eventos%20UVM/react_j0lfgm.webp)](https://beta.es.reactjs.org/)
[![](https://res.cloudinary.com/dtjgc9qlk/image/upload/c_scale,w_150,r_max/v1681759279/Eventos%20UVM/Nodejs_f1rqqz.webp)](https://nodejs.org/docs/latest-v19.x/api/)
</div>


## **Tabla de Contenidos** 📌
***
- [**Accio Potions**](#accio-potions)
  - [**Tabla de Contenidos** 📌](#tabla-de-contenidos-)
  - [**Instalación** 🔧](#instalación-)
  - [**Ejecutando las pruebas** ⚙️](#ejecutando-las-pruebas-️)
    - [**Endpoints**](#endpoints)
      - [🧙‍♂️**Home**](#️home)
      - [📃**Ingredientes**](#ingredientes)
      - [🪄**Create-potion.**](#create-potion)
      - [✏️**Update-potion.**](#️update-potion)
      - [🗑️**Delete-potion.**](#️delete-potion)
      - [🔍**Search-potion.**](#search-potion)
  - [**Construido con** 🛠️](#construido-con-️)
  - [**Desarrollador** ✒️](#desarrollador-️)


## **Instalación** 🔧
***
Debe crear un archivo `.env` en la ruta raiz del proyecto `/`. El contenido de este archivo `.env` le será enviado.
***
Una vez creado el archivo `.env`, abrir la terminal en la ruta raiz del proyecto y ejecutar el siguiente comando:
```
npm install
```
Iniciar el servidor ejecutando el comando:
```
npm run dev
```
Debe aparecer lo siguiente:
```
Servidor corriendo en el puerto: 3000
DB Conectada🚀
```
Significa que el servidor ha arrancado correctamente.

## **Ejecutando las pruebas** ⚙️
***
Iniciar el servidor desde la ruta raiz del proyecto "/"

### **Endpoints**
***

#### 🧙‍♂️**Home** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/home` (GET)

Para ir a la ruta principal, esto mostrará la lista de pociones disponibles.
```
http://localhost:3000/home
```

#### 📃**Ingredientes** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/ingredientes` (GET)

Para ir a la ruta principal, esto mostrará la lista de ingredientes disponibles.
```
http://localhost:3000/ingredientes
```

#### 🪄**Create-potion.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/create-potion` (POST)

Para Probar el create-potion, esto permite crear una pocion. Ingresando el siguiente ejemplo en formato json
```
{
   "nombre": "Poción de la Resistencia",
   "descripcion": "Una poción que aumenta la resistencia física y la resistencia a los hechizos.",
   "precio": 10,
   "cantidad": 50,
   "imagen": "multipart/form-data"
   "categoria": "Pociones de Resistencia",
   "ingredientes": ["Hueso de lobo", "Sapo seco", "Escamas de dragón"]
}
```

#### ✏️**Update-potion.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/update-potion/:potionID` (PUT)

Para Probar el update-potion, esto permite editar una pocion. Ingresando el siguiente ejemplo en formato json
```
{
   "nombre": "Poción Modificada",
   "descripcion": "Una poción que aumenta la resistencia física y la resistencia a los hechizos modificada",
   "precio": 20,
   "cantidad": 20,
   "imagen": "multipart/form-data"
   "categoria": "Pociones de Resistencia",
   "ingredientes": ["Hueso de lobo"]
}
```

#### 🗑️**Delete-potion.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/delete-potion/:potionID` (DELETE)

Para Probar el delete-potion, esto permite eliminar una pocion
```
http://localhost:3000/delete-potion/:potionID
```

#### 🔍**Search-potion.** 
Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con `http://localhost:3000/search-potion` (POST)

Para Probar la busqueda por filtros, esto mostrará todas las pociones que coincidan con la busqueda realizada, Ingrese un solo ejemplo en formato json, acá algunas opciones:
```
{
  "nombre": "Fuerza"
}
```
```
{
  "categoria": "Curativas"
}
```
```
{
  "descripcion": "aumenta"
}
```


## **Construido con** 🛠️

* [NodeJs](https://nodejs.org/dist/latest-v19.x/docs/api/)  19.8.1
* [Express](https://expressjs.com/en/5x/api.html)  4.18.2
* [MongoDB](https://www.mongodb.com/docs/)  6.0.4
* [Mongoose](https://mongoosejs.com/docs/)  7.2.2
* [Cloudinary](https://cloudinary.com/documentation/node_integration) 1.37.0

## **Desarrollador** ✒️

* **Alexander Avendaño** - *Desarrollador* - [Avendaosander](https://github.com/Avendaosander)