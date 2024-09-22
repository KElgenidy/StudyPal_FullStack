import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { Box, TextField, Typography, Link } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    try {
      const response = await api.post("/api/token/", {
        username,
        password,
      });

      console.log(response.data);
      localStorage.setItem(ACCESS_TOKEN, response.data.access);
      localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/home");

    } catch (error) {
      alert("Sign in failed:", error);
    
    } finally {
      setLoading(false);
    }
  
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backdropFilter: "blur(1500px)",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFCF7",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid #071013",
          width: "500px",
          height: "500px",

          gap: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#071013",
            fontWeight: "bold",
            textAlign: "center",
            
          }}
        >
          Sign In
        </Typography>

        <Typography 

          variant="h6"
          sx={{
          color: "#071013",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "1.2rem",
          marginBottom: "20px",
        }}>
          Please sign in to continue.
        </Typography>

        <TextField
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            width: "100%",
            marginBottom: "15px",
          }}
        />
        <TextField
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: "100%",
            marginBottom: "15px",
            borderRadius: "20x",
          }}
        />
        <LoadingButton 
          loading = {loading}
          variant="contained" 
          type="submit"
          sx={{
            width: "100%",
            marginBottom: "15px",
          }}
        >
          Sign In
        </LoadingButton>

        <Typography>
          Don&apos;t have an account?{" "}
          <Link component={RouterLink} to="/signup">
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

// text color #071013
