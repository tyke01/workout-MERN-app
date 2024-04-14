import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
      <main className="overflow-hidden w-full">
        <BrowserRouter>
          <Navbar />
          <div className="pages bg-card-foreground w-full min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </main>
  );
}

export default App;
