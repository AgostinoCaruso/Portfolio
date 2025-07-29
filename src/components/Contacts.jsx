import React, { useState } from 'react'

const Contacts = () => {

  const [listContacts] = useState([
    {
      title: "Email",
      value: "agostinocaruso321@gmail.com"
    },
    {
      title: "Phone",
      value: "+39 3665036464"
    },
  ])
  return (
    <section id='contacts'>
      <div className="title" data-aos="zoom-in">
        These are my contacts
      </div>
      <div className='list'>
        {listContacts.map((value, key) => (
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