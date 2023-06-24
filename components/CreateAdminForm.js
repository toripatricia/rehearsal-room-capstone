/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import {
  createAdmin, getSingleAdmin, updateAdmin, getAdminByUid,
} from '../api/adminData';
// import { getAllProductions } from '../api/productionData';

const initialState = {
  name: '',
  email: '',
  role: '',
};

export default function CreateAdminForm(obj) {
  // States for registration
  const [formInput, setFormInput] = useState([]);
  const router = useRouter();
  // const [productions, setProductions] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj]);

  // useEffect(() => {
  //   getAllProductions().then(setProductions);

  //   if (obj.firebaseKey) setFormInput(obj);
  // }, [obj, user]);

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      getSingleAdmin().then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      getAdminByUid(user.uid).then((clientExist) => {
        if (clientExist) {
          window.confirm('You already have an account, you will be logged in!');
        } else {
          createAdmin(payload).then(({ name }) => {
            const patchPayload = { firebaseKey: name };
            updateAdmin(patchPayload).then(() => {
              router.push('/');
            });
          });
        }
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
        <h1>Admin Registration</h1>
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

        {/* Production SELECT  */}
        <FloatingLabel controlId="floatingSelect" label="Production or Company">
          <Form.Select
            aria-label="Production or Company"
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

        <Button type="submit">{obj.firebaseKey} Create Account</Button>

      </Form>
    </>
  );
}

CreateAdminForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

CreateAdminForm.defaultProps = {
  obj: initialState,
};
