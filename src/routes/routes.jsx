import { Routes, Route } from "react-router-dom";
import { Wraper } from "../components/playList/wraper";
import { Login } from "../components/registrer/login";
import { Register } from "../components/registrer/register";
import { NotFound } from "../components/notFound/not";
import { MyPLayList } from "../components/myPlayList/myPlayList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/playlist" element={<Wraper />} />
      <Route path="/reg" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/myplaylist" element={<MyPLayList />} />
    </Routes>
  );
};
