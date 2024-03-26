import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

import Counter from "./components/common/counter/Counter";
import { Layout } from "./components/layout/Layout";
function App() {
  return (
    <div>
      
      <Layout>
      <ItemListContainer/>
      <Counter/>
      </Layout>
     
     

    </div>
  );
}

export default App;
