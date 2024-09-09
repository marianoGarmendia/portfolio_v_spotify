import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import img_logo_m from "./assets/logo-m.png";

import ProjectsPage from "./pages/ProjectsPage";
import Conocimientos from "./pages/Conocimientos";
import ChatCV from "./pages/ChatCV";

import IsMovil from "./components/IsMovil";
import LogoHome from "./components/LogoHome";
import Lupa from "./components/Lupa";
import MoreIcon from "./components/MoreIcon";
import World from "./components/World";
import WhatsappShareButton from "./components/WspShare";
import QuienSoy from "./pages/QuienSoy";

function App() {
  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    // Detectar si el user agent contiene indicios de dispositivos móviles
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android|iPhone|iPad|iPod/i.test(userAgent)) {
      setEsMovil(true);
    }
  }, []);
  if (esMovil) return <IsMovil></IsMovil>;

  return (
    <main className=" grid_main gap-2 h-dvh p-2  font-rubik ">
      <div className="grid grid-cols-1  grid-rows-10 items-center justify-center gap-2 ">
        <div className="rounded-md w-full h-full  bg-black_light row-span-3 px-6 py-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#eee] p-[4px]">
              <img className="h-8 w-8 " src={img_logo_m} alt="" />
            </div>
            <span className="font-bold">Mariano Garmendia</span>
          </div>
          <ul className="p-2 space-y-4 font-bold text-sm text-[#9CA4A6]">
            <li className="flex items-center gap-4">
              <LogoHome />
              <Link to="/proyectos">Home</Link>
            </li>
            <li className="flex items-center gap-4">
              <Lupa />
              <Link to="chat-cv">Search</Link>
            </li>
          </ul>
        </div>
        <div className="rounded-md w-full h-full  bg-black_light row-span-8 p-2 flex flex-col">
          <div className="flex items-center gap-2 justify-between p-4">
            <span className="font-bold text-[#9CA4A6] ">
              Desarrollador Fullstack
            </span>
            <MoreIcon />
          </div>
          <div className="p-4 rounded-md bg-[#1f1f1f] flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-md">Conversemos</p>
              <p className="text-sm font-medium">
                Es muy fácil! escribime aquí
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1f1f1f] w-fit hover:scale-105 transition-all duration-200 ease-in-out">
              <WhatsappShareButton>Enviar wsp</WhatsappShareButton>
            </span>
          </div>
          <div className="text-xs text-[#9CA4A6] flex flex-col gap-2 p-4  h-[stretch] ">
            <span>Compromiso</span>
            <span>Talento</span>
            <span>Ganas</span>
            <span>Trabajo en equipo</span>
            <div className="w-full text-white flex  h-full items-end">
              <span className="flex items-end px-2 gap-2 py-1 rounded-full border h-fit border-white ">
                <World />
                <span>{"(Argentina)"}- Bs.as.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/proyectos" index element={<ProjectsPage />}></Route>
        <Route path="/" element={<ProjectsPage />}></Route>
        <Route path="/conocimientos" element={<Conocimientos />}></Route>
        <Route path="/chat-cv" element={<ChatCV />}></Route>
        <Route path="/quien-soy" element={<QuienSoy />}></Route>
      </Routes>
    </main>
  );
}

export default App;
