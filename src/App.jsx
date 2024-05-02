import Navbar from "./Component/Navbar";
import Carousell from "./Component/Carousell";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <div className="place-items-center grid">
        <Carousell />
      </div>
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
