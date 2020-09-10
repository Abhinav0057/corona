import React from "react";
import Users from "./Users";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchbar: "",
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updatesearch = this.updatesearch.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ users: user }));
  }
  updatesearch = (event) => {
    this.setState({ searchbar: event.target.value });
  };

  render() {
    const { users, searchbar } = this.state;
    const filterdUsers = users.filter((user) => {
      return user.name.toLowerCase().indexOf(searchbar.toLowerCase()) !== -1;
    });

    if (!users.length) {
      return <h1>Loading....</h1>;
    } else {
      return (
        <div>
          <div>
            <input
              calssName="search-bar"
              type="text"
              value={searchbar}
              onChange={this.updatesearch}
            ></input>
            <button className="search-button">Search</button>
          </div>

          {filterdUsers.map((user) => (
            <Users
              key={user.name}
              name={user.name}
              email={user.email}
              website={user.website}
            />
          ))}
        </div>
      );
    }
  }
}
export default App;
