/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';

export default function UserCard({ user }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{user?.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user?.voiceType}</Card.Subtitle>
          <Card.Text>
            {user?.phoneNumber}
          </Card.Text>
          <Card.Link href="">Email</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
