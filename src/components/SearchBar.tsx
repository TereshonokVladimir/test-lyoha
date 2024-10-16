import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <TextField
      label="Search users by name"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      margin="normal"
    />
  );
};

export default SearchBar;