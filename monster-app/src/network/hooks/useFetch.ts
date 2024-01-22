import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import * as Endpoints from "../Endpoints";
import { useTranslation } from "react-i18next";
import { COUNTRIES } from "../../constants";

axios.defaults.baseURL = Endpoints.BASE_URL;

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  type User = {
    username: string;
    password: string;
    country: string;
    id: string;
  };

  const findUser = (
    username: string,
    password: string,
    country: COUNTRIES,
    users: any
  ): User | undefined => {
    return users.find(
      (user: User) =>
        user.username === username &&
        user.password === password &&
        user.country === country
    );
  };

  const execute = async (url: string, params?: AxiosRequestConfig) => {
    try {
      setLoading(true);
      const response: AxiosResponse = await axios.get(url, params);

      const { data } = params || {};
      const { username, password, country } = data || {};
      const signInResponse = findUser(
        username,
        password,
        country,
        response?.data
      );
      if (!signInResponse) {
        throw "Invalid user";
      } else {
        setResponse(response?.data);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { execute, response, error, loading };
};

export default useFetch;
