import React from 'react';
import { FiCreditCard, FiHome, FiPieChart, FiSettings } from 'react-icons/fi'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import './Lovable.css';

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm"],
  datasets: [
    {
      label: "BTC",
      data: [6000, 7000, 9000, 9500, 8420, 8420, 8420],
      borderColor: "#00ff99",
      backgroundColor: "transparent",
      tension: 0.3,
    },
    {
      label: "ETH",
      data: [6000, 6000, 6000, 7000, 2980, 2980, 2980],
      borderColor: "#ffff00",
      backgroundColor: "transparent",
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "#aaa",
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#888" },
      grid: { color: "#222" },
    },
    y: {
      ticks: { color: "#888" },
      grid: { color: "#222" },
    },
  },
};

function Lovable() {
  return (
    <div className="lovable-dashboard">
      <aside className="lovable-sidebar">
        <div className="lovable-logo">Analytica</div>
        <nav className="lovable-nav">
          <button className="lovable-nav-icon lovable-active">
            <FiHome size={20} />
          </button>
          <button className="lovable-nav-icon">
            <FiPieChart size={20} />
          </button>
          <button className="lovable-nav-icon">
            <FiCreditCard size={20} />
          </button>
          <button className="lovable-nav-icon">
            <FiSettings size={20} />
          </button>
        </nav>
      </aside>

      <main className="lovable-main">
        <header className="lovable-header">
          <div>
            <h2>Welcome back, Pradeep</h2>
            <p>Here's your performance and analytics.</p>
          </div>
          <div className="lovable-header-right">
            <input type="text" value="Mar 2025 - Jul 2025" readOnly />
            <button className="lovable-add-coin">Add new coin</button>
            <div className="lovable-user">
              <img src="https://i.pravatar.cc/40" alt="user" />
              <div className='lovable-name-email'>
                <span>Pradeep Debnath</span>
                <small>debnath.pradeep619@gmail.com</small>
              </div>
            </div>
          </div>
        </header>

        <section className="lovable-stats">
          <div className="lovable-spending">
            <h3>THIS MONTH'S SPENDING</h3>
            <h1>$6,960.92</h1>
            <p className="lovable-positive">+ 8.89%</p>
            <ul>
              <li><strong>VOLUME (24H):</strong> $84.42B</li>
              <li><strong>MARKET CAP:</strong> $804.42B</li>
              <li><strong>AVG. MONTHLY GROWING:</strong> $804.42B</li>
            </ul>
            <button className="lovable-download">Download Report</button>
          </div>

          <div className="lovable-chart">
            <h3>Active credit</h3>
            <div className="lovable-line-chart-container">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="lovable-credit-score">
            <h3>Your credit score</h3>
            <div className="lovable-score-circle">90%</div>
            <h2>790</h2>
            <p>Your credit score is amazing</p>
          </div>
        </section>

        <section className="lovable-payment-history">
          <h3>Payment History</h3>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>DATE</th>
                <th>PRICE</th>
                <th>STATUS</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Achain</td>
                <td>12 Jun, 2024</td>
                <td>$14,923.33</td>
                <td>Successfully</td>
                <td className="lovable-negative">-8.43%</td>
              </tr>
              <tr>
                <td>Cardano</td>
                <td>16 May, 2024</td>
                <td>$2,432.90</td>
                <td>Successfully</td>
                <td className="lovable-positive">+2.34%</td>
              </tr>
              <tr>
                <td>Digibyte</td>
                <td>21 Feb, 2024</td>
                <td>$202.43</td>
                <td>Successfully</td>
                <td className="lovable-positive">+16.84%</td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td>19 Dec, 2023</td>
                <td>$---</td>
                <td>--- </td>
                <td className="lovable-negative">-34.34%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Lovable;