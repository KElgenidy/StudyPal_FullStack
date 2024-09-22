import { Box, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Intro() {
    return (
      <Box
        component={"section"}
        sx={{
          mt: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 100px)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "4rem",
            fontWeight: "bold",
            textAlign: "center",
            mb: "2rem",
            color: "#FFFCF7",
          }}
        >
          Welcome to StudyPal
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            mb: "2rem",
            color: "#FFFCF7",
          }}
        >
          Your Study Buddy
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            mb: "2rem",
            color: "#FFFCF7",
          }}
        >
          StudyPal is am application designed to help students study more
          effectively.
        </Typography>

        <Button variant="contained" sx={{
            backgroundColor: "#071013",
            color: "#FFFCF7",
            borderRadius: "13px",
            border: "1px solid #071013",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            padding: "10px 20px",
          }}>
          <Link component={RouterLink} to="/signup" underline="none" color="inherit">
            Get Started
          </Link>
        </Button>
      </Box>
    );
}