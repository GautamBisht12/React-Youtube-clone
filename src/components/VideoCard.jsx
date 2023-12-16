import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "330px", sm: "358px", md: "300px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: { xs: "100%", sm: "358px", md: "300px" },
            height: "180px",
            objectFit: "cover",
          }}
        />
      </Link>
      <CardContent sx={{ height: "106px", backgroundColor: "#1e1e1e" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.publishTime.slice(0, 10) || " "}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
