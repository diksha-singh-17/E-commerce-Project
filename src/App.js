import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Layout/Title";
import MusicComponent from "./components/UI/MusicComponent";
import CartProvider from "./store/CartProvider";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Title />
        <MusicComponent />
        <Footer />
      </main>
    </CartProvider>
  );
}

export default App;
