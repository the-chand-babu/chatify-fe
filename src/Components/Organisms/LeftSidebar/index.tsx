import { PrivateDMs } from "@Components/Molecules";
import "./style.scss";

const LeftSideBar = () => {
  return (
    <div id="left-side-bar">
      <div className="left-side-main-wrapper">
        <PrivateDMs />
      </div>
    </div>
  );
};

export default LeftSideBar;
