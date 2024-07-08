import React from "react";
import SignupCard from "../components/SignupCard";
import LoginCard from "../components/LoginCard";
import { useRecoilValue, useSetRecoilState } from "recoil";
import authScreenAtom from "../atoms/AuthAtom";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState);

  return (
    <section className=" h-[100vh] flex justify-center w-[100vw]">
      {authScreenState === "login" ? <LoginCard /> : <SignupCard />}
    </section>
  );
};

export default AuthPage;
