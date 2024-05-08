import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Articles from "./Pages/Articles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articles />} />
          {/* <Route path="/shop-page" element={<ShopPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
