import axios from 'axios'

export const GET_DATA = "GET_DATA";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const INVALIDATE_DATA = "INVALIDATE_DATA";
export const SET_USERS_DATA = "SET_USERS_DATA";

const requestData = () => {
  return {
    type: REQUEST_DATA,
    requestData: true
  }
}

const setData = data => {
  if(data.status === 200 ){
    return {
      type: RECEIVE_DATA,
      data: data.data
    }
  }
  else{
    alert(data.message)
  }
}

const setUserInfo = data => {
  return {
    type: SET_USERS_DATA,
    data
  }
}

const getListUsers = (inputCity) => dispatch => {
  dispatch(requestData())
  axios.get(`https://api.github.com/search/users?q=location:${inputCity}&per_page=10`)
  .then( data => dispatch(setData(data)))
  .then( data => {
    const { items } = data.data; 
    const promiseArray = items.map( item => axios.get(item.url));
    axios.all(promiseArray)
    .then(res => {
      const temp = res.map(i=>i.data)
      dispatch(setUserInfo(temp))
    })
    .catch(error => {
      alert(error)
    });
  })
  .catch(error => {
    alert(error)
  });
}

export default getListUsers;