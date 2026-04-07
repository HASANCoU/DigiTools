import "./App.css";
import Banner from "./components/banner/Banner";
import BannerBottom from "./components/banner/BannerBottom";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <main>
          <Banner/>
          <BannerBottom/>
      </main>
      
    </>
  );
}

export default App;
