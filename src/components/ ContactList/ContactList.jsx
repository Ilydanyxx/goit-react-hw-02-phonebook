import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={nanoid()}>
            <span>{`${contact.name}: ${contact.number}`}</span>
            <button type="button" onClick={() => deleteContact(contact.id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
