import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import lottieVhai from "../../assets/98642-error-404.json";
import useTitle from "../../hook/useTitle";

const ErrorPage = () => {
  const { error } = useRouteError();
  useTitle("Error");

  return (
    <section className="flex items-center md:-mt-4 h-screen p-12 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <p className="text-9xl">
          <Lottie animationData={lottieVhai} loop={true} />
        </p>
        <div className="max-w-md text-center">
          <p className="text-lg font-semibold md:text-3xl text-red-800 md:-mt-10">
            {error?.message}
          </p>
          <Link to="/" className="btn mt-4">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
