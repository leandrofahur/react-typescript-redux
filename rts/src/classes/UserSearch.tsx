import { Component } from 'react';
import { isRegularExpressionLiteral } from 'typescript';

interface User {
  name: string;
  age: number;
}

interface userSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<userSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const user = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user });
  };

  render() {
    const { user, name } = this.state;
    return (
      <div>
        User Search
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {this.state.user?.name}
          {this.state.user?.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
