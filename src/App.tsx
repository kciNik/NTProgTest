import React from 'react';
import WSConnector from './WSClient';
import Ticker from './Models/Ticker';
import OrderList from './Models/OrderList';

const wsClient = new WSConnector();
wsClient.connect();

const App: React.FC = () => {
  return (
    <div>
      <Ticker />
      <OrderList />
    </div>
  );
};

export default App;
