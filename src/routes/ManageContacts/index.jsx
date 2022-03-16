import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { useData, useForm } from './hooks';
import { INITIAL_CONTACT } from './constants';

export const ManageContacts = () => {
  const { id } = useParams() || {};

  const {
    contacts,
    contact,
    onFetchContact,
    onCreateContact,
    onUpdateContact,
    onDeleteContact,
  } = useData();

  const { values, reset, handleValueChange } = useForm(INITIAL_CONTACT);

  useEffect(() => {
    if (id) onFetchContact(id);
  }, [id]);

  useEffect(() => contact && reset(contact), [contact]);

  const handleReset = () => reset(INITIAL_CONTACT);

  return (
    <Fragment>
      <div className='container'>
        <ContactList contacts={contacts || []} onReset={handleReset} />
        <ContactForm
          initialValues={values}
          reset={reset}
          onValueChange={handleValueChange}
          onCreate={() => onCreateContact(values)}
          onUpdate={(id) => onUpdateContact(id, values)}
          onDelete={(id) => onDeleteContact(id)}
        />
      </div>
    </Fragment>
  );
};

export default ManageContacts;
