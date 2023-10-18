import { Routes, Route } from "react-router-dom";

import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Form from "./views/form/form";
import Landing from "./views/landing/landing";
import Error404 from "./views/error404/error404";
import FormUser from "./components/forms/formUser";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/form" element={<Form />} />
      <Route path="/register" element={<Landing />} />
      <Route path="/login" element={<Landing />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
