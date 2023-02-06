import { useContext } from "react";
import { createContext } from "react";

const DropdownContext = createContext();
const DropdownProvider = (props) => {
  return <DropdownContext.Provider value={props}>{props.children}</DropdownContext.Provider>;
};

const useDropDown = () => {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined")
    throw new Error("useDropdown must be within DropdownProvider");
  return context;
};

export { useDropDown, DropdownProvider };
