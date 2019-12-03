import React from "react";
import Speakers from "./block/speakers";
//import { connect } from "react-redux";
//import { changeVolumes } from "../redux/action/index";
const SidePanel = props => {
  const { volume, header, togglePower, handleChangeVolume } = props;
  const style = props.power
    ? { background: "#0ad82c" }
    : { background: "#063d0f", boxShadow: "none" };

  return (
    <div className="side-panel">
      <div className="label">Drum Machine 3000</div>
      <div style={props.colorStyle} className="display" id="display">
        {header}
      </div>
      <div>
        <p>Power</p>
        <button style={style} onClick={togglePower}></button>
      </div>
      <div>
        <p>Volume</p>
        <input
          value={volume}
          type="range"
          min="0"
          max="100"
          step="1"
          onChange={handleChangeVolume}
        ></input>
      </div>
      <Speakers />
    </div>
  );
};

export default SidePanel;
