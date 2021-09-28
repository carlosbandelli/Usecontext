/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { AppContext } from './contexts/AppContext';
import { Div } from './components/Div';
// eslint-disable-next-line
function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  )

}

export default App;
