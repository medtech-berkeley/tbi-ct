import React from "react";


class SideBarToggle extends React.Component {
//   state = { active: !this.props.open || true };

  render = () => {
    // const { open } = true;
    // const active = open;

    const { open, toggleMenu } = this.props;
    const active = !open;

    return (
        <button id = "side-bar-toggle" 
        className = {active ? "active" : null}
        onClick= {toggleMenu}>
            Hide Instructions
        </button>
    );
  };
}

export default SideBarToggle;