import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RelatedVideo = () => {
  const product2 = useSelector((state) => state.videos.relatedVideo);

  // const get = (a) => {
  //   return new Date(a).toLocaleString(undefined, { timeZone: "Asia/Kolkata" });
  // };
  return (
    <>
      {product2 && Object.keys(product2).length > 0 ? (
        product2.map((val, key) => {
          return (
            <div
              className="col-12 my-3"
              style={{
                maxHeight: "200px",
                overflow: "auto",
                boxShadow:
                  "rgba(50, 50, 93, 0.15) 0px 30px 60px -12px, rgba(256, 256, 256, 0.6) 0px 18px 36px -18px",
                float: "right",
              }}
              key={key}
            >
              <Link to={`/video/${val.videoId}`}>
                <div className="row">
                  <div className="col-3">
                    <img
                      src={val.thumbnail[1].url}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-9">
                    <p>{val.title}</p>
                    <p>{val.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <h3>Loading....</h3>
      )}
    </>
  );
};

export default RelatedVideo;
