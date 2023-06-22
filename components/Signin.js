import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <>
      <center><Image
        className="sign-in-logo"
        src="https://lh3.googleusercontent.com/pw/AJFCJaWd95GEOO1f9oCXJT3EZ7o0UGVBid8uwbVvxvgytZnIkmESpyuGnMGhfijjLsKHkyLUnSGHmVdZ5bElQE_kXarx-f7oqKYuJyxP5gIYOsX6LVWRlz-Sd4gYN7hoQDxY-ZJ4NSlF62BoCboHmJepTVwx=w499-h499-s-no?authuser=0"
        width={200}
        height={200}
        alt="RR logo"
      />
      </center>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ color: 'white' }}>Hi there!</h1>
        <p style={{ color: 'white' }}>Click the button below to login!</p>
        <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </>
  );
}

export default Signin;
