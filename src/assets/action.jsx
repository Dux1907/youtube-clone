import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  videos: [],
  videoDetail: [],
  relatedVideo: [],
  Channel: [],
  comments:[]
};

export const fetchVideos = createAsyncThunk("fetchVideos", async (val) => {
  let x;
  if (!val) x = "trending";
  else x = val;
  const options = {
    method: "GET",
    url: `https://youtube-v3-alternative.p.rapidapi.com/search`,
    params: {
      query: x,
      geo: "IN",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "e653e9b8c9msh42c03caf4029c58p1f2ba3jsn8a318b0373fb",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(x);
    //   console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
export const fetchVideoDetail = createAsyncThunk(
  "fetchVideoDetail",
  async (val) => {
    const options = {
      method: "GET",
      url: `https://youtube-v3-alternative.p.rapidapi.com/video`,
      params: {
        id: val,
        geo: "IN",},

      headers: {
        "X-RapidAPI-Key": "e653e9b8c9msh42c03caf4029c58p1f2ba3jsn8a318b0373fb",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
    //  console.log(response.data);
       return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const fetchRelatedVideo = createAsyncThunk(
  "fetchRelatedVideo",
  async (val) => {
    const options = {
      method: "GET",
      url: `https://youtube-v3-alternative.p.rapidapi.com/related`,
      params: {
        id: val,
        geo: 'IN',
        lang: 'en'
      },
      headers: {
        "X-RapidAPI-Key": "e653e9b8c9msh42c03caf4029c58p1f2ba3jsn8a318b0373fb",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
     //  console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const fetchChannel = createAsyncThunk(
  "fetchChannel",
  async (val) => {
    const options = {
      method: "GET",
      url: `https://youtube-v3-alternative.p.rapidapi.com/channel`,
      params: {
        id: val,geo: "IN",
      },
      headers: {
        "X-RapidAPI-Key": "e653e9b8c9msh42c03caf4029c58p1f2ba3jsn8a318b0373fb",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
       console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const fetchComments = createAsyncThunk("fetchComments", async (val) => {
  const options = {
    method: "GET",
    url: `https://youtube-v3-alternative.p.rapidapi.com/comments`,
    params: {
     id:val,geo: "IN",
    },
    headers: {
      "X-RapidAPI-Key": "e653e9b8c9msh42c03caf4029c58p1f2ba3jsn8a318b0373fb",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
     console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
);
const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    removeVideo: (state) => {
      state.video.videoDetail = {};
    },
  },
  extraReducers: {
    [fetchVideos.pending]: () => {
      console.log("pending");
    },
    [fetchVideos.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, videos: payload };
    },
    [fetchVideos.rejected]: () => {
      console.log("rejected");
    },
    [fetchVideoDetail.fulfilled]: (state, { payload }) => {
      return { ...state, videoDetail: payload };
    },
    [fetchRelatedVideo.fulfilled]: (state, { payload }) => {
      return { ...state, relatedVideo: payload };
    },
    [fetchChannel.fulfilled]: (state, { payload } ) => {
      return { ...state, Channel: payload,videos:payload.data };
    },
    [fetchComments.fulfilled]: (state, { payload }) => {
      return { ...state, Comments: payload };
    }
  },
});

const store = configureStore({
  reducer: {
    videos: videoSlice.reducer,
  },
});
export const { removeVideo } = videoSlice.actions;
export default store;
