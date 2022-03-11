const  express = require("express");
const app = express();
var cors = require('cors')

const morgan = require("morgan");

app.use(cors())
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());

app.get("/productos", (req, res) => {
    res.send([
        { url: '../assets/img/hills_canine.jpg', nombreProducto: 'Hills Canine Treats Chicken', precioNormal: '16500', precioMember: '15000', stars: '5' },
        { url: '../assets/img/smathBones_unidad.png', nombreProducto: 'Smartbones unidad smartsticks dental', precioNormal: '3870', precioMember: '3655', stars: '4' },
        { url: '../assets/img/chunkygato.jpg', nombreProducto: 'Chunky Snacks Deli Caprichos Gatos Salmón', precioNormal: '3100', precioMember: '2635', stars: '5' },
        { url: '../assets/img/salvaje.jpg', nombreProducto: 'Salvaje Snacks Piel Y Pelaje', precioNormal: '3950', precioMember: '3358', stars: '3' },
        
    ])
} 
);
app.get("/categorias", (req, res) => {
    res.send( [
        { url: '../assets/img/categoria_alimento.png', nombre: 'Alimento' },
        { url: '../assets/img/categoria_snacks.png', nombre: 'Snacks' },
        { url: '../assets/img/categoria_farmacia.png', nombre: 'Farmapet' },
        { url: '../assets/img/categoria_higiene.png', nombre: 'Cuidado e Higiene'},
        { url: '../assets/img/categoria_juguetes.png', nombre: 'Juguetes'},
        { url: '../assets/img/categoria_accesorios.png', nombre: 'Accesorios'},
        { url: '../assets/img/categoria_petlover.png', nombre: 'PetLovers'},
        { url: '../assets/img/categoria_arenas.png', nombre: 'Arenas'},
      ]);
} 
);

app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);

});
