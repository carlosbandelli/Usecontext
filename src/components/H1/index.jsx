/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line */
import { useContext } from "react";
import { GlobalContext } from '../../contexts/AppContext';

export const H1 = () => {
  const theContext = useContext(GlobalContext)
  const {

  } = theContext;
  return (
    <h1>

    </h1>
  )
}
