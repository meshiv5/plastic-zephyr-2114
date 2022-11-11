import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <AllRoutes />
    </div>
  );
}

export default App;
