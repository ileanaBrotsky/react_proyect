import imagen from "./img/mujer_desnuda.png"

const Home = () => {
  return (
    <>
  <div>
    <h1>Home</h1>
  {/* tres formas de importar imagenes, online- desde public(no hace  falta enrutar, simplemente con un /)-como componente de js importado de carpeta
  se puede usar nube biblioteca propia de imagenes en cloudinary parra no hacer pesada la web y ademas no correr riesgo de que la url desaparezca */}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpPCSk_V-lzufnmaxJ1ICMDty29sppVhbtnvR_eEBo_gFoMV9XbxRvP7afAu8cRQ4OOQ&usqp=CAU" alt="" />
    <img src="/public/descarga.png" alt="" />
    <img src={imagen} alt="" />
  </div>
  </>
  );
};

export default Home;
