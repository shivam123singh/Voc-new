"use client";

import instance from "./instance";
import { useToast } from "@/components/ui/use-toast";

const Interceptor = ({ component }) => {
  const { toast } = useToast();
  const userToken = "";
  const isLoggedIn = false;

  instance.interceptors.request.use((config) => {
    if (isLoggedIn)
      Object.assign(config.headers, {
        Authorization: `${userToken}`,
      });

    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.code === "ERR_NETWORK") {
        toast({
          variant: "destructive",
          title: "Error occured",
          description: error.message,
        });
        return error;
      }
      // eslint-disable-next-line no-underscore-dangle
      if (
        error.response.status === 401 &&
        error.response.statusText === "Unauthorized"
      ) {
        toast({
          variant: "destructive",
          title: "Error occured",
          description: error.response.data.message,
        });
        // log user out or perform other actions
      }
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest
      ) {
        if (userToken) {
          toast({
            variant: "destructive",
            title: "Error occured",
            description: error.response.data.message,
          });
          if (
            error.response.data.message === "invalid token" ||
            error.response.data.message === "jwt expired"
          ) {
            // log user out here or perform other actions
          }
        }
      }

      if (error.response.status === 500) {
        error.response.data.message = "Something went wrong, Please try again!";
        toast({
          variant: "destructive",
          title: "Error occured",
          description: error.message,
        });
      }
      return Promise.reject(error);
    }
  );

  return component;
};

export default Interceptor;
