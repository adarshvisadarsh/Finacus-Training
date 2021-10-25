import { Route,Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
      <Route path="/Welcome">
        <Welcome />
      </Route>
      <Route path="/Products" exact>
        <Products />
      </Route>
      <Route path="/Products/:ProductID">
        <ProductDetail />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
