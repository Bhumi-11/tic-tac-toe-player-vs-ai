import React from "react";
import { Link } from "react-router-dom";
import "./TTT.css";

import {
  Box,
  Typography,
  Container,
  Stack,
  Paper,
} from "@mui/material";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

function TTT() {
  return (
    <Box className="Homepage">
      <Container maxWidth="md">
        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
        >
          {/* Header Section */}
          <Box>
            <AutoAwesomeOutlinedIcon
              sx={{
                color: "white",
                fontSize: "60px",
                mb: 2,
                animation: "swing 2s ease-in-out infinite",
                transformOrigin: "top center",
              }}
            />

            <Typography
              variant="h3"
              className="neon-text"
              sx={{
                color: "white",
                mb: 1,
              }}
            >
              Tic Tac Toe Game
            </Typography>

            <Typography
              sx={{
                color: "#8a8da3",
                fontSize: "1.2rem",
              }}
            >
              Choose your game mode
            </Typography>
          </Box>

          {/* Game Cards */}
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={4}
            sx={{
              mt: 4,
              justifyContent: "center",
            }}
          >
            {/* Play vs AI */}
            <Paper
              component={Link}
              to="/play-ai"
              elevation={0}
              sx={{
                textDecoration: "none",
                p: 4,
                width: 280,
                backgroundColor: "rgba(0, 255, 255, 0.05)",
                border: "2px solid #00d2ff",
                borderRadius: "20px",
                cursor: "pointer",
                transition:
                  "transform 0.3s, box-shadow 0.3s",

                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow:
                    "0 0 20px rgba(0, 210, 255, 0.3)",
                },
              }}
            >
              <SmartToyOutlinedIcon
                sx={{
                  color: "#00d2ff",
                  fontSize: 50,
                  mb: 2,
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Play vs AI
              </Typography>

              <Typography
                sx={{
                  color: "#8a8da3",
                  mt: 1,
                }}
              >
                Challenge the computer
              </Typography>
            </Paper>

            {/* Play with Friend */}
            <Paper
              component={Link}
              to="/playwithfriendcard"
              elevation={0}
              sx={{
                textDecoration: "none",
                p: 4,
                width: 280,
                backgroundColor: "rgba(255, 0, 255, 0.05)",
                border: "2px solid #ff00ff",
                borderRadius: "20px",
                cursor: "pointer",
                transition:
                  "transform 0.3s, box-shadow 0.3s",

                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow:
                    "0 0 20px rgba(255, 0, 255, 0.3)",
                },
              }}
            >
              <GroupAddIcon
                sx={{
                  color: "#ff00ff",
                  fontSize: 50,
                  mb: 2,
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Play with Friend
              </Typography>

              <Typography
                sx={{
                  color: "#8a8da3",
                  mt: 1,
                }}
              >
                Two player mode
              </Typography>
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default TTT;