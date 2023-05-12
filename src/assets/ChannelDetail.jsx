import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannel } from "./action";
import { useEffect } from "react";
import VideoId from "./VideoId";
const ChannelDetail = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const product3 = useSelector((state) => state.videos.Channel);
  useEffect(() => {
    dispatch(fetchChannel(channelId));
  }, [channelId]);
  //console.log(product3);
  return (
    <>
      {product3 && Object.keys(product3).length > 0 ? (
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-md-2 col-12 bg-dark text-white text-center">
              <Sidebar />
            </div>
            <div
              className="col-10"
              style={{ display: "inline-block !important" }}
            >
              <div className="row justify-content-center">
                <div className="col-12 mb-3">
                  <img
                    src={product3.meta.image.banner[4].url}
                    style={{
                      height: "250px",
                      width: "82.5vw",
                    }}
                  />
                </div>

                <div className="col-9 text-white me-2 mb-5">
                  <div className="d-flex">
                    <img
                      src={product3.meta.thumbnail[2].url}
                      style={{ height: "125px", width: "125px" }}
                      className="rounded-circle"
                    />
                    <div className="d-flex flex-column justify-content-center ms-2">
                      <h4 style={{ margin: "3px" }}>{product3.meta.title}</h4>
                      <p style={{ margin: "3px" }}>
                        {product3.meta.subscriberCount} Subscribers
                      </p>
                      <p
                        style={{
                          width: "600px",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          margin: "3px",
                        }}
                      >
                        {product3.meta.description}
                      </p>
                    </div>
                  </div>
                              </div>
                              {product3.data.map((val, key) => {
                return <VideoId key={key} val={val} />;
              })}
              </div>
              
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default ChannelDetail;
