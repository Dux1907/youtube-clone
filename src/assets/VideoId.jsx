import { Link } from "react-router-dom";
const VideoId = (val, key) => {
  // const get = (a) => {
  //   return new Date(a).toLocaleString(undefined, { timeZone: "Asia/Kolkata" });
  // };
  return (
    <div
      key={key}
      className="col-3 text-white mt-2"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      }}
    >
      <Link to={`/video/${val.val.videoId}`}>
        <img
          src={val.val.thumbnail[0].url}
          alt={val.val.channelTitle}
          style={{ height: "200px",width:'275px' }}
          className="rounded"
        />
        <p>{val.val.title}</p>
        <p>{val.val.channelTitle}</p>
        {/* <p>{get(val.val.snippet.publishTime)}</p> */}
      </Link>
    </div>
  );
};

export default VideoId;
