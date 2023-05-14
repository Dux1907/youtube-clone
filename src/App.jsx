import Navbar from "./assets/Navbar";
import { Routes, Route } from "react-router-dom";
import { Feed }  from "./assets/pages";
import VideoDetail from "./assets/VideoDetail";
import ChannelDetail from './assets/ChannelDetail'
import SearchDetail from "./assets/SearchDetail";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/video/:videoId" element={<VideoDetail />}></Route>
        <Route path="/search/:searchId" element={<SearchDetail />}></Route>
        <Route path = '/channel/:channelId' element = {<ChannelDetail/>}></Route>
      </Routes>
    </>
  );
};

export default App;
