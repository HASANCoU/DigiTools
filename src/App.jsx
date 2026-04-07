import "./App.css";
import Banner from "./components/banner/Banner";
import BannerBottom from "./components/banner/BannerBottom";
import NavBar from "./components/navBar/NavBar";
import Products from "./components/productsCards/Products";

function App() {
  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <main>
          <Banner/>
          <BannerBottom/>
          <Products/>
      </main>
      
    </>
  );
}

export default App;
