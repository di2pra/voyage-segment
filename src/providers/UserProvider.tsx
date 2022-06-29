import Cookies from 'js-cookie';
import { createContext, FC, useCallback, useEffect, useState } from "react";
import { IUser } from "../Types";

export const UserContext = createContext<{
  user: IUser | null;
  updateUser?: (user: IUser | null) => void;
  signUpUser?: (user: IUser) => void
}>({
  user: null
});

type IUserList = {
  [key: string]: IUser;
}

const UserProvider: FC = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [userList, setUserList] = useState<IUserList>();

  useEffect(() => {
    const storedValue = Cookies.get('userList');

    if (storedValue) {
      setUserList(JSON.parse(storedValue));
    }

  }, []);

  useEffect(() => {

    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
    }

  }, []);

  const updateUser = useCallback((user: IUser | null) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }, []);

  const signUpUser = useCallback((user: IUser) => {

    const storedValueRaw = Cookies.get('userList');
    let newValue = {};

    if (storedValueRaw) {
      newValue = JSON.parse(storedValueRaw);
    }

    newValue = { ...newValue, [user.email]: user }

    Cookies.set('userList', JSON.stringify(newValue));

    setUserList(newValue);

    updateUser(user);


  }, [updateUser]);



  useEffect(() => {

    if (user === null) {

    } else {

      window.analytics.identify(user.email, {
        firstName: user.firstName,
        lastName: user.lastName,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: user.phone
      });

    }

  }, [user]);

  console.log(userList);

  return (
    <UserContext.Provider value={{
      user: user,
      updateUser: updateUser,
      signUpUser: signUpUser
    }}>
      {children}
    </UserContext.Provider>
  );

}

export default UserProvider;