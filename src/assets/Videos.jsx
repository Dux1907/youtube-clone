import { useSelector } from "react-redux";
import { VideoId } from "./pages";
import { ChannelId } from "./pages";
const Videos = () => {
  const list = useSelector((state) => state.videos.videos);
   console.log(list)
  const component = (val, key) => {
   // console.log(val)
    if (val.type == 'video') return <VideoId key={key} val={val} />;
    else return <ChannelId key={key} val={val} />;
  };
  return (
    <>
      {
        list.data && Object.keys(list).length > 0 ? (
        list.data.map((val, key) => {
          return component(val, key);
        })
      ) : (
        <h3 className="loading">Loading</h3>
      )}
    </>
  );
};

export default Videos;
