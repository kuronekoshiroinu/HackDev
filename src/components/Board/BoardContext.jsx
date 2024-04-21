import { createContext } from "react";

const BoardContext = createContext(null);   // card orientations
const CardContext = createContext(null);    // restart flipping cards
export {BoardContext, CardContext}