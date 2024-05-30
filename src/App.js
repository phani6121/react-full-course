// import React, { useState } from "react";
// Hooks are import by the { } brackets
// Hooks are used inside the react components and the top level 
// Hooks are not used the condition statements 

// function App() {
//   useState;
//   return (
//     <div className="App">
//       <h1>hello hooks</h1>
//     </div>
//   );
// }

import React from "react";
// import Index from "./useState/useState-basics";
//import Index from "./useState/useState-advanced";
// import Index from "./useState/useState-multi";
// import Index from "./useState/useState-array";
// import Index from "./useState/useState-example-2-1";
// import Index from "./useState/useState-example-2-2";
// import Index from "./useState/useState-example-2-3";
// import Index from "./useState/useState-example-3";
// import Index from "./useEffect/useEffect-basics";
// import Index from "./useEffect/useEffect-advanced";
// import Index from "./useEffect/useEffect-example-1";
// import Index from "./useEffect/useEffect-example-2";
// import Index from "./useContext/useContextDemo";
// import Index from "./useContext/parentComponent";
// import Index from "./useReducer/useReducer-example-1";
// import Index from "./useReducer/useReducer-example-2";
// import Index from "./useRef/useRef-example-1";
// import Index from "./useRef/useRef-example-2";
// import Index from "./useMemo/useMemo-example-1";
// import Index from "./useCallback/ParentComponent";
// import Index from "./customHooks/PageTitleOne";
// import Index2 from "./customHooks/PageTitleTwo";
// import Index from "./customHooks/FirstCounter";
// import Index2 from "./customHooks/SecondCounter";
// import Index from "./customHooks/FirstApi";
// import Index2 from "./customHooks/SecondApi";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom"
import Success from "./components/Success";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import NewProjects from "./components/NewProjects";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Projects" element={<Projects />} >
          <Route index element={<FeaturedProjects />} />
          {/* If we want direct feature Project we can wrote code above the line like we are not given path place to replace index  */}
          <Route path="feature" element={<FeaturedProjects />} />
          <Route path="new" element={<NewProjects />} />
        </Route>
        {/* Above those lines are nested routes we wrote like that  */}
        <Route path="*" element={<NotFound />} />
        {/* At here path is given "*" it means if not match any route to go to take that star path. */}
      </Routes>
    </div>
  );
};


export default App;
