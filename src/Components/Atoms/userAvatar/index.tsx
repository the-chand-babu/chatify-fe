import { Avatar } from "@mui/material";
import { getColor } from "@Components/Utils/getColor";
import "./style.scss";

interface UserAvatarProps {
  userImage?: string;
  firstName: string;
  lastName?: string;
  userStatus?: "Online" | "Offline" | "Away";
}

const UserAvatar = ({
  userImage,
  firstName = "John",
  lastName = "Doe",
  userStatus = "Online",
}: UserAvatarProps) => {
  return (
    <div id="user-avatar-wrapper">
      <Avatar
        className="avatar"
        src={userImage}
        style={{ backgroundColor: getColor(firstName) }}
      >
        {firstName[0] + lastName?.[0]}
      </Avatar>
      {userStatus !== "Offline" ? (
        <div
          className="user-status"
          style={{
            backgroundColor:
              userStatus === "Online"
                ? "#409f40"
                : userStatus === "Away"
                ? "#f0ad4e"
                : "transparent",
          }}
        ></div>
      ) : null}
    </div>
  );
};

export default UserAvatar;
