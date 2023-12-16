import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Box display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "10%", >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
     <Typography color="white" variant="h5" fontFamily="futura">
        MyTube
      </Typography>
    </Box>
    <SearchBar />
  </Stack>
);

export default NavBar;
