// React hooks for state management
import React, { useState } from 'react';

// React Router for navigation
import { Link } from 'react-router-dom';

// Game-specific CSS
import './TTT.css';

// Material UI components
import {
  Box,
  Typography,
  Button,
  Stack,
  Fade,
  Zoom
} from '@mui/material';

// Material UI icons
import {
  Home,
  Replay,
  Close,
  RadioButtonUnchecked,
  EmojiEvents
} from '@mui/icons-material';

/* ==============================
   MAIN COMPONENT
================================ */
const BattlewithFriend = () => {

  /* --------------------
     GAME STATES
  -------------------- */

  // Stores the 3x3 board (9 cells)
  const [board, setBoard] = useState(Array(9).fill(null));

  // true  => X's turn
  // false => O's turn
  const [isXTurn, setIsXTurn] = useState(true);

  // Score tracking for X and O
  const [score, setScore] = useState({ x: 0, o: 0 });

  /* --------------------
     WINNING COMBINATIONS
  -------------------- */

  // All possible winning index patterns
  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],   // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],   // Columns
    [0, 4, 8], [2, 4, 6],              // Diagonals
  ];

  /* --------------------
     CHECK FOR WINNER
  -------------------- */
  const getWinner = (cells) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      // If all 3 cells match and are not null
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return {
          symbol: cells[a], // 'X' or 'O'
          line: pattern     // winning line indexes
        };
      }
    }
    return null;
  };

  // Get winner result from current board
  const winResult = getWinner(board);

  // Extract winner symbol (X or O)
  const winner = winResult?.symbol;

  // Winning cells to highlight
  const winningLine = winResult?.line || [];

  // Draw condition (board full and no winner)
  const isDraw = !winner && board.every(cell => cell !== null);

  /* --------------------
     HANDLE CELL CLICK
  -------------------- */
  const handleCellClick = (index) => {

    // Ignore click if cell already filled or game over
    if (board[index] || winner) return;

    // Create copy of board
    const updatedBoard = [...board];

    // Place X or O based on turn
    updatedBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(updatedBoard);

    // Check if this move caused a win
    const result = getWinner(updatedBoard);

    if (result) {
      // Increase score of winner
      setScore(prev => ({
        ...prev,
        [result.symbol.toLowerCase()]:
          prev[result.symbol.toLowerCase()] + 1
      }));
    }

    // Switch turn
    setIsXTurn(!isXTurn);
  };

  /* --------------------
     RESTART GAME
  -------------------- */
  const restartGame = () => {
    setBoard(Array(9).fill(null)); // Clear board
    setIsXTurn(true);              // X starts again
  };

  /* --------------------
     UI LOGIC FLAGS
  -------------------- */

  // Active player highlight
  const isXActive = isXTurn && !winner;
  const isOActive = !isXTurn && !winner;

  // Winner checks
  const isXWinner = winner === 'X';
  const isOWinner = winner === 'O';

  // Status conditions
  const showWinner = Boolean(winner);
  const showDraw = !winner && isDraw;
  const showTurn = !winner && !isDraw;

  // Status text
  const statusText = isXTurn
    ? '🚀 STRIKER X is thinking...'
    : '🛡️ DEFENDER O is thinking...';

  // Winner banner text
  const winnerText = winner === 'X'
    ? '🎊 X DOMINATED! 🎊'
    : '🎊 O CONQUERED! 🎊';

  /* --------------------
     UI RENDER
  -------------------- */
  return (
    <Box className="Homepage"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: { xs: 1, sm: 2, md: 4 } // responsive padding
      }}>
      <Fade in timeout={1000}>
        <Box className="game-wrapper"
          sx={{
            width: '100%',
            maxWidth: { xs: 340, sm: 420, md: 520 },
            p: { xs: 2, sm: 3 }
          }}>

          {/* 🏆 SCOREBOARD */}
          <Stack direction={{ xs: 'row', sm: 'row' }}
            spacing={{ xs: 2, sm: 3 }}
            alignItems="center"
            className="scoreboard">

            {/* X Player */}
            <Box className={`score-card x-side 
              ${isXActive ? 'active-glow-x' : ''} 
              ${isXWinner ? 'winner-card' : ''}`
            }
            >
              <Typography className="token-label">❌</Typography>
              <Typography variant="caption" className="player-name">
                P1 STRIKER
              </Typography>
              <Typography variant="h5" className="score-val">
                {score.x}
              </Typography>
            </Box>

            {/* VS Divider */}
            <Box className="vs-divider">
              <Typography variant="h6" sx={{
                color: 'white',
                fontSize: { xs: '0.8rem', sm: '1.2rem', md: '1.4rem' }
              }}>⚡ VS ⚡</Typography>
            </Box>

            {/* O Player */}
            <Box className={`score-card o-side 
              ${isOActive ? 'active-glow-o' : ''} 
              ${isOWinner ? 'winner-card' : ''}`}
            >
              <Typography className="token-label">⭕</Typography>
              <Typography variant="caption" className="player-name">
                P2 DEFENDER
              </Typography>
              <Typography variant="h5" className="score-val">
                {score.o}
              </Typography>
            </Box>
          </Stack>

          {/* 📣 STATUS AREA */}
          <Box className="status-container" sx={{ minHeight: '110px' }}>

            {/* Winner Message */}
            {showWinner && (
              <Zoom in>
                <Box className="winner-banner">
                  <Typography
                    variant="h6"
                    className={isXWinner ? 'text-cyan' : 'text-pink'}
                  >
                    {winnerText}
                  </Typography>

                  <Typography variant="subtitle1" sx={{ color: '#ffd700' }}>
                    <EmojiEvents fontSize="small" /> +1 Point Added!
                  </Typography>
                </Box>
              </Zoom>
            )}

            {/* Draw Message */}
            {showDraw && (
              <Typography variant="h5" className="draw-text">
                🤝 IT'S A TIE! 🤝
              </Typography>
            )}

            {/* Turn Message */}
            {showTurn && (
              <Typography className="status-text">
                {statusText}
              </Typography>
            )}
          </Box>

          {/* 🎮 GAME GRID */}
          <Box className="battle-grid"
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: { xs: 1, sm: 2 },
              width: '100%',
              marginBottom:'10px',
              maxWidth: 320,
              // mx: 'auto'
            }}>
            {board.map((cell, index) => {
              const isWinningCell = winningLine.includes(index);

              return (
                <Box
                  key={index}
                  className={`grid-cell ${isWinningCell ? 'win-highlight' : ''}`}
                  onClick={() => handleCellClick(index)}
                >
                  {cell === 'X' && (
                    <Close sx={{ fontSize: { xs: 40, sm: 48, md: 56 } }}
                      className={`icon-x 
                      ${isWinningCell ? 'winner-pulse' : 'pulse-anim'}`
                      }
                    />
                  )}

                  {cell === 'O' && (
                    <RadioButtonUnchecked className={`icon-o 
                      ${isWinningCell ? 'winner-pulse' : 'pulse-anim'}`}
                    />
                  )}
                </Box>
              );
            })}
          </Box>

          {/* 🕹️ CONTROLS */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="button-group" sx={{ width: '100%' }}>
            <Button fullWidth
              component={Link}
              to="/"
              className="btn-secondary"
              startIcon={<Home />}
            >
              Menu
            </Button>

            <Button fullWidth
              variant="contained"
              className="btn-primary"
              startIcon={<Replay />}
              onClick={restartGame}
            >
              {winner || isDraw ? ' Play Again' : ' Restart'}
            </Button>
          </Stack>

        </Box>
      </Fade>
    </Box>
  );
};

export default BattlewithFriend;