import React from 'react';

class UserInfo extends React.Component {
  render() {
    const { type, value, label, name, handler, checked } = this.props;

    return (
      <label htmlFor={name}>
        { label }
        <input type={type} name={name} value={value} onChange={handler} checked={checked} />
        <br />
      </label>
    );
  }
}

export default UserInfo;