import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import EuropeTournament from "./pages/EuropeTournament";
import RussiaTournament from "./pages/RussiaTournament";
import ArabiaTournament from "./pages/ArabiaTournament";
import GeorgiaTournament from "./pages/GeorgiaTournament";
import AllLiveBox from "./pages/AllLiveBox";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/Europe" element={<EuropeTournament/>} />
          <Route path="/Russia" element={<RussiaTournament/>} />
          <Route path="/Arabia" element={<ArabiaTournament/>} />
          <Route path="/Georgia" element={<GeorgiaTournament/>} />
          <Route path="/lives" element={<AllLiveBox/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
