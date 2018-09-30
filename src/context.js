import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {

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
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;