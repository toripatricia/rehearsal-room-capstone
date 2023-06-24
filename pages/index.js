// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
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
      <center>
        <h1 style={{ color: 'white', marginTop: '100px' }}>Welcome to your account, {user.displayName}!</h1>
        <div style={{ marginTop: '20px' }}>
          <Link passHref href="/createSchedule">
            <Button>Create Schedule</Button>
          </Link>
        </div>
      </center>
    </div>
  );
}
