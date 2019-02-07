import * as AT from './clientsTypes';

export const getClientList = () => ({
  type: AT.GET_CLIENT_LIST,
});

export const getClientListSuccess = list => ({
  type: AT.GET_CLIENT_LIST_SUCCESS,
  payload: {
    list,
  },
});

export const getClientListFailed = error => ({
  type: AT.GET_CLIENT_LIST_SUCCESS,
  payload: {
    error,
  },
});

export const setActiveClient = client => ({
  type: AT.SET_ACTIVE_CLIENT,
  payload: {
    client,
  },
});

export const filterClientList = (text) => ({
  type: AT.FILTER_CLIENT_LIST,
  payload: {
    text,
  }
});

export function getClients() {
  return (dispatch) => {
    dispatch(getClientList());
    fetch("http://localhost:3000/static/clients.json")
    .then(res => res.json())
    .then(
      data => {
        console.log(data);
        setTimeout(() => {dispatch(getClientListSuccess(data))}, 1000);
      }
    )
  }
};
