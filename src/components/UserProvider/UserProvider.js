import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import UserContext from '../../contexts/UserContext';

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <UserContext.Provider value={{ currentUser }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;
