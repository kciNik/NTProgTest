import React, { useState, useEffect } from 'react';
import { OrderStatus, OrderSide, Instrument } from '../Enums';
import WSConnector from '../WSClient';

interface Order {
  orderId: string;
  createdAt: Date;
  updatedAt: Date;
  status: OrderStatus;
  side: OrderSide;
  price: string;
  amount: string;
  instrument: Instrument;
}

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Status</th>
          <th>Side</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.orderId}>
            <td>{order.orderId}</td>
            <td>{order.createdAt.toISOString()}</td>
            <td>{order.updatedAt.toISOString()}</td>
            <td>{OrderStatus[order.status]}</td>
            <td>{OrderSide[order.side]}</td>
            <td>{order.price}</td>
            <td>{order.amount}</td>
            <td>{Instrument[order.instrument]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
