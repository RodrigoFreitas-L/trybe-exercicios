import React from 'react';

class AboutUser extends React.Component {
  render() {
    const { value, handler, name } = this.props;

    return (
      <label htmlFor="aboutUser"> Conte-nos um pouco sobre você: 
        <br />
        <textarea cols="30" rows="10" value={value} name={name} onChange={handler}></textarea>
        <br />
      </label>
    );
  }
}

export default AboutUser;