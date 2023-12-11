import './App.css';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout></MainLayout>} >

      <Route path="/" element={<HomePage></HomePage>} /> {/* 👈 Renders at /app/ */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
