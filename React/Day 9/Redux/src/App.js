import { Fragment } from "react";
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(state=>state.Auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
