const Pociones = require('../models/pociones')

function addPociones() {
   Pociones.insertMany([
      {
         "nombre": "Poción de la Resistencia",
         "descripcion": "Una poción que aumenta la resistencia física y la resistencia a los hechizos.",
         "precio": 10,
         "cantidad": 50,
         "imagen": {
            "public_id": "Accio potions/Pociones/Resistencia_jonpwy",
            "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Resistencia_jonpwy.webp"
         },
         "categoria": "Pociones de Resistencia",
         "ingredientes": ["Hueso de lobo", "Sapo seco", "Escamas de dragón"]
      },
      {
         "nombre": "Poción de la Curación",
         "descripcion": "Una poción que acelera la curación de heridas y restaura la energía vital.",
         "precio": 12,
         "cantidad": 30,
         "imagen": {
               "public_id": "Accio potions/Pociones/Curacion_qospym",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Curacion_qospym.webp"
            },
         "categoria": "Pociones Curativas",
         "ingredientes": [
            "Flor de saúco",
            "Pluma de fénix",
            "Polvo de mandrágora"
         ]
      },
      {
         "nombre": "Poción de la Sabiduría",
         "descripcion": "Una poción que aumenta la inteligencia y el conocimiento.",
         "precio": 15,
         "cantidad": 40,
         "imagen": {
               "public_id": "Accio potions/Pociones/Sabiduria_vizu9n",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Sabiduria_vizu9n.webp"
            },
         "categoria": "Pociones de Sabiduría",
         "ingredientes": [
            "Raíz de valeriana",
            "Ojo de serpiente",
            "Pétalos de rosa lunar"
         ]
      },
      {
         "nombre": "Poción de la Invisibilidad",
         "descripcion": "Una poción que permite al bebedor volverse invisible por un corto período de tiempo.",
         "precio": 20,
         "cantidad": 20,
         "imagen": {
               "public_id": "Accio potions/Pociones/Invisibilidad_kak4op",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Invisibilidad_kak4op.webp"
            },
         "categoria": "Pociones de Transformación",
         "ingredientes": [
            "Sangre de unicornio",
            "Serpiente de cascabel",
            "Escarabajos de ojo de sapo"
         ]
      },
      {
         "nombre": "Poción del Amor",
         "descripcion": "Una poción que despierta sentimientos de amor y atracción en quien la consume.",
         "precio": 18,
         "cantidad": 25,
         "imagen": {
               "public_id": "Accio potions/Pociones/Amor_p9d9fc",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561108/Accio%20Potions/Pociones/Amor_p9d9fc.webp"
            },
         "categoria": "Pociones de Amor",
         "ingredientes": [
            "Pétalos de rosa lunar",
            "Veneno de basilisco",
            "Sangre de rata"
         ]
      },
      {
         "nombre": "Poción del Engaño",
         "descripcion": "Una poción que permite al bebedor engañar y confundir a los demás.",
         "precio": 14,
         "cantidad": 35,
         "imagen": {
               "public_id": "Accio potions/Pociones/Engaño_yyvusq",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Enga%C3%B1o_yyvusq.webp"
            },
         "categoria": "Pociones de Engaño",
         "ingredientes": [
            "Sangre de rata",
            "Polvo de mandrágora",
            "Hueso de lobo"
         ]
      },
      {
         "nombre": "Poción de la Fuerza",
         "descripcion": "Una poción que aumenta la fuerza física y la resistencia muscular.",
         "precio": 16,
         "cantidad": 30,
         "imagen": {
               "public_id": "Accio potions/Pociones/Fuerza_l4gii1",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Fuerza_l4gii1.webp"
            },
         "categoria": "Pociones de Fuerza",
         "ingredientes": [
            "Escarabajos de ojo de sapo",
            "Raíz de valeriana",
            "Hojas de acónito"
         ]
      },
      {
         "nombre": "Poción de la Velocidad",
         "descripcion": "Una poción que aumenta la velocidad y la agilidad del bebedor.",
         "precio": 19,
         "cantidad": 25,
         "imagen": {
               "public_id": "Accio potions/Pociones/Velocidad_ayaqw8",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Velocidad_ayaqw8.webp"
            },
         "categoria": "Pociones de Velocidad",
         "ingredientes": ["Sapo seco", "Pulmón de tiburón", "Flor de saúco"]
      },
      {
         "nombre": "Poción del Sueño",
         "descripcion": "Una poción que induce un sueño profundo y reparador.",
         "precio": 13,
         "cantidad": 40,
         "imagen": {
               "public_id": "Accio potions/Pociones/Sueño_th0won",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561110/Accio%20Potions/Pociones/Sue%C3%B1o_th0won.webp"
            },
         "categoria": "Pociones de Sueño",
         "ingredientes": [
            "Hojas de acónito",
            "Polvo de mandrágora",
            "Ojo de serpiente"
         ]
      },
      {
         "nombre": "Poción de la Agilidad",
         "descripcion": "Una poción que aumenta la agilidad y los reflejos del bebedor.",
         "precio": 17,
         "cantidad": 30,
         "imagen": {
               "public_id": "Accio potions/Pociones/Agilidad_dappbj",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Agilidad_dappbj.webp"
            },
         "categoria": "Pociones de Agilidad",
         "ingredientes": [
            "Escamas de dragón",
            "Pétalos de rosa lunar",
            "Sangre de unicornio"
         ]
      },
      {
         "nombre": "Poción de la Inteligencia",
         "descripcion": "Una poción que aumenta la inteligencia y la capacidad de aprendizaje.",
         "precio": 15,
         "cantidad": 35,
         "imagen": {
               "public_id": "Accio potions/Pociones/Inteligencia_hs84py",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Inteligencia_hs84py.webp"
            },
         "categoria": "Pociones de Inteligencia",
         "ingredientes": [
            "Raíz de valeriana",
            "Pluma de fénix",
            "Serpiente de cascabel"
         ]
      },
      {
         "nombre": "Poción de la Transformación",
         "descripcion": "Una poción que permite al bebedor transformarse en otra criatura o forma.",
         "precio": 22,
         "cantidad": 20,
         "imagen": {
               "public_id": "Accio potions/Pociones/Transformacion_xrnc6p",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561110/Accio%20Potions/Pociones/Transformacion_xrnc6p.webp"
            },
         "categoria": "Pociones de Transformación",
         "ingredientes": [
            "Polvo de mandrágora",
            "Escamas de dragón",
            "Flor de saúco"
         ]
      },
      {
         "nombre": "Poción del Valor",
         "descripcion": "Una poción que aumenta el coraje y la valentía del bebedor.",
         "precio": 14,
         "cantidad": 40,
         "imagen": {
               "public_id": "Accio potions/Pociones/Valor_ji0apt",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Valor_ji0apt.webp"
            },
         "categoria": "Pociones de Valor",
         "ingredientes": ["Hueso de lobo", "Ojo de serpiente", "Sangre de rata"]
      },
      {
         "nombre": "Poción del Vuelo",
         "descripcion": "Una poción que permite al bebedor volar por un corto período de tiempo.",
         "precio": 21,
         "cantidad": 25,
         "imagen": {
               "public_id": "Accio potions/Pociones/Vuelo_o7z61g",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Vuelo_o7z61g.webp"
            },
         "categoria": "Pociones de Vuelo",
         "ingredientes": [
            "Pétalos de rosa lunar",
            "Pluma de fénix",
            "Sapo seco"
         ]
      },
      {
         "nombre": "Poción de la Suerte",
         "descripcion": "Una poción que aumenta la suerte y atrae la fortuna al bebedor.",
         "precio": 18,
         "cantidad": 30,
         "imagen": {
               "public_id": "Accio potions/Pociones/Suerte_mox3ft",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Suerte_mox3ft.webp"
            },
         "categoria": "Pociones de Suerte",
         "ingredientes": [
            "Escarabajos de ojo de sapo",
            "Raíz de valeriana",
            "Veneno de basilisco"
         ]
      },
      {
         "nombre": "Poción de la Belleza",
         "descripcion": "Una poción que realza la belleza y la apariencia del bebedor.",
         "precio": 16,
         "cantidad": 35,
         "imagen": {
               "public_id": "Accio potions/Pociones/Belleza_x0nu9t",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Belleza_x0nu9t.webp"
            },
         "categoria": "Pociones de Belleza",
         "ingredientes": [
            "Serpiente de cascabel",
            "Sangre de unicornio",
            "Flor de saúco"
         ]
      },
      {
         "nombre": "Poción del Veneno",
         "descripcion": "Una poción venenosa que puede ser utilizada con fines ofensivos.",
         "precio": 13,
         "cantidad": 40,
         "imagen": {
               "public_id": "Accio potions/Pociones/Veneno_hy9iw8",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Veneno_hy9iw8.webp"
            },
         "categoria": "Pociones de Veneno",
         "ingredientes": [
            "Sangre de rata",
            "Veneno de basilisco",
            "Hojas de acónito"
         ]
      },
      {
         "nombre": "Poción de la Protección",
         "descripcion": "Una poción que fortalece las defensas y protege contra maldiciones y hechizos.",
         "precio": 19,
         "cantidad": 25,
         "imagen": {
               "public_id": "Accio potions/Pociones/Proteccion_ecq7hy",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Proteccion_ecq7hy.webp"
            },
         "categoria": "Pociones de Protección",
         "ingredientes": [
            "Hueso de lobo",
            "Polvo de mandrágora",
            "Ojo de serpiente"
         ]
      },
      {
         "nombre": "Poción de la Venganza",
         "descripcion": "Una poción que inflige daño y sufrimiento a quien la bebe.",
         "precio": 15,
         "cantidad": 30,
         "imagen": {
               "public_id": "Accio potions/Pociones/Venganza_eak0gu",
               "secure_url": "https://res.cloudinary.com/dtjgc9qlk/image/upload/v1685561109/Accio%20Potions/Pociones/Venganza_eak0gu.webp"
            },
         "categoria": "Pociones de Venganza",
         "ingredientes": [
            "Escarabajos de ojo de sapo",
            "Escamas de dragón",
            "Pluma de fénix"
         ]
      }
   ]);
}

module.exports = addPociones