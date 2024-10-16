import React from 'react';
import { TableRow, TableCell } from '@mui/material';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UserTableRowProps {
  user: User;
  rowIndex: number;
}

const UserTableRow: React.FC<UserTableRowProps> = ({ user, rowIndex }) => {
  return (
    <TableRow
      sx={{
        backgroundColor: rowIndex % 2 === 0 ? 'grey.100' : 'white',
        '&:hover': {
          backgroundColor: 'primary.light',
        }
      }}
    >
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
    </TableRow>
  );
};

export default UserTableRow;