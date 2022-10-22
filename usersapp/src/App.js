import React from 'react';
import UsersContainer from './users/containerUsers';
import CreateUser from './users/createUser';



class App extends React.Component{
  state={
    usersData: [ ]
  }

  componentDidMount=()=>{
    const url="http://localhost:5000/api";
    fetch(url)
    .then((result)=>result.json())
    .then((result)=>{
      this.setState({usersData:result})
    })
  }

addUser=(user)=>{
  this.setState({usersData:[...this.state.usersData,user]})
}



  removeUser=(index)=>{
    const {usersData} = this.state;
    const data = usersData.filter((value,i)=>{
      return index!==i;
    })
    this.setState({usersData:data})
  }
render() {
  const {usersData} = this.state
  return (
    <div  className='container'>
    <UsersContainer users={usersData} removeUser={this.removeUser}/>
    < CreateUser addUser={this.addUser}/>
    </div>
  )
}
}

export default App;