import { Suspense, useState, useMemo } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import BannerBottom from "./components/banner/BannerBottom";
import NavBar from "./components/navBar/NavBar";
import Products from "./components/productsCards/Products";
import Footer from "./components/footer/Footer";
import WorkFlow from "./components/main/WorkFlow";
import Steps from "./components/main/Steps";
import SamplePricing from "./components/main/SamplePricing";
import { ToastContainer } from "react-toastify";

const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const fetchPricingCard = async () => {
  const res = await fetch("/pricingCards.json");
  return res.json();
};

function App() {
  const [cartState, setCartState] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const productsPromise = useMemo(() => fetchProducts(), []);
  const pricingCardsPromise = useMemo(() => fetchPricingCard(), []);
  return (
    <>
    <ToastContainer/>
      <nav>
        <NavBar cartProducts={cartProducts} />
      </nav>
      <main>
        <Banner />
        <BannerBottom />
        <Suspense
          fallback={
            <div className=" w-10 mx-auto"><span className="loading loading-spinner loading-xl"></span></div>
          }
        >
          <Products
            productsPromise={productsPromise}
            cartState={cartState}
            setCartState={setCartState}
            setCartProducts={setCartProducts}
            cartProducts = {cartProducts}
            setTotalPrice = {setTotalPrice}
            totalPrice = {totalPrice}


          />
        </Suspense>
        <Steps />
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xs text-center"></span>
          }
        >
          <SamplePricing pricingCardsPromise={pricingCardsPromise} />
        </Suspense>
        <WorkFlow />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
