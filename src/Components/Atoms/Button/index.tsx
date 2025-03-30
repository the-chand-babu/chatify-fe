import { Button } from "@mui/material";
import "./style.scss";

interface CustomButtonProps {
  label: string;
  variant?: "text" | "contained" | "outlined";
  onClick?: () => void;
  disabled?: boolean;
  className?: string | undefined;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant = "contained",
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <Button
      id="custom-btn"
      className={className ?? ""}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
