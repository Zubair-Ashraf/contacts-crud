import React, { Fragment } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export const ContactList = (props) => {
  const { contacts, isLoading, onReset } = props || {};

  const { id: contactId } = useParams() || {};

  const navigate = useNavigate();

  if (isLoading) return <span>Loading Please Wait... </span>;

  return (
    <Fragment>
      <h4 className='my-3'>Contacts List</h4>
      <div>
        <div className='list-group'>
          {contacts?.map(({ id, firstName, lastName }, index) => (
            <Link
              to={`/contacts/${id}`}
              key={`contact-${index}`}
              className='d-flex'
            >
              <button
                className={`list-group-item list-group-item-action ${
                  id === contactId && 'active'
                }`}
              >
                {firstName + ' ' + lastName}
              </button>
              <button className='btn btn-sm btn-danger'>X</button>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ContactList;
