import React, { useEffect } from "react";
import { useLocation } from "react-router";

const Main: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const accessToken = query.get("accessToken");
    const refreshToken = query.get("refreshToken");
    if (!!accessToken && !!refreshToken) {
      localStorage.setItem("AccessToken", accessToken);
      localStorage.setItem("RefreshToken", refreshToken);
      window.location.href = "/";
    }
  }, [location]);
  return (
    <>
      <h1 style={{ color: "white" }}>SSUTackOverflow 메인 페이지입니다.</h1>
      <h2 style={{ color: "white" }}>화이팅~~</h2>
    </>
  );
};

export default Main;
