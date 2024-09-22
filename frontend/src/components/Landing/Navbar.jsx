import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  ButtonGroup,
  Link,
} from "@mui/material";
import StudyIcon from "@mui/icons-material/School";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box component={"nav"}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#65AFFF",
          background: 'transparent',
          backdropFilter: "blur(10px)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#FFFCF7",
            color: "#071013",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(100px)",
            borderRadius: "10px",
            padding: "10px 20px",
            ml: 2,
            mr: 2,
            mt: 2,
            border: "1px solid #071013",
          }}
        >
          <StudyIcon sx={{ mr: 1 }} />
          <Typography variant="h6">StudyPal</Typography>

          {/* Navigation links */}
          <ButtonGroup
            variant="text"
            size="small"
            color="inherit"
            aria-label="text button group"
            sx={{
              ml: 2,
              border: "none",
            }}
          >
            <Button>
              <Link href="#home" underline="none" color="inherit">
                Home
              </Link>
            </Button>
            <Button>
              <Link href="#about" underline="none" color="inherit">
                About
              </Link>
            </Button>
            <Button>
              <Link href="#course" underline="none" color="inherit">
                Courses
              </Link>
            </Button>
          </ButtonGroup>

          {/* Sign in and Sign up buttons */}
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="outlined"
            color="primary"
            sx={{
              mr: 2,
              color: "#071013",
              backgroundColor: "#FFFCF7",
              border: "1px solid #071013",
              borderRadius: "10px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Link
              component={RouterLink}
              to="/signin"
              underline="none"
              color="inherit"
            >
              Sign In
            </Link>
          </Button>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              backgroundColor: "#071013",
              color: "#FFFCF7",
              borderRadius: "10px",
              border: "1px solid #071013",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Link
              component={RouterLink}
              to="/signup"
              underline="none"
              color="inherit"
            >
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
