import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../router/config";

const useCheckAuthentication = () => {
  const navigate = useNavigate();
  const state = useContext(StateContext);

  useEffect(() => {
    if (!state.user.authenticated) {
      navigate(LOGIN);
    }
  }, []);
};

export default useCheckAuthentication;
