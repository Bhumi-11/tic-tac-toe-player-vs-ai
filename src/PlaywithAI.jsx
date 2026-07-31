import React from 'react';
import { Link } from 'react-router-dom';
import './TTT.css'; // Importing your custom CSS
import {
    Box, Typography, TextField, Button, Paper, Avatar, Fade, Divider
} from '@mui/material';
import { SmartToy, PersonOutline, ArrowForward, Sensors } from '@mui/icons-material';

const PlaywithAI = () => {
    return (
        <Box className="gaming-container">
            {/* Decorative Floating Particle */}
            <Box sx={{
                position: 'absolute', top: '15%', left: '20%', width: 6, height: 6,
                bgcolor: '#00f2ff', borderRadius: '50%', boxShadow: '0 0 15px #00f2ff'
            }} />

            <Fade in timeout={1200}>
                <Box sx={{
                    width: '90%', maxWidth: 420, p: 4, position: 'relative',
                    bgcolor: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center'
                }}>

                    {/* Neon Corner Brackets */}
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40, borderLeft: '3px solid #00f2ff', borderTop: '3px solid #00f2ff', borderTopLeftRadius: '24px' }} />
                    <Box sx={{ position: 'absolute', bottom: 0, right: 0, width: 40, height: 40, borderRight: '3px solid #ec4899', borderBottom: '3px solid #ec4899', borderBottomRightRadius: '24px' }} />

                    {/* Header Avatar with Pulsing Sensor */}
                    <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                        <Avatar sx={{ width: 90, height: 90, bgcolor: '#0f172a', border: '2px dashed #00f2ff', p: '5px' }}>
                            <SmartToy sx={{ fontSize: 50, color: '#00f2ff' }} />
                        </Avatar>
                        <Sensors className="sensor-pulse" sx={{ position: 'absolute', top: 5, right: 5, fontSize: 20 }} />
                    </Box>

                    {/* Glitch Title */}
                    <Typography
                        variant="h4"
                        className="glitch-text"
                        data-text="BATTLE AI"
                        sx={{ mb: 0.5, color: 'white', display: 'flex', justifyContent: 'center' }}
                    >
                        BATTLE <span style={{ color: '#00f2ff' }}>AI</span>
                    </Typography>

                    <Typography variant="caption" sx={{ color: '#64748b', letterSpacing: 2 }}>
                        LETS BEGIN THE BATTLE WITH AI
                    </Typography>

                    <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

                    {/* Challenger Input */}
                    <Box sx={{ width: '100%', mb: 3, textAlign: 'left' }}>
                        <Typography variant="overline" sx={{ color: '#00f2ff', fontWeight: 'bold', ml: 1 }}>
                            Challenger Identity
                        </Typography>
                        <TextField
                            fullWidth
                            variant="filled"
                            placeholder="Enter Your Name..."
                            className="custom-input" // Simplified class name
                        />
                    </Box>

                    {/* AI Info Card */}
                    <Paper elevation={0} sx={{
                        p: 2, mb: 4, display: 'flex', alignItems: 'center',
                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, transparent 100%)',
                        border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: '16px',
                    }}
                    >
                        <Box sx={{ p: 1, bgcolor: 'rgba(236, 72, 153, 0.2)', borderRadius: '10px', mr: 2 }}>
                            <SmartToy sx={{ color: '#ec4899' }} />
                        </Box>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="subtitle2" sx={{ color: '#ec4899', fontWeight: 'bold' }}>NEURAL BOT</Typography>
                            <Typography variant="caption" sx={{ color: '#94a3b8' }}>Your Opponent</Typography>
                        </Box>
                    </Paper>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button 
                            to='/' component={Link} fullWidth sx={{ color: '#64748b', textTransform: 'none', fontWeight: 'bold' }}>
                            Back To Home
                        </Button>
                        <Button
                        to='/battlewithai'
                        component={Link}
                            fullWidth
                            variant="contained"
                            endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: '#00f2ff', color: 'black', fontWeight: 900, borderRadius: '12px',
                                boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)',
                                '&:hover': { bgcolor: '#00d8e4', transform: 'scale(1.02)' },
                                transition: '0.3s'
                            }}
                        >
                            Lets Initiate
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Box>
    );
};

export default PlaywithAI;