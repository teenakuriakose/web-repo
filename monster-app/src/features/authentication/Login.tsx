
import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../../router/config";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      This is login
      <Button onClick={() => navigate(DASHBOARD)} />
    </div>
  );
};
export default Login;