import { Context, createContext, useContext } from "react";

export const ScreenContext:Context<ScreenType> = createContext();
export type ScreenType = "mobile" | "tablet" | "desktop";
export const useScreen = () :ScreenType=> useContext(ScreenContext);