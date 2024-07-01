import React, { useState, useEffect } from 'react';
import { Instrument, OrderSide } from '../Enums';
import WSConnector from '../WSClient';

const Ticker: React.FC = () => {
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument>(Instrument.eur_usd);
  const [amount, setAmount] = useState<number>(0);
  const [price, setPrice] = useState<{ bid: string, offer: string }>({ bid: '', offer: '' });

  return (
    <div>
      <select onChange={(e) => setSelectedInstrument(Number(e.target.value) as Instrument)} value={selectedInstrument}>
        <option value={Instrument.eur_usd}>EUR/USD</option>
        <option value={Instrument.eur_rub}>EUR/RUB</option>
        <option value={Instrument.usd_rub}>USD/RUB</option>
      </select>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Amount" />
      <div>
        <span>Bid: {price.bid}</span>
        <span>Offer: {price.offer}</span>
      </div>
      <button>Buy</button>
      <button>Sell</button>
    </div>
  );
};

export default Ticker;
