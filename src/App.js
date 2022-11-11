import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
