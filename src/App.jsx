import React from "react";
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import './App.css';


export const App = () => {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}

        className="container"
      >
        
      <h1 className="main-title">Phonebook</h1>
      <ContactForm />

      <h2 className="section-title">Contacts</h2>
      <Filter />
      <ContactList />


              </div>
    );
  };