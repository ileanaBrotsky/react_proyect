import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Counter from "./components/common/counter/Counter";
function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <Footer />
<Counter/>
    </div>
  );
}

export default App;
