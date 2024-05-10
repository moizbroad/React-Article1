import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Articles from "./pages/Articles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
