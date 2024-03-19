import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div className="container">
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};
export default Navbar;

//puedo hacer una exportacion nombrada, esto me permite exportar muchas cosas.
//cuando importo en el otro elemento importo con llaves
/*ej:
     export const Navbar=...
     export let array= [1,12,1]
     y luego en el archivo donde voy a importar 
     import {Navbar, array} from ./etc */
