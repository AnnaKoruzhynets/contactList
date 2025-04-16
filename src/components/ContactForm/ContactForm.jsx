import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import './ContactForm.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const submit = e => {
    e.preventDefault();

    if (name.trim() && number.trim()) {
      dispatch(
        addContact({
          name: name,
          number: number,
          id: Date.now()
        })
      );
      setName('');
      setNumber('');
    };
  };

  return (
    <form onSubmit={submit} className='contactForm'>
      <div className='contactGroup'>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Введіть ім"я'
          className='input'
          required
        />

        <input
          type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder='Введіть номер телефону'
          className='input'
          required
        />

        <button type='submit' className='btn'>
          Додати контакт
        </button>

      </div>
    </form>
  );
};


