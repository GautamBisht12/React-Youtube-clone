import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { SideBar, Videos } from "./";

import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [videos, setVideos] = useState([]);
const [loader , setLoader] = useState(true)
  
  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
    setLoader(false)
  }, [selectedCategory]);

  return !loader ? (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: "1.5", color: "#fff" }}
        >
          Copyright 2023 JSM Media
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{ overflow: "auto", height: "90vh", flex: 2, marginLeft: "15px" }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  ): : (
    <span className="loader">Loading Videos </span>
  );
};

export default Feed;
