import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";


const Videos = ({ videos, direction }) => {

  if (!videos?.length) return "Loading...";
  console.log(videos);
  return  (
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
  )
};

export default Videos;
