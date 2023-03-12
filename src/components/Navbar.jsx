import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react";
import { Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false)


  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          MARVIN
        </Typography>
        <CreateIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search....." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{}}
            src="https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
            onClick={e =>setOpen(prevOpen => !prevOpen)}
          />
        </Icons>
        <UserBox>
          <Avatar
            src="https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
            onClick={e =>setOpen(prevOpen => !prevOpen)}
          />
          <Typography variant="span">Curry</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl=""
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
