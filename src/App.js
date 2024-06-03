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
// import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom"
import Success from "./components/Success";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import NewProjects from "./components/NewProjects";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login"
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

// Lazy loading means if we are run the large projects to load the pages to taken more time so we are use the lazy loading to reduce the loading time. 
//Procedure to use the Lazy loading any project have many components are used so large content components are to import dynamic so in that time when ever we can click that component page in that time its loaded remaining time not loaded.
// This facture works only that component have Export default components 

//Dynamic import 
//Lazy function 
const LazyAbout = React.lazy(() => import("./components/About"))


function App() {
  return (
    <AuthProvider className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={
          <React.Suspense fallback="Loading...">
            <LazyAbout />
          </React.Suspense>
        } />
        {/* At here we are using lazy loading for more content component so it's takes time to load because we can use React.suspense with prop fallback. fallback is displayed what ever we give value   */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Projects" element={<Projects />} >
          <Route index element={<FeaturedProjects />} />
          {/* If we want direct feature Project we can wrote code above the line like we are not given path place to replace index  */}
          <Route path="feature" element={<FeaturedProjects />} />
          <Route path="new" element={<NewProjects />} />
        </Route>
        <Route path="/users" element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        } />
        <Route path="/users/:userId" element={<UserDetails />} />
        {/* Dynamic routes are wrote like above line  */}
        {/* Above those lines are nested routes we wrote like that  */}

        <Route path="/login" element={<Login />} />

        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<NotFound />} />
        {/* At here path is given "*" it means if not match any route to go to take that star path. */}
      </Routes>
    </AuthProvider>
  );
};


export default App;
