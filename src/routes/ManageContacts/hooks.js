import { useEffect, useState } from 'react';

export const useData = () => {
  const [contacts, setContacts] = useState([]);

  const [contact, setContact] = useState({});

  useEffect(() => onFetchContacts(), []);

  const onFetchContacts = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    setContacts(contacts);
  };

  const onFetchContact = (id) => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    const contact = contacts.find(({ id: contactId }) => id == contactId);

    setContact(contact);
  };

  const onCreateContact = (data) => {
    let contacts = JSON.parse(localStorage.getItem('contacts'));

    const id = Math.random().toString(16).slice(2);

    if (contacts != null) contacts = [...contacts, { id, ...data }];
    else contacts = [{ id, ...data }];

    localStorage.setItem('contacts', JSON.stringify(contacts));

    setContacts(JSON.parse(localStorage.getItem('contacts')));
  };

  const onUpdateContact = (id, data) => {
    let contacts = JSON.parse(localStorage.getItem('contacts'));

    const index = contacts.findIndex(({ id: contactId }) => id == contactId);

    if (index != -1) {
      contacts[index] = data;

      localStorage.setItem('contacts', JSON.stringify(contacts));

      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  };

  const onDeleteContact = (id) => {
    let contacts = JSON.parse(localStorage.getItem('contacts'));

    contacts = contacts.filter(({ id: contactId }) => id != contactId);

    localStorage.setItem('contacts', JSON.stringify(contacts));

    setContacts(contacts);
  };

  return {
    contacts,
    contact,
    onFetchContact,
    onCreateContact,
    onUpdateContact,
    onDeleteContact,
  };
};

export * from 'hooks';
