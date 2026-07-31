import React from 'react';
import { Link } from 'react-router-dom';
import './TTT.css';
import { 
  Box, Typography, TextField, Button, Avatar, Stack, Fade, Divider, IconButton 
} from '@mui/material';
import { 
  GroupAdd, ArrowForward, SportsEsports, Psychology, Shield, MilitaryTech 
} from '@mui/icons-material';

const PlayWithFriend = () => {
  return (
    <Box className="gaming-container" >
      <Fade in timeout={1000}>
        <Box className="setup-card" sx={{ width: '95%', maxWidth: 440, p: 4, textAlign: 'center' ,margin:'20px 20px'}}>
          
          {/* Header */}
          <Avatar sx={{ 
            width: 70, height: 70, mx: 'auto', mb: 2, bgcolor: '#0f172a',
            border: '2px solid #00f2ff', p: 1, boxShadow: '0 0 20px rgba(0, 242, 255, 0.2)'
          }}>      
            <SportsEsports sx={{ fontSize: 35, color: '#ec4899' }} />
          </Avatar>

          <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5, letterSpacing: -1 }}>
            PLAYWITH <span style={{ color: '#00f2ff' }}>FRIENDS</span>
          </Typography>
          <Typography variant="caption" sx={{ color: '#64748b', letterSpacing: 3 }}>
            PREPARE FOR COMBAT
          </Typography>

          <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.05)' }} />

          {/* Player Section with New Feature: Character Badges */}
          <Stack spacing={2}>
            
            {/* Player 1 Area */}
            <Box>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.5 }}>
                <Box className="char-badge cyan">
                  <Psychology sx={{ color: '#00f2ff' }} />
                </Box>
                <Box sx={{ textAlign: 'left', flexGrow: 1 }}>
                  <Typography variant="caption" sx={{ color: '#00f2ff', fontWeight: 'bold' }}>STRIKER X</Typography>
                  <TextField fullWidth className="player-input" placeholder="Your Name..." variant="filled" />
                </Box>
              </Stack>
            </Box>

            {/* Player 2 Area */}
            <Box>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.5 }}>
                <Box sx={{ textAlign: 'right', flexGrow: 1 }}>
                  <Typography variant="caption" sx={{ color: '#ec4899', fontWeight: 'bold' }}>DEFENDER O</Typography>
                  <TextField fullWidth className="player-input" placeholder="Your Name..." variant="filled" />
                </Box>
                <Box className="char-badge pink">
                  <Shield sx={{ color: '#ec4899' }} />
                </Box>
              </Stack>
            </Box>
          </Stack>

          {/* New Unique Feature: Victory Probability Meter */}
          <Box sx={{ mt: 5, mb: 4, p: 2.5, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ fontSize: '10px', color: '#00f2ff', fontWeight: 'bold' }}>WIN CHANCE: 50%</Typography>
              <MilitaryTech sx={{ color: '#ffb100', fontSize: 18 }} />
              <Typography sx={{ fontSize: '10px', color: '#ec4899', fontWeight: 'bold' }}>WIN CHANCE: 50%</Typography>
            </Stack>
            <Box className="prediction-bar">
              <Box className="prediction-fill" />
            </Box>
            <Typography variant="caption" sx={{ color: '#64748b', mt: 1, display: 'block' }}>
              CALCULATING NEURAL BATTLE OUTCOME...
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2}>
            <Button to='/' component={Link} fullWidth sx={{ color: '#64748b', textTransform: 'none', fontWeight: 'bold' }}>
              Back to Home
            </Button>
            <Button 
              to='/battlewithfriend'
              component={Link}
              fullWidth 
              variant="contained" 
              className="btn-initiate"
              endIcon={<ArrowForward />}
            >
              Start Duel
            </Button>
          </Stack>

        </Box>
      </Fade>
    </Box>
  );
};

export default PlayWithFriend;