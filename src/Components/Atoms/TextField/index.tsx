import { ChangeEventHandler, ComponentType } from "react";
import { InputAdornment, TextField } from "@mui/material";
import ErrorIcon from "@mui/icons-material/ErrorOutline";
import "./style.scss";

type FieldDetails = {
  heading: string;
  placeholder?: string;
  error?: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: any;
  onBlur?: any;
  name?: string;
  disabled?: boolean;
  StartIcon?: ComponentType;
  EndIcon?: ComponentType;
  className?: string;
  type?: string;
  required?: boolean;
};

const CustomTextField: React.FC<FieldDetails> = ({
  heading,
  placeholder,
  value,
  onChange,
  error,
  name = "",
  disabled = false,
  StartIcon,
  EndIcon,
  className,
  type,
  required,
}) => {
  return (
    <div id="custom-textField-wrapper">
      {heading ? (
        <p className="text-field-heading">
          {heading}
          {required ? <span className="required-icon">*</span> : null}
        </p>
      ) : null}
      <div className="input-button-wrapper">
        <TextField
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          className={`${className} text-field-input-field`}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          slotProps={{
            input: {
              startAdornment: StartIcon && (
                <InputAdornment position="start">
                  <StartIcon />
                </InputAdornment>
              ),
              endAdornment: EndIcon && (
                <InputAdornment position="start">
                  <EndIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </div>
      {error && (
        <p className="error-message-helper-text">
          <span>
            <ErrorIcon sx={{ height: "16px", width: "16px" }} />
          </span>
          <span>{error?.message}</span>
        </p>
      )}
    </div>
  );
};
export default CustomTextField;
