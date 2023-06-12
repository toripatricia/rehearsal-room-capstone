import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleSchedule } from '../../../api/scheduleData';
import CreateScheduleForm from '../../../components/CreateScheduleForm';

export default function EditSchedule() {
  const [schedule, setSchedule] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleSchedule(firebaseKey).then(setSchedule);
  }, [firebaseKey]);

  return (
    <CreateScheduleForm obj={schedule} />
  );
}
