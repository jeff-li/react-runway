import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import UserContext from '../../contexts/UserContext';

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;
