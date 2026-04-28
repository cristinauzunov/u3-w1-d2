import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AllBooks from "./components/AllBooks";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Welcome />
        <AllBooks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
