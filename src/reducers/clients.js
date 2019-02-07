import * as AT from '../actions/clientsTypes';

const initialState = {
  elements: [],
  filteredElements: [],
  activeClient: null,
  isLoading: false,
  error: null,
};

const checkValueInObject = (obj, value) => {
  let flag = false;
  Object.keys(obj).forEach(key => {
    if (obj[key] && value) {
      Object.keys(obj[key]).forEach(
        subkey => {
          if (
            obj[key][subkey].toLowerCase().indexOf(
              value.toLowerCase()
            ) !== -1
          ) {
            flag = true;
            return flag;
          }
        })
    }
  });
  return flag;
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.GET_CLIENT_LIST:
      return ({
        ...state,
        isLoading: true,
      });
    case AT.GET_CLIENT_LIST_SUCCESS:
      return ({
        ...state,
        elements: action.payload.list,
        filteredElements: action.payload.list,
        isLoading: false,
      });
    case AT.GET_CLIENT_LIST_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.payload.error,
      });
    case AT.SET_ACTIVE_CLIENT:
      return ({
        ...state,
        activeClient: action.payload.client,
      });

    case AT.FILTER_CLIENT_LIST:
      const text = action.payload.text;

      if (!text || !text.length) {
        return ({
          ...state,
          filteredElements: [...state.elements],
        });
      }
      return ({
        ...state,
        filteredElements: [...state.elements].filter(
          item => checkValueInObject(item, text)
        )
      });
    default:
      return state;
  }
};

export { clientsReducer };
