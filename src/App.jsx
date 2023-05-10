import Navbar from "./assets/Navbar";
import { Routes, Route } from "react-router-dom";
import { Feed } from "./assets/pages";
import VideoDetail from "./assets/VideoDetail";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/video/:videoId" element={<VideoDetail />}></Route>
      </Routes>
    </>
  );
};

export default App;
