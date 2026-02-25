import React, { useState, useEffect, useRef } from 'react'; // 1. Added useRef
import './App.css';

function App() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState('white'); // 2. NEW: Track the color state
  const prevPriceRef = useRef(0); // 3. NEW: The "Sticky Note" for old price

  useEffect(() => {
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.p);

      // 4. THE COMPARISON LOGIC
      if (newPrice > prevPriceRef.current) {
        setColor('#22c55e'); // Green for Up
      } else if (newPrice < prevPriceRef.current) {
        setColor('#ef4444'); // Red for Down
      }

      // 5. Update the Display
      setPrice(newPrice.toLocaleString(undefined, { minimumFractionDigits: 2 }));

      // 6. Save the current price as "Old" for the next update
      prevPriceRef.current = newPrice;
    };

    return () => socket.close();
  }, []);

  return (
    <div className="container">
      <div className="ticker-card">
        <h1>Bitcoin (BTC/USDT)</h1>
        {/* 7. We apply the 'color' variable directly to the style */}
        <div className="price-display" style={{ color: color }}>
          ${price}
        </div>
      </div>
    </div>
  );
}

export default App;