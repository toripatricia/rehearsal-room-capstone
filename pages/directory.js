import { Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Directory() {
  return (
    <>
      <div style={{ marginTop: '15px', marginBottom: '10px' }}>
        <center>
          <Link passHref href="/admin">
            <Button>View Administrators</Button>
          </Link>
        </center>
      </div>
      <div style={{ marginTop: '10px' }}>
        <center>
          <Link passHref href="/users">
            <Button>View Singers</Button>
          </Link>
        </center>
      </div>
    </>
  );
}
