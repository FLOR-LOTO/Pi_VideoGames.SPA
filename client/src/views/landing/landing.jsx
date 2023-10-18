import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import FormUser from "../../components/forms/formUser";

import style from "./landing.module.css";

const Landing = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") navigate("/login");
  }, [pathname, navigate]);

  let path = pathname.split("");
  path.shift()
  const pathJoin = path.join("")

  return (
    <div className={style.container}>
      <FormUser path={pathJoin} />
    </div>
  );
};

export default Landing;
