import { Routes, Route } from "react-router-dom";

import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Form from "./views/form/form";
import Landing from "./views/landing/landing";
import Error404 from "./views/error404/error404"

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/videogames" element={<Home />} />
      <Route path="/videogames/:id" element={<Detail />} />
      <Route path="/videogames/form" element={<Form />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
