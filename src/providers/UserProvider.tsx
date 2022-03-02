import { createContext, FC, useCallback, useEffect, useState } from "react";
import { IUser } from "../Types";

export const UserContext = createContext<{
  user: IUser | null;
  updateUser?: (user: IUser | null) => void
}>({
  user: null
});

const UserProvider: FC = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(null);


  useEffect(() => {

    const userString = localStorage.getItem('user');

    if(userString) {
      const user = JSON.parse(userString);
      setUser(user);
    }

  }, []);

  const updateUser = useCallback((user: IUser | null) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }, []);

  useEffect(() => {

    if(user === null) {

    } else {

      window.analytics.identify(user.username, {
        firstName: user.firstName,
        lastName: user.lastName,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: user.phone,
        username: user.username
      });
      
    }

  }, [user])

  return (
    <UserContext.Provider value={{
      user: user,
      updateUser: updateUser
    }}>
      {children}
    </UserContext.Provider>
  );

}

export default UserProvider;