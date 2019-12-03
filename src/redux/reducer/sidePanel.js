//import { VisibilityPower } from "../actions";
import * as types from "../action/typeAction";
const initState = {
  power: true,
  currentSound: "",
  volume: 50,
  loading: false
};
const visibilityFilter = (state = initState, action) => {
  switch (action.type) {
    case types.ACTIVE:
      return Object.assign({}, state, { power: action.power });

    case types.CHANGE_VOLUME:
      return Object.assign({}, state, {volume: action.volume});
    default:
      return state;
  }
};
export default visibilityFilter;
