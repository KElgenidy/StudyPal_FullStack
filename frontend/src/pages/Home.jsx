import { Box, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../api";
// import { Outlet } from "react-router-dom";

import Siderbar from "../components/Home/Siderbar";
import HomeNavbar from "../components/Home/HomeNavbar";

export default function Home() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const fetchUserProfile = async () => {
    try {
      const response = await api.get("/api/user/profile/");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HomeNavbar username={user.username} />
        <Siderbar />
      </Box>
    </>
  );
}
