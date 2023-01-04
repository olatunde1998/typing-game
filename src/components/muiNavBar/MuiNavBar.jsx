import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
// import CatchingPokemon from "@mui/icons-material/CatchingPokemon";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const MuiNavBar = ({ easy, intermediate, hard }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          {" "}
          <TiPointOfInterestOutline
            size={50}
            style={{ textDecoration: "none", color: "white" }}
          />
        </Link>

        <Typography
          variant="h6"
          component="p"
          sx={{fontSize:"16px", marginRight: "18px"}}
        >
          Typing game
        </Typography>
        <Stack direction="row" spacing={0} sx={{ marginRight: "0px"}}>
        <Link to="/easy" style={{ textDecoration: "none", color: "white" }}><Button color="inherit" sx={{ margin: "none" ,fontSize:"10px"}}>
            {easy}
          </Button></Link>
          <Button color="inherit" sx={{ margin: "none",fontSize:"10px" }}>
            {intermediate}
          </Button>
          <Button color="inherit" sx={{ margin: "none",fontSize:"10px" }}>
            {hard}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default MuiNavBar;
