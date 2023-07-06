import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCards';
import { getAllUsers } from '../api/userData';

export default function UserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((data) => { setUsers(data); });
  }, []);
  return (
    users.map((user) => <UserCard key={user.firebaseKey} user={user} />)
  );
}
