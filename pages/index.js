// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAdminByUid } from '../api/adminData';
import { useAuth } from '../utils/context/authContext';
// TODO: COMMENT IN FOR AUTH

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    getAdminByUid(user.uid).then(setAdmin);
  }, [user]);
  if (admin === null) {
    return (
      <div />
    );
  }
  if (admin?.uid !== user.uid) {
    router.push('/SelectAccountType');
  }
  return (
    <div>
      <h1 style={{ color: 'white' }}>Welcome to your account, {user.displayName}!</h1>
    </div>
  );
}
