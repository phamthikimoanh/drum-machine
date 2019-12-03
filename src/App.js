import React, { useState } from "react";
import Pad from "./component/Pad";
import SidePanel from "./component/SidePanel";
import "./assest/css.css";
import { DATA } from "./api/json";
import { connect } from "react-redux";
import { isActive, changeVolume, updateDisplay } from "./redux/action/index";

const App = props => {
  const [currentSound, setCurrentSound] = useState("");
  const { power, volume } = props;
  const colorStyle = power
    ? { background: "#1ec8ce" }
    : { background: "#476b68" };
  const updateDisplay = id => {
    setCurrentSound(id);
  };

  function togglePower() {
    const message = "Welcome";
    console.log("state power nè ", isActive(power));
    props.isActive(props.power);
    if (power === false) {
      setCurrentSound(message);
      setTimeout(() => {
        setCurrentSound(currentSound);
      }, 1000);
    } else {
      return currentSound;
    }
  }

  const handleVolume = e => {
    const newVolume = e.target.value / 100;
    const message = "Volume: " + e.target.value;
    props.changeVolume(props.newVolume);
    if (volume !== null || volume !== undefined) {
      setCurrentSound(message);
    }
    console.log("đang change volum", newVolume);
  };

  const pads = DATA.map((pad, i) => {
    return (
      <Pad
        key={i}
        pad={pad}
        updateDisplay={updateDisplay}
        power={power}
        volume={volume}
        style={colorStyle}
      />
    );
  });
  return (
    <div className="container">
      <div className="machine">
        <div className="pads">{pads}</div>
        <SidePanel
          volume={volume}
          handleChangeVolume={handleVolume}
          header={currentSound}
          togglePower={togglePower}
          power={power}
          colorStyle={colorStyle}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    power: state.SidePanel.power,
    volume: state.SidePanel.volume
  };
}
const mapDispatchToProps = dispatch => {
  return {
    isActive: currentState => {
      dispatch(isActive(currentState));
    },
    changeVolume: newVolume => {
      dispatch(changeVolume(newVolume));
    },
    updateDisplay: dispatch(updateDisplay())

    // switchBank: (currentBank) => {
    //   dispatch(switchBank(currentBank));
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
