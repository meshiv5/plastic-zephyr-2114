import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AllRoutes from "./Routes/AllRoutes";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
