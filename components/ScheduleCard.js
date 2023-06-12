import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSchedule, getAllSchedules } from '../api/scheduleData';

function ScheduleCard() {
  const [scheduleObj, setScheduleObj] = useState();
  useEffect(() => {
    getAllSchedules().then((schedules) => setScheduleObj(schedules[0]));
  }, []);
  const deleteThisSchedule = () => {
    if (window.confirm(`Delete ${scheduleObj.date}?`)) {
      deleteSchedule(scheduleObj.firebaseKey).then(() => getAllSchedules().then(setScheduleObj));
    }
  };

  return (
    <>
      <Link href="/schedule" passHref>
        <Card style={{
          height: '800px',
          width: '400px',
          margin: '10px',
          cursor: 'pointer',
        }}
        >
          <Card.Body>
            <Card.Title style={{ minHeight: '20px', fontFamily: 'Gill Sans' }}>{scheduleObj?.date}</Card.Title>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventOneStartTime} - {scheduleObj?.eventOneEndTime}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventOneName}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventOneMembers}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventTwoStartTime} - {scheduleObj?.eventTwoEndTime}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventTwoName}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventTwoMembers}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventThreeStartTime} - {scheduleObj?.eventThreeEndTime}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventThreeName}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventThreeMembers}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventFourStartTime} - {scheduleObj?.eventFourEndTime}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventFourName}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventFourMembers}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventFiveStartTime} - {scheduleObj?.eventFiveEndTime}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventFiveName}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventFiveMembers}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventSixStartTime} - {scheduleObj?.eventSixEndTime}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventSixName}</p>
            <p className="card-text bold" style={{ fontFamily: 'Gill Sans' }}>{scheduleObj?.eventSixMembers}</p>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Link href={`/schedule/edit/${scheduleObj?.firebaseKey}`} passHref>
              <Button variant="info" style={{ background: 'black', color: 'white', border: 'black' }}>EDIT</Button>
            </Link>
            <Link href="/" passHref>
              <Button variant="danger" onClick={deleteThisSchedule} className="m-2">
                DELETE
              </Button>
            </Link>

          </Card.Footer>
        </Card>
      </Link>
    </>
  );
}

export default ScheduleCard;
