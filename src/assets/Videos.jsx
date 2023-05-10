import { useSelector } from "react-redux";
import { VideoId } from "./pages";
import { ChannelId } from "./pages";
const Videos = () => {
  const list = useSelector((state) => state.videos.videos);
  // console.log(list.items)
  const component = (val, key) => {
    // console.log(val)
    if (val.id.videoId) return <VideoId key={key} val={val} />;
    else return <ChannelId key={key} val={val} />;
  };
  return (
    <>
      {list && Object.keys(list).length > 0 ? (
        list.items.map((val, key) => {
          return component(val, key);
        })
      ) : (
        <h3 className="loading">Loading</h3>
      )}
    </>
  );
};

export default Videos;
