import ErrorIcon from "@mui/icons-material/ErrorOutline";
import "./style.scss";

type CustomAreaProps = {
  value: string;
  heading: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  error?: any;
  required?: boolean;
};

const CustomTextArea = ({
  value,
  onChange,
  heading,
  disabled,
  placeholder,
  error,
  required,
}: CustomAreaProps) => (
  <div id="custom-text-area">
    <p className="text-area-title">
      {heading}

      {required ? <span className="required-icon">*</span> : null}
    </p>
    <textarea
      className="custom-text-area"
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={{ border: disabled ? "none" : "" }}
      placeholder={placeholder ? placeholder : ""}
    />
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
export default CustomTextArea;
