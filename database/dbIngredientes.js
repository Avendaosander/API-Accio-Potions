const Ingredientes = require("../models/Ingredientes");

function addIngredientes() {
   Ingredientes.insertMany([
      {
         "nombre": "Escarabajos de ojo de sapo",
         "cantidad": "30",
         "descripcion": "Escarabajos con ojos de sapo que se utilizan en pociones para agregar propiedades viscosas."
      },
      {
         "nombre": "Raíz de valeriana",
         "cantidad": "20",
         "descripcion": "Una raíz mágica que se utiliza en pociones para calmar y relajar."
      },
      {
         "nombre": "Sangre de unicornio",
         "cantidad": "25",
         "descripcion": "La sangre de un unicornio es un ingrediente poderoso en pociones, que otorga fuerza y vida."
      },
      {
         "nombre": "Ojo de serpiente",
         "cantidad": "30",
         "descripcion": "Un ojo de serpiente que se utiliza en pociones para aumentar la percepción y la astucia."
      },
      {
         "nombre": "Pluma de fénix",
         "cantidad": "30",
         "descripcion": "Una pluma de fénix que se utiliza en pociones para agregar poder regenerativo y transformador."
      },
      {
         "nombre": "Escamas de dragón",
         "cantidad": "40",
         "descripcion": "Escamas de dragón trituradas que se utilizan en pociones para añadir un toque de fuego y resistencia."
      },
      {
         "nombre": "Sapo seco",
         "cantidad": "30",
         "descripcion": "Un sapo seco que se utiliza en pociones para agregar propiedades saltarinas y ágiles."
      },
      {
         "nombre": "Polvo de mandrágora",
         "cantidad": "25",
         "descripcion": "Polvo mágico extraído de la mandrágora, que se utiliza en pociones para revivir o reanimar."
      },
      {
         "nombre": "Hueso de lobo",
         "cantidad": "30",
         "descripcion": "Huesos de lobo molidos que se utilizan en pociones para fortalecer y proteger."
      },
      {
         "nombre": "Flor de saúco",
         "cantidad": "30",
         "descripcion": "Una flor mágica de saúco que se utiliza en pociones para brindar poderes curativos y de protección."
      },
      {
         "nombre": "Pulmón de tiburón",
         "cantidad": "30",
         "descripcion": "Un pulmón de tiburón que se utiliza en pociones para mejorar la respiración y la resistencia física."
      },
      {
         "nombre": "Hojas de acónito",
         "cantidad": "50",
         "descripcion": "Hojas venenosas de acónito que se utilizan en pociones para añadir propiedades somníferas y sedantes."
      },
      {
         "nombre": "Serpiente de cascabel",
         "cantidad": "30",
         "descripcion": "Una serpiente de cascabel que se utiliza en pociones para añadir propiedades venenosas y agresivas."
      },
      {
         "nombre": "Pétalos de rosa lunar",
         "cantidad": "15",
         "descripcion": "Los pétalos de la rara rosa lunar se utilizan en pociones para otorgar amor y pasión."
      },
      {
         "nombre": "Veneno de basilisco",
         "cantidad": "15",
         "descripcion": "El veneno de un basilisco, una serpiente gigante, se utiliza en pociones para añadir propiedades letales y destructivas."
      },
      {
         "nombre": "Sangre de rata",
         "cantidad": "18",
         "descripcion": "La sangre de una rata se utiliza en pociones para agregar propiedades astutas y engañosas."
      }
   ]);
}

module.exports = addIngredientes