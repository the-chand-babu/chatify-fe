import { IconButton } from "@Components/Atoms";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  useGlobalDispatcher,
  useGlobalSelector,
} from "@Components/Providers/GlobalProvider/store";
import "./style.scss";

const Navbar = () => {
  const { theme } = useGlobalSelector();
  const { handleThemeChange } = useGlobalDispatcher();
  return (
    <div id="navbar-wrapper">
      <p className="logo">
        Cha<span className="t-content">t</span>ify
      </p>
      <div>
        <IconButton
          Icon={() =>
            theme === "light" ? (
              <WbSunnyIcon sx={{ color: "#fff" }} />
            ) : (
              <DarkModeIcon sx={{ color: "#fff" }} />
            )
          }
          onClick={() =>
            handleThemeChange(theme === "light" ? "dark" : "light")
          }
        />
      </div>
    </div>
  );
};
export default Navbar;
