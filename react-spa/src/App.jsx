import { BrowserRouter, Routes, Route } from "react-router";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";

import Hebrew from "./components/Hebrew.jsx";

export default function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path={"/"}element={<Header />} />
        <Route path={"/About"} element={<About />} />
        <Route path={"/Hebrew"} element={<Hebrew />} />


       
        


      </Routes>

    
    </BrowserRouter>
  )
}