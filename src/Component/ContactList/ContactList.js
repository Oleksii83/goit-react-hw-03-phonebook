import React from 'react';
import s from './ContactList.module.css';

const FilterList = ({ contacts, onDeleteContact }) => (
  <ul className={s.container}>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={s.item}>
        {name}: {number}
        <button type="button" onClick={() => onDeleteContact(id)} className={s.btn}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default FilterList;
