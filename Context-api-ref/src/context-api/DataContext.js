import React from 'react';
const DataContext=React.createContext()
const DataProvider=DataContext.Provider
const DataConsumer=DataContext.Consumer

export default DataContext
export{DataProvider,DataConsumer}