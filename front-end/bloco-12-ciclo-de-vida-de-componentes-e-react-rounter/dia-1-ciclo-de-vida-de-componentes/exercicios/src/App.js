import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      person: [],
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    this.setState({
      person: data.results,
      loading: false,
    })
  }

  shouldComponentUpdate(_nextProps, nextStage) {
    if (nextStage.person[0].dob.age > 50) {
      console.log(nextStage.person[0].dob.age);
      return false;
    }
    return true;
  }

  userInfo() {
    const { person } = this.state;
    return (
      <div>
        { person.map((currentPerson) => (
          <div>
            <h1>{`Nome: ${currentPerson.name.first} ${currentPerson.name.last}`}</h1>
            <p>Email: {currentPerson.email}</p>
            <p>Idade: {currentPerson.dob.age}</p>
            <img src={currentPerson.picture.thumbnail} alt={currentPerson.name} />
          </div>
        )) }
      </div>
    )
  }
  
  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? <h1>Loading...</h1> : this.userInfo()}
      </div>
    )
  }
}

export default App;
