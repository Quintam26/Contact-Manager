import React, { Component } from 'react';

class AddContact extends Component {

  state = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={name} className="form-control form-control-lg"placeholder="Enter Name" onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={email} className="form-control form-control-lg"placeholder="Enter Email" onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" value={phone} className="form-control form-control-lg"placeholder="Enter Phone" onChange={this.onChange}/>
            </div>
            <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;