import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      p={2} 
      border={1} 
      borderColor="grey.300" 
      borderRadius={2}
      boxShadow={3}
    >
      <Typography variant="h4" gutterBottom>
        Counter: {count}
      </Typography>

      <Box display="flex" gap={2}>
        <Button 
          variant="contained" 
          color="success" 
          onClick={increment}
        >
          Increment
        </Button>
        <Button 
          variant="contained" 
          color="warning" 
          onClick={decrement}
        >
          Decrement
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;