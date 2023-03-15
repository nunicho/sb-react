import Bienvenido from "../Bienvenido"
import Burger from "../Burger";
import InstalarApp from "../InstalarApp";
import Historia from "../Historia";
import Navbar from "../Navbar";
import Footer from "../Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Bienvenido />
        <Historia />
        <Burger />
        <InstalarApp />
      </main>
      <Footer />
    </>
  );
}

export default App;
