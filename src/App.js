import './App.css';
import Body from './Components/Body';
import Form from './Components/Form';
import Activitylist from './Components/Activitylist';
import { UserContextProvider } from './Components/Logic/UserContextProvider';
// import Listcontainer from './Components/Listcontainer';

function App() {
  return (
    <UserContextProvider>
      <>

        <Body>
          <Form />
          <Activitylist />
        </Body>

      </>
    </UserContextProvider>
  );
}

export default App;
