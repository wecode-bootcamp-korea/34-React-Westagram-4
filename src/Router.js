import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EunjeongLogin from './Pages/eunjeongKim/Login/Login';
import EunjeongMain from './Pages/eunjeongKim/Main/Main';

import JungyoungLogIn from './Pages/jungyoungAhn/Login/Login';
import JungyoungMain from './Pages/jungyoungAhn/Main/Main';

import YujuLogin from './Pages/yujuAn/Login/Login';
import YujuMain from './Pages/yujuAn/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginEunjeong" element={<EunjeongLogin />} />
        <Route path="/mainEunjeong" element={<EunjeongMain />} />
        <Route path="/loginJungyoung" element={<JungyoungLogIn />} />
        <Route path="/mainJungyoung" element={<JungyoungMain />} />
        <Route path="/loginYuju" element={<YujuLogin />} />
        <Route path="/mainYuju" element={<YujuMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
