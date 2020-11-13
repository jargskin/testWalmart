const Product = require('../models/Product')

// const crearProducto = async (req, res) => {
//     console.log(req.body)
//     try {
//         let producto;
//         //guardar nuevo prod
//         producto = new Product(req.body);

//         await producto.save();

//         //mensaje cong
//         res.send('Producto Creado');
//     } catch (error) {
//         console.log(error);
//         res.status(400).send('Hubo un error');
//     }
// }
// // obtener productos
const getProducto = (req, res) => {
  const { search } = req.query;
  let query = (Number.isNaN(parseInt(search))) 
    ? {'$or': [
      {
        brand: {'$regex': `${search}`}
      },
      {
        description: {'$regex': `${search}`}
      }
    ]}
    : { id : search};

  Product.find(query)
    .then((resp) => {
      return res.json(resp)
    })
    .catch((error) => res.json(error))
};

module.exports = { getProducto };