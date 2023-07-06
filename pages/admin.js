import React, { useEffect, useState } from 'react';
import AdminCard from '../components/AdminCards';
import { getAllAdmin } from '../api/adminData';

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllAdmin().then((data) => { setUsers(data); });
  }, []);
  return (
    users.map((user) => <AdminCard key={user.firebaseKey} user={user} />)
  );
}
