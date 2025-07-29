import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


const Contacts = () => {

  const { language, translation } = useContext(GlobalContext);

  const contacts = translation[language].contacts;

  return (
    <section id='contacts'>
      <div className="title" data-aos="zoom-in">
        {contacts.title}
      </div>
      <div className='list'>
        {contacts.contactsList.map((value, key) => (
          <div key={key} className='item' data-aos="flip-left">
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contacts