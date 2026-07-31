import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TTT.css';
import { Box, Typography, Button, Stack, Fade, Zoom } from '@mui/material';
import { Home, Replay, Close, RadioButtonUnchecked, EmojiEvents } from '@mui/icons-material';

const BattleWithAI = () => {
  /* --- STATES --- */
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true); // Player is X, AI is O
  const [score, setScore] = useState({ x: 0, o: 0 });

  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],           // Diagonals
  ];

  /* --- WIN LOGIC --- */
  const getWinner = (cells) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return { symbol: cells[a], line: pattern };
      }
    }
    return null;
  };

  const winResult = getWinner(board);
  const winner = winResult?.symbol;
  const winningLine = winResult?.line || [];
  const isDraw = !winner && board.every(cell => cell !== null);

  /* --- AI LOGIC (RANDOM) --- */
  useEffect(() => {
    // If it's O's turn and game isn't over, AI moves
    if (!isXTurn && !winner && !isDraw) {
      const timer = setTimeout(() => {
        const emptyIndices = board
          .map((val, idx) => (val === null ? idx : null))
          .filter((val) => val !== null);

        if (emptyIndices.length > 0) {
          const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
          handleCellClick(randomIndex);
        }
      }, 600); // 0.6s delay so AI feels "real"
      return () => clearTimeout(timer);
    }
  }, [isXTurn, board, winner, isDraw]);

  /* --- HANDLERS --- */
  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(updatedBoard);

    const result = getWinner(updatedBoard);
    if (result) {
      setScore(prev => ({
        ...prev,
        [result.symbol.toLowerCase()]: prev[result.symbol.toLowerCase()] + 1
      }));
    }
    setIsXTurn(!isXTurn);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <Box className="Homepage" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Fade in timeout={1000}>
        <Box className="game-wrapper" sx={{ width: '100%', maxWidth: 420, p: 3 }}>

          {/* SCOREBOARD */}
          <Stack direction="row" spacing={3} alignItems="center" className="scoreboard">
            <Box className={`score-card x-side ${isXTurn && !winner ? 'active-glow-x' : ''} ${winner === 'X' ? 'winner-card' : ''}`}>
              <Typography className="token-label">❌</Typography>
              <Typography variant="caption" sx={{ color: 'white' }}>YOU (P1)</Typography>
              <Typography variant="h5" sx={{ color: 'white' }}>{score.x}</Typography>
            </Box>

            <Typography variant="h6" sx={{ color: 'white' }}>⚡ VS ⚡</Typography>

            <Box className={`score-card o-side ${!isXTurn && !winner ? 'active-glow-o' : ''} ${winner === 'O' ? 'winner-card' : ''}`}>
              <Typography className="token-label">⭕</Typography>
              <Typography variant="caption" sx={{ color: 'white' }}>AI BOT</Typography>
              <Typography variant="h5" sx={{ color: 'white' }}>{score.o}</Typography>
            </Box>
          </Stack>

          {/* STATUS AREA */}
          <Box className="status-container" sx={{ minHeight: '100px', mt: 2 }}>
            {winner ? (
              <Zoom in>
                <Box>
                  <Typography variant="h6" className={winner === 'X' ? 'text-cyan' : 'text-pink'}>
                    {winner === 'X' ? '🎊 YOU DEFEATED AI! 🎊' : '🤖 AI TOOK OVER! 🤖'}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#ffd700' }}><EmojiEvents fontSize="small" /> Score Updated!</Typography>
                </Box>
              </Zoom>
            ) : isDraw ? (
              <Typography variant="h5" className="draw-text">🤝 IT'S A TIE! 🤝</Typography>
            ) : (
              <Typography className="status-text">
                {isXTurn ? "🚀 Your Turn (X)..." : "🤖 AI is thinking (O)..."}
              </Typography>
            )}
          </Box>

          {/* GRID */}
          <Box className="battle-grid" sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, maxWidth: 320, mx: 'auto', mb: 3 }}>
            {board.map((cell, index) => (
              <Box
                key={index}
                className={`grid-cell-ai ${winningLine.includes(index) ? 'win-highlight' : ''}`}
                onClick={() => isXTurn && handleCellClick(index)} // Only allow click on user turn
                sx={{ cursor: isXTurn ? 'pointer' : 'not-allowed' }}
              >
                {cell === 'X' && <Close className="icon-x pulse-anim" sx={{ fontSize: 45 }} />}
                {cell === 'O' && <RadioButtonUnchecked className="icon-o pulse-anim" sx={{ fontSize: 45 }} />}
              </Box>
            ))}
          </Box>

          {/* BUTTONS */}
          <Stack direction="row" spacing={2}>
            <Button fullWidth component={Link} to="/" className="btn-secondary" startIcon={<Home />}>Menu</Button>
            <Button fullWidth variant="contained" className="btn-primary" startIcon={<Replay />} onClick={restartGame}>
              {winner || isDraw ? 'Play Again' : 'Restart'}
            </Button>
          </Stack>

        </Box>
      </Fade>
    </Box>
  );
};

export default BattleWithAI;