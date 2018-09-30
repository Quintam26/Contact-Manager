import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
      contacts: [
        {
          id: 1,
          name: 'James Doe',
          email: 'jamesd@gmail.com',
          phone: '85858'
          },
          {
          id: 2,
          name: 'Migs Sup',
          email: 'MS@gmail.com',
          phone: '855555558'
          },
          {
          id: 3,
          name: 'Mark Zoe',
          email: 'MZoe@gmail.com',
          phone: '899999'
          }
        ]
    }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact}/>
        ))}
      </div>
    )
  }
}

export default Contacts;