/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable brace-style */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { createUser, getSingleUser, updateUser } from '../api/userData';

const initialState = {
  name: '',
  email: '',
  role: '',
  debut: false,
};

export default function CreateUserForm(obj) {
  const [formInput, setFormInput] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      getSingleUser().then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createUser(payload).then(({ name }) =>
      {
        const patchPayload = { firebaseKey: name };
        updateUser(patchPayload).then(() => {
          router.push('/');
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
    <>
      <div className="form">
        <h1>User Registration</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">Create Your Profile</h2>

        {/* Name INPUT  */}
        <FloatingLabel controlId="floatingInput1" label="Full Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* Email INPUT  */}
        <FloatingLabel controlId="floatingInput1" label="Email" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Email address"
            name="email"
            value={formInput.email}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput1" label="Role" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Role"
            name="role"
            value={formInput.role}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* Production SELECT  */}
        <FloatingLabel controlId="floatingSelect" label="Production">
          <Form.Select
            aria-label="Production"
            name="productionId"
            onChange={handleChange}
            className="mb-3"
            value={obj.productionId} // FIXME: modify code to remove error
            required
          >
            <option value="">Select...</option>
            <option value="SOC">Serenity Opera Company</option>
          </Form.Select>
        </FloatingLabel>

        <Form.Check
          className="text-black mb-3"
          type="switch"
          id="debut"
          name="debut"
          label="Debut?"
          checked={formInput.debut}
          onChange={(e) => {
            setFormInput((prevState) => ({
              ...prevState,
              petsAllowed: e.target.checked,
            }));
          }}
        />

        <Button type="submit">{obj.firebaseKey} Create Account</Button>

      </Form>
    </>
  );
}

CreateUserForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    debut: PropTypes.bool,
  }),
};

CreateUserForm.defaultProps = {
  obj: initialState,
};
