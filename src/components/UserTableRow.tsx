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
}

const UserTableRow: React.FC<UserTableRowProps> = ({ user }) => {
  return (
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
    </TableRow>
  );
};

export default UserTableRow;