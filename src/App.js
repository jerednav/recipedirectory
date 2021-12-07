import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Recipe from "./pages/Recipe/Recipe";
import Create from "./pages/Create/Create";
import Navbar from "./components/Navbar";

import "./App.css";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes/:id' element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
