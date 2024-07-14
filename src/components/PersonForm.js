import { useState } from 'react';

const initialFormValues = {
  firstName: '',
  lastName: '',
};

export const PersonForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <h3>Person Form</h3>
      <label>
        First Name:
        <input
          onChange={handleInputChange}
          name="firstName"
          value={formValues.firstName}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          onChange={handleInputChange}
          name="lastName"
          value={formValues.lastName}
        />
      </label>
    </>
  );
};
