import UserFinder from './components/UserFinder';
import userscontext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <userscontext.Provider value={usersContext}>
      <UserFinder />
    </userscontext.Provider>
  );
}

export default App;