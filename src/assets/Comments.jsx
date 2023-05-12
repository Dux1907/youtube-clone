import { useParams } from "react-router-dom";
import { fetchComments } from "./action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Comments = () => {
    const { videoId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchComments(videoId))
    },[videoId])
    return (
        <div>
            
        </div>
    );
};

export default Comments;