import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

function SelectAccountType() {
  const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: 'white' }}>Hello {user.displayName}! </h1>
      <div style={{ marginTop: '15px', marginBottom: '10px' }}>
        <Link passHref href="/adminForm">
          <Button>Create Admin Account</Button>
        </Link>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Link passHref href="/userForm">
          <Button>Create User Account</Button>
        </Link>
      </div>
    </div>
  );
}

export default SelectAccountType;
