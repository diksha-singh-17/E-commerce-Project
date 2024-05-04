import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Layout/Title";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Title />
      </main>
    </CartProvider>
  );
}

export default App;
