import React from 'react';

class UserChoise extends React.Component {
  render() {
    const { name, value, handler, type, label } = this.props;
    return (
      <label htmlFor={name} value={value} type={type} onChange={handler}>
        { label }
        <select name={name}>
          <option value="state">State</option>
          <option value="event">Event</option>
          <option value="props">Props</option>
          <option value="hooks">Hooks (Ainda não estudado)</option>
        </select>
      </label>
    )
  };
}

export default UserChoise;