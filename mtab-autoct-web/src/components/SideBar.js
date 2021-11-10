import React from "react";


class SideBar extends React.Component {
  state = { active: !this.props.open || true };

  render = () => {
    const { open } = this.props;
    const active = !open;

    return (
        <nav id = "sidebar" className = {active ? "active" : null}>
            <h2> How to Use Auto CT </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <div>
            DEMO here
            </div>
        </nav>
    );
  };
}

export default SideBar;
