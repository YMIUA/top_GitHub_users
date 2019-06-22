import React from 'react';
import Header from '../components/Header'
import User from '../components/User'
import { connect } from 'react-redux'
import getListUsers from './../actions/getListUsers'
import styled from 'styled-components'

const P = styled.p`
  text-align:center;
`

const App = ({getData, data}) => {
  if(data){
    return (
      <>
        <Header getData={getData}/>
        <div>
        {data.map((item, id) => (
          <User 
            key={item.id} 
            userInfo={item}
          />
        ))}
        </div>
      </>  
    );
  }
  else{
    return (
      <>
        <Header getData={getData}/>
        <P>Not found!</P>
      </>  
    );
  }
}

const mapStateToProps = store => {
  return {
    data: store.listUsers.usersData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: (inputCity) => dispatch(getListUsers(inputCity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
