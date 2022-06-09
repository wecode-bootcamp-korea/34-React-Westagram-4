import { BrowserRouter, Routes, Route } from "react-router-dom";

// 은정의 컴포넌트
import EunjeongLogIn from "./Pages/eunjeongKim/Login/Login";
import EunjeongMain from "./Pages/eunjeongKim/Main/Main";

// 중영의 컴포넌트
import JungyoungLogIn from "./Pages/jungyoungAhn/Login/Login";
import JungyoungMain from "./Pages/jungyoungAhn/Main/Main";
//유쥬의 컴포넌트/
import YujuLogin from "./Pages/yujuAn/Login/Login";
import YujuMain from "./Pages/yujuAn/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        /
        <Route path="loginEunjeong" element={<EunjeongLogIn />} />
        <Route path="MainEunjeong" element={<EunjeongMain />} />
        <Route path="loginJungyoung" element={<JungyoungLogIn />} />
        <Route path="MainJungyoung" element={<JungyoungMain />} />
        <Route path="loginYuju" element={<YujuLogin />} />
        <Route path="MainYuju" element={<YujuMain />} />
      </Routes>
    </BrowserRouter>
  );
};
