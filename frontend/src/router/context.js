import { createContext, useContext } from "react";

export const RouterContext = createContext({
  path: "/",
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}
