import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Box, TextField, Typography, Link } from "@mui/material";
import api from "../api";
import { LoadingButton } from "@mui/lab";




export default function SignUp() {
  localStorage.clear();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/api/user/signup/", { username, email, password });
      navigate("/signin");
    } catch (error) {
      console.error("Signup failed:", error);
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
          height: "600px",
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
          Sign Up
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#071013",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "1.2rem",
            marginBottom: "20px",
          }}
        >
          Please enter your details to sign up.
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
        label="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
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
          loading={loading}
          variant="contained"
          type="submit"
          sx={{
            width: "100%",
            marginBottom: "15px",
          }}
        >
          Sign Up
        </LoadingButton>

        <Typography>
          Already have an account?{" "}
          <Link component={RouterLink} to="/signin">
            Sign In
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}