import { useContext } from "react";

export const P = () => {
  const theContext = useContext(GlobalContext)
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1}))}
  >
   {body}
  </p>
}