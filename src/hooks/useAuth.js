import { useContext } from "react";
import { AuthContext } from "../utils/contexts";

// Extracting context info and returns
export default () => useContext(AuthContext);
