import { Link } from "react-router-dom";

const ChannelId = (val, key) => {
  return (
    <div className="col-10">
      <Link to = {`/channel/${val.val.channelId}`}>
      <div className="row">
      
        <div
          key={key}
          className="col-4 d-flex justify-content-end align-content-center  my-5"
        >
          <img
            src={val.val.thumbnail[1].url}
            alt={val.val.channelTitle}
            style={{ height: "200px" }}
            className="rounded-circle"
          />
        </div>
        <div
          key={key}
          className="col-6 text-white d-flex flex-column justify-content-center align-items-start my-5"
        >
          <h4 className="text-start">{val.val.title}</h4>
          <p>{val.val.description}</p>
        </div>
        
        </div>
        </Link>
    </div>
  );
};

export default ChannelId;
