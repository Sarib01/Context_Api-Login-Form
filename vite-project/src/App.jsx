import Login from './assets/comp/login';
import Profile from './assets/comp/profile';
import UserContextProvider from './assets/context/userContextProvider';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  )
}

export default App