import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import { fetchUsers, User } from '../api/userService';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const loadUsers = async () => {
        const data = await fetchUsers();
        setUsers(data);
    };
    loadUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box p={2}>
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <UserTable users={filteredUsers} />
    </Box>
  );
};

export default UserList;