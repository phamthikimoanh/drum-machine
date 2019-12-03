import * as types from "../action/typeAction";

const Datas = (state = "", action) => {
  switch (action.type) {
    // case types.TOGGLE:
    //     return Object.assign({}, state, { power: action.power });
    case types.UPDATE_DISPLAY:
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default Datas;
