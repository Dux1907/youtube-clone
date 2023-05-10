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
};

export const fetchVideos = createAsyncThunk("fetchVideos", async (val) => {
  const options = {
    params: {
      regionCode: "IN",
      maxResults: "50",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "e653e9b8c9msh42c03caf4029c58p1f2ba3jsn8a318b0373fb",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.get(
      `https://youtube-v31.p.rapidapi.com/${val}`,
      options
    );
    //  console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
export const fetchVideoDetail = createAsyncThunk(
  "fetchVideoDetail",
  async (val) => {
    const options = {
      params: {
        regionCode: "IN",
        maxResults: "50",
        order: "date",
      },
      headers: {
        "X-RapidAPI-Key": "e653e9b8c9msh42c03caf4029c58p1f2ba3jsn8a318b0373fb",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(
        `https://youtube-v31.p.rapidapi.com/${val}`,
        options
      );
      //  console.log(response.data);
      return response.data.items[0];
    } catch (error) {
      console.error(error);
    }
  }
);
export const fetchRelatedVideo = createAsyncThunk(
  "fetchRelatedVideo",
  async (val) => {
    const options = {
      params: {
        regionCode: "IN",
        maxResults: "50",
        order: "date",
      },
      headers: {
        "X-RapidAPI-Key": "e653e9b8c9msh42c03caf4029c58p1f2ba3jsn8a318b0373fb",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(
        `https://youtube-v31.p.rapidapi.com/${val}`,
        options
      );
      //  console.log(response.data);
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
  },
});

const store = configureStore({
  reducer: {
    videos: videoSlice.reducer,
  },
});
export const { removeVideo } = videoSlice.actions;
export default store;
