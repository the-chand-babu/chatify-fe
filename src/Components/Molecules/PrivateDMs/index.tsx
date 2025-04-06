import { UserAvatar } from "@Components/Atoms";
import "./style.scss";

const PrivateDMs = () => {
  return (
    <div id="private-dms-main-container">
      <div className="chats-heading">
        <p className="heading-content">Private Chats</p>
      </div>
      <div className="user-chat-list-wrapper">
        <div className="user-chat">
          <UserAvatar firstName="Chand" />
          <p className="user-name">Chand Babu</p>
        </div>
      </div>
    </div>
  );
};

export default PrivateDMs;
