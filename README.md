# 📈 Sentinel: Real-Time Bitcoin Price Tracker
A high-frequency financial data visualizer built to demonstrate real-time data ingestion and stream processing.

## 🌟 Overview
This project is a **Real-Time Data Dashboard** that connects directly to the Binance Exchange using WebSockets. It was developed to explore the intersection of **Site Reliability Engineering (SRE)** and **Data Analytics**, focusing on how live data streams can be visualized with minimal latency.

### Key Objectives:
* **High-Frequency Ingestion:** Consuming live trade data from the Binance `btcusdt@trade` stream.
* **Stream Processing:** Parsing raw JSON data and calculating price "deltas" (direction of change).
* **Dynamic Visualization:** Implementing a reactive UI that updates instantly without page refreshes.

---

## 🛠️ The Tech Stack
| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React.js | UI Library for building reactive components. |
| **Data Source** | Binance API | Public WebSocket stream for sub-second market data. |
| **Styling** | CSS3 | Custom fintech-inspired dark mode UI. |
| **Logic** | JavaScript (ES6) | Handling asynchronous data streams and state management. |

---

## 🧠 System Architecture & Logic
The application follows a **Producer-Consumer** model:

1. **The Source (Producer):** The Binance WebSocket server pushes a JSON "envelope" every time a trade occurs.
2. **The Processor:** The React `useEffect` hook maintains a persistent connection. 
3. **The Comparator:** Using the `useRef` hook, the system compares the incoming price with the previous value to determine market trend (Green for Bullish / Red for Bearish).
4. **The Display (Consumer):** The UI re-renders only the specific price component to ensure high performance (60fps).



---

## 📊 Data Analyst Insights
From a data perspective, this project implements:
* **Data Normalization:** Converting raw API strings into formatted currency floats.
* **Visual Encoding:** Using color to represent the "Delta" (direction of change), reducing cognitive load for the user.
* **Latency Management:** Utilizing WebSockets to avoid the overhead of traditional HTTP polling.

---

## 🚀 How to Run
1. **Clone the repository:**
   ```bash
   git clone [(https://github.com/jayesh-netizien/Real-time-Bitcoin-price-ticker.git)]
   cd price-ticker
   npm install
   npm start
