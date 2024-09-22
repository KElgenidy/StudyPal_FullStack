import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Typography } from "@mui/material";

const drawerWidth = 240;

export default function Siderbar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paperAnchorLeft": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#FFFCF7",
          color: "#071013",
          borderRight: "1px solid #071013",
        },
      }}
    >
      <Toolbar  sx={{
        color: "#071013",
      }}/>
      <Box sx={{ overflow: "auto", color: "#071013" }}>
        <List sx={{ color: "#071013" }}>
          {["Dashboard", "SWE", "Business Law"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ color: "#071013" }}>
                <ListItemIcon sx={{ color: "#071013" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText sx={{ color: "#071013" }}>
                  <Typography variant="body1" sx={{ color: "#071013", fontSize: "16px", fontWeight: "500" }}>
                    {text}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
