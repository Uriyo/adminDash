import Home from "./pages/home/Home";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import "./style/dark.scss"

//Importing  the BrowserRouter and Route components for implementing routes

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";


function App() {
  
  //Acessing the  dark mode context using useContext hook
  const {darkMode}=useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
            </Route>

            <Route path="design">
              <Route index element={<List />} />
            </Route>

            <Route path="developer">
              <Route index element={<List />} />
            </Route>

            <Route path="sales">
              <Route index element={<List />} />
            </Route>

            <Route path="marketing">
              <Route index element={<List />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
