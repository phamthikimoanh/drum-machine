import * as types from "./typeAction";
//import data from "../../api/data";
// const receiveDatas = datas => ({
//   type: types.RECEIVE_DATAS,
//   datas
// });

// export const getAllDatas = () => dispatch => {
//   data.getDatas(datas => {
//     dispatch(receiveDatas(datas));
//   });
// };

export const isActive = currentState => ({
  type: types.ACTIVE,
  power: !currentState
});
export const changeVolume = newVolume => ({
  type: types.CHANGE_VOLUME,
  volume: newVolume
});
export const updateDisplay = () => ({
  type: types.UPDATE_DISPLAY
});
