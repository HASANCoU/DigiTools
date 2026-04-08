import { Suspense } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import BannerBottom from "./components/banner/BannerBottom";
import NavBar from "./components/navBar/NavBar";
import Products from "./components/productsCards/Products";
import Footer from "./components/footer/Footer";
import WorkFlow from "./components/main/WorkFlow";

const fetchProducts = async() =>{
  const res = await fetch("/products.json");
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();
  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <main>
          <Banner/>
          <BannerBottom/>
          <Suspense fallback={<span className="loading loading-spinner loading-xs mx-auto"></span>}>
              <Products
              productsPromise={productsPromise}
              />
          </Suspense>
          <WorkFlow/>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </>
  );
}

export default App;
