/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { React, useState, useEffect } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { createSchedule, updateSchedule } from '../api/scheduleData';

const initialState = {
  date: '',
  firstEvent: '',
  firstEventMembers: '',
  firstEventLocation: '',
  secondEvent: '',
  secondEventMembers: '',
  secondEventLocation: '',
  thirdEvent: '',
  thirdEventMembers: '',
  thirdEventLocation: '',
  fourthEvent: '',
  fourthEventMembers: '',
  fourthEventLocation: '',
  fifthEvent: '',
  fifthEventMembers: '',
  fifthEventLocation: '',
  sixthEvent: '',
  sixthEventMembers: '',
  sixthEventLocation: '',
};

function CreateScheduleForm({ obj }) {
  const [formInput, setFormInput] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateSchedule(formInput)
        .then(() => router.push('/schedule'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createSchedule(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateSchedule(patchPayload).then(() => {
          router.push('/schedule');
        });
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Schedule</h2>

      {/* DATE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Date" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Date"
          name="date"
          value={formInput.date}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 1 Start Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 1 Start Time">
        <Form.Select
          aria-label="event 1 start time"
          name="eventOneStartTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventOneStartTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 1 End Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 1 End Time">
        <Form.Select
          aria-label="event 1 end time"
          name="eventOneEndTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventOneEndTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 1 Name  */}
      <FloatingLabel controlId="floatingInput3" label="Event 1 Name" className="mb-3">
        <Form.Control
          placeholder="Event 1 Name"
          name="eventOneName"
          value={formInput.eventOneName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 1 Members  */}
      <FloatingLabel controlId="floatingInput3" label="Event 1 Members" className="mb-3">
        <Form.Control
          placeholder="Event 1 Members"
          name="eventOneMembers"
          value={formInput.eventOneMembers}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 2 Start Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 2 Start Time">
        <Form.Select
          aria-label="event 2 start time"
          name="eventTwoStartTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventTwoStartTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 2 End Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 2 End Time">
        <Form.Select
          aria-label="event 2 end time"
          name="eventTwoEndTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventTwoEndTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 2 Name  */}
      <FloatingLabel controlId="floatingInput3" label="Event 2 Name" className="mb-3">
        <Form.Control
          placeholder="Event 2 Name"
          name="eventTwoName"
          value={formInput.eventTwoName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 2 Members  */}
      <FloatingLabel controlId="floatingInput3" label="Event 2 Members" className="mb-3">
        <Form.Control
          placeholder="Event 2 Members"
          name="eventTwoMembers"
          value={formInput.eventTwoMembers}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 3 Start Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 3 Start Time">
        <Form.Select
          aria-label="event 3 start time"
          name="eventThreeStartTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventThreeStartTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 3 End Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 3 End Time">
        <Form.Select
          aria-label="event 3 end time"
          name="eventThreeEndTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventThreeEndTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 3 Name  */}
      <FloatingLabel controlId="floatingInput3" label="Event 3 Name" className="mb-3">
        <Form.Control
          placeholder="Event 3 Name"
          name="eventThreeName"
          value={formInput.eventThreeName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 3 Members  */}
      <FloatingLabel controlId="floatingInput3" label="Event 3 Members" className="mb-3">
        <Form.Control
          placeholder="Event 3 Members"
          name="eventThreeMembers"
          value={formInput.eventThreeMembers}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 4 Start Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 4 Start Time">
        <Form.Select
          aria-label="event 4 start time"
          name="eventFourStartTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventFourStartTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 4 End Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 4 End Time">
        <Form.Select
          aria-label="event 4 end time"
          name="eventFourEndTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventFourEndTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 4 Name  */}
      <FloatingLabel controlId="floatingInput3" label="Event 4 Name" className="mb-3">
        <Form.Control
          placeholder="Event 4 Name"
          name="eventFourName"
          value={formInput.eventFourName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 4 Members  */}
      <FloatingLabel controlId="floatingInput3" label="Event 4 Members" className="mb-3">
        <Form.Control
          placeholder="Event 4 Members"
          name="eventFourMembers"
          value={formInput.eventFourMembers}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 5 Start Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 5 Start Time">
        <Form.Select
          aria-label="event 5 start time"
          name="eventFiveStartTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventFiveStartTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 5 End Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 5 End Time">
        <Form.Select
          aria-label="event 5 end time"
          name="eventFiveEndTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventFiveEndTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 5 Name  */}
      <FloatingLabel controlId="floatingInput3" label="Event 5 Name" className="mb-3">
        <Form.Control
          placeholder="Event 5 Name"
          name="eventFiveName"
          value={formInput.eventFiveName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 5 Members  */}
      <FloatingLabel controlId="floatingInput3" label="Event 5 Members" className="mb-3">
        <Form.Control
          placeholder="Event 5 Members"
          name="eventFiveMembers"
          value={formInput.eventFiveMembers}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 6 Start Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 6 Start Time">
        <Form.Select
          aria-label="event 6 start time"
          name="eventSixStartTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventSixStartTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 6 End Time SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Event 6 End Time">
        <Form.Select
          aria-label="event 6 end time"
          name="eventSixEndTime"
          onChange={handleChange}
          className="mb-3"
          value={formInput.eventSixEndTime} // FIXME: modify code to remove error
          required
        >
          <option value="">Select...</option>
          <option value="9am">9am</option>
          <option value="9:30am">9:30am</option>
          <option value="10am">10am</option>
          <option value="10:30am">10:30am</option>
          <option value="11am">11am</option>
          <option value="11:30am">11:30am</option>
          <option value="12pm">12pm</option>
          <option value="12:30pm">12:30pm</option>
          <option value="1pm">1pm</option>
          <option value="1:30pm">1:30pm</option>
          <option value="2pm">2pm</option>
          <option value="2:30pm">2:30pm</option>
          <option value="3pm">3pm</option>
          <option value="3:30pm">3:30pm</option>
          <option value="4pm">4pm</option>
          <option value="4:30pm">4:30pm</option>
          <option value="5pm">5pm</option>
          <option value="5:30pm">5:30pm</option>
          <option value="6pm">6pm</option>
          <option value="6:30pm">6:30pm</option>
          <option value="7pm">7pm</option>
          <option value="7:30pm">7:30pm</option>
          <option value="8pm">8pm</option>
          <option value="8:30pm">8:30pm</option>
          <option value="9pm">9pm</option>
          <option value="9:30pm">9:30pm</option>
          <option value="10pm">10pm</option>
          <option value="10:30pm">10:30pm</option>
          <option value="11pm">11pm</option>
          <option value="11:30pm">11:30pm</option>
        </Form.Select>
      </FloatingLabel>

      {/* Event 6 Name  */}
      <FloatingLabel controlId="floatingInput3" label="Event 6 Name" className="mb-3">
        <Form.Control
          placeholder="Event 6 Name"
          name="eventSixName"
          value={formInput.eventSixName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Event 6 Members  */}
      <FloatingLabel controlId="floatingInput3" label="Event 6 Members" className="mb-3">
        <Form.Control
          placeholder="Event 6 Members"
          name="eventSixMembers"
          value={formInput.eventSixMembers}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Schedule</Button>

    </Form>
  );
}

CreateScheduleForm.propTypes = {
  obj: PropTypes.shape({
    date: PropTypes.string,
    firstEvent: PropTypes.string,
    firstEventMembers: PropTypes.string,
    firstEventLocation: PropTypes.string,
    secondEvent: PropTypes.string,
    secondEventMembers: PropTypes.string,
    secondEventLocation: PropTypes.string,
    thirdEvent: PropTypes.string,
    thirdEventMembers: PropTypes.string,
    thirdEventLocation: PropTypes.string,
    fourthEvent: PropTypes.string,
    fourthEventMembers: PropTypes.string,
    fourthEventLocation: PropTypes.string,
    fifthEvent: PropTypes.string,
    fifthEventMembers: PropTypes.string,
    fifthEventLocation: PropTypes.string,
    sixthEvent: PropTypes.string,
    sixthEventMembers: PropTypes.string,
    sixthEventLocation: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

CreateScheduleForm.defaultProps = {
  obj: initialState,
};

export default CreateScheduleForm;
