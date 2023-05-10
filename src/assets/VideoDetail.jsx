import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchVideoDetail } from "./action";
import ReactPlayer from "react-player";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { fetchRelatedVideo } from "./action";
import RelatedVideo from "./RelatedVideo";
const VideoDetail = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.videos.videoDetail);
  //const products = useSelector((state) => state);
  // console.log(products);
  useEffect(() => {
    dispatch(
      fetchVideoDetail(
        `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
      )
    );
    dispatch(
      fetchRelatedVideo(
        `search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`
      )
    );
    // return () => {
    //     dispatch(removeVideo());
    //   };
  }, [videoId]);
  return (
    <>
      {Object.keys(product).length > 0 ? (
        <div className="container-fluid">
          <div className="row bg-dark text-white d-flex justify-content-start align-content-start">
            <div className="col-8 videoDetail">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                style={{ minHeight: "80vh", minWidth: "65vw" }}
              />
              <div className="row">
                <div className="col-10">
                  <p> {product.snippet.title}</p>
                  <h4>{product.snippet.channelTitle}</h4>
                </div>
                <div className="col-2 text-end">
                  <p>
                    <VisibilityIcon /> {product.statistics.viewCount}
                  </p>
                  <p>
                    <ThumbUpIcon /> {product.statistics.likeCount}
                  </p>
                </div>
              </div>
            </div>

            <RelatedVideo />
          </div>
        </div>
      ) : (
        <h3>Loading.....</h3>
      )}
    </>
  );
};

export default VideoDetail;
