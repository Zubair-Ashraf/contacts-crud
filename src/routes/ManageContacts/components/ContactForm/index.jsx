import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ContactForm = (props) => {
  const { initialValues, onValueChange, onCreate, onUpdate } = props || {};

  const { id: contactId } = useParams() || {};

  const [values, setValues] = useState(initialValues || {});

  useEffect(() => setValues(initialValues || {}), [initialValues]);

  const handleValueChange = (event) => {
    const { name, value } = event.target || {};

    setValues({ ...values, [name]: value });

    onValueChange(event);
  };

  const handleSubmit = () => {
    if (contactId) onUpdate(contactId);
    else onCreate();
  };

  return (
    <Fragment>
      <div className='row g-3 mt-3'>
        <div className='col-12'>
          <h4>Contacts Form</h4>
        </div>
        <div className='col-6'>
          <label className='form-label'>First Name</label>
          <input
            name='firstName'
            value={values.firstName}
            onChange={handleValueChange}
            className='form-control'
          />
        </div>
        <div className='col-6'>
          <label className='form-label'>Last Name</label>
          <input
            name='lastName'
            value={values.lastName}
            onChange={handleValueChange}
            className='form-control'
          />
        </div>
        <div className='col-6'>
          <label className='form-label'>Designation</label>
          <input
            name='designation'
            value={values.designation}
            onChange={handleValueChange}
            className='form-control'
          />
        </div>
        <div className='col-6'>
          <label className='form-label'>Email</label>
          <input
            name='email'
            value={values.email}
            onChange={handleValueChange}
            className='form-control'
          />
        </div>
        <div className='col-6'>
          <label className='form-label'>Web Url</label>
          <input
            name='webUrl'
            value={values.webUrl}
            onChange={handleValueChange}
            className='form-control'
          />
        </div>
        <div className='col-6'>
          <label className='form-label'>Avatar Url</label>
          <input
            name='avatarUrl'
            value={values.avatarUrl}
            onChange={handleValueChange}
            className='form-control'
          />
        </div>
        <div className='col-6'>
          <button
            type='button'
            className='btn btn-sm btn-primary'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactForm;
