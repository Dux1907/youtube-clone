import { useParams } from "react-router-dom";
import { fetchComments } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const Comments = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const product4 = useSelector((state) => state.videos.Comments);
  console.log(product4);
  useEffect(() => {
    dispatch(fetchComments(videoId));
  }, [videoId]);
  return (
    <>
      {product4 && Object.keys(product4).length > 0 ? (
        <>
          <h4 className="mt-3 ms-2">{product4.commentsCount} Comments</h4>
          {product4.data.map((val, key) => {
            return (
              <div key={key} className="d-flex m-3 mb-5">
                <div className="d-flex">
                  <img
                    src={val.authorProfileImageUrl[2].url}
                    alt={val.authorDisplayName}
                    style={{ height: "50px", width: "50px" }}
                    className="rounded-circle"
                  />
                </div>
                <div className="d-flex flex-column ms-3">
                  <div className="d-flex">
                    <h6 className="me-2">{val.authorDisplayName}</h6>
                    <p>{val.publishedTimeText}</p>
                  </div>
                  <p className="mb-1">{val.textDisplay}</p>
                  <div className="d-flex">
                    <p className="me-3"> <ThumbUpIcon/> {val.likesCount}</p>

                    <p><ReplyIcon/>{val.replyCount}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default Comments;
