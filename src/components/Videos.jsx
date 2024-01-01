import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import {useState} from "react"

const Videos = ({ videos, direction }) => {
  const [loader , setLoader] = useState(true)
  if (!videos?.length) return "Loading...";
  console.log(videos);
  return !loader ? (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos &&
        videos.map((video, index) => (
          <Box key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        ))}
    </Stack>
  ) : (<span className="loader">Loading Videos</span>);
};

export default Videos;
