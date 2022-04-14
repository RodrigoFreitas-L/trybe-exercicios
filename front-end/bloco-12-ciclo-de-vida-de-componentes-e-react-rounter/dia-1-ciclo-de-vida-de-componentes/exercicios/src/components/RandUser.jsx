import React from 'react';

class RandUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foto: '',
      nome: '',
      email: '',
      idade: 0,
    }
  }

  async componentDidMount() {
    await this.fetchUser();
  }

  async fetchUser() {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    console.log(data.results);
  }

  render() {
    return(
      <div>Ayaya</div>
    );
  }
}

export default RandUser;