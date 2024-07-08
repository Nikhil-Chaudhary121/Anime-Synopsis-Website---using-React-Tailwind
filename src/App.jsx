import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import { Route, Routes, Navigate } from "react-router-dom";
1;
import ReviewPage from "./pages/ReviewPage";
import userAtom from "./atoms/userAtom";
import { useRecoilValue } from "recoil";
import AuthPage from "./pages/AuthPage";
import Nav from "./components/Nav";
import { CiLogout } from "react-icons/ci";
import useLogout from "./hooks/useLogout";
// import CreateButton from "./components/createButton";
import CreateAnime from "./components/CreateAnime";
export default function App() {
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  return (
    <main className="h-full relative bg-white text-black font-normal ">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:animeId" element={<ReviewPage />} />;
      </Routes>
    </main>
  );
}
