import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
