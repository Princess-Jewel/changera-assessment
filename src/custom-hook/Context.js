import React, { useContext } from "react";
import useMediaQuery from "./useMediaQuery";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const smallDevice = useMediaQuery("(max-width: 600px)");
  const mediumDevice = useMediaQuery("(max-width: 992px)");
  const largeDevice = useMediaQuery("(max-width: 1400px)");

  return (
    <AppContext.Provider
      value={{
        mediumDevice,
        largeDevice,
        smallDevice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;
