import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Route</h1>
      <Navbar />
      <AllRoutes />
    </div>
  );
}
