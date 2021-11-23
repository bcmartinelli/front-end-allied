import * as fromTypes from '../types/offers';

export const initialState = {
  loading: false,
  platforms: null,
  plans: null,
  hasError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fromTypes.FETCH_PLATFORMS:
    case fromTypes.FETCH_PLANS:
    case fromTypes.SUBSCRIBE:
      return {
        ...state,
        loading: true,
        hasError: false,
      }
    case fromTypes.FETCH_PLATFORMS_SUCCESS:
      return {
        ...state,
        platforms: action.payload,
        loading: false,
      }
    case fromTypes.FETCH_PLANS_SUCCESS:
      return {
        ...state,
        plans: action.payload,
        loading: false,
      }
    case fromTypes.FETCH_PLATFORMS_ERROR:
      return {
        ...state,
        platforms: [],
        hasError: true,
        loading: false,
      }
    case fromTypes.FETCH_PLANS_ERROR:
      return {
        ...state,
        plans: [],
        hasError: true,
        loading: false,
      }
    case fromTypes.SUBSCRIBE_ERROR:
    case fromTypes.SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
};

export default reducer;
