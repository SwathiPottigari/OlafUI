import React from 'react';


export const ShoppingContext = React.createContext({
    greeting: "hello world!",
    toggleGreeting: () => {},
  });