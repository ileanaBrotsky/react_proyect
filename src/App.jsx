
import Footer from "./Footer.jsx";

function App() {
  let nombre = "Ile";
   const sumar=()=>{
    console.log(5+2)
   }
  return <div>
    <h1>Esta es la App de {nombre}</h1>;
    <button onClick={sumar}>Sumar</button>
    <Footer/>
    </div>
}

export default App;
