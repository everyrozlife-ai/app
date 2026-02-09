import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
