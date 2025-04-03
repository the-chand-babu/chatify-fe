import { IconButton } from "@mui/material";
import "./style.scss";

interface IconButtonProps {
  Icon: React.ElementType;
  onClick: () => void;
}

const CustomIconButton = ({ Icon, onClick }: IconButtonProps) => {
  return (
    <IconButton id="custom-icon-button" onClick={onClick}>
      {<Icon />}
    </IconButton>
  );
};

export default CustomIconButton;
