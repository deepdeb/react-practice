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
    // root container replicates body styles: font-family, bg and text color
    <div
      className="lovable-dashboard flex h-screen"
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: '#0a0a0a',
        color: '#ffffff'
      }}
    >
      {/* Sidebar */}
      <aside
        className="lovable-sidebar flex flex-col items-center"
        style={{
          width: '100px',
          backgroundColor: '#121212',
          padding: '1rem 4rem'
        }}
      >
        <div
          className="lovable-logo mb-8"
          style={{ color: '#90ee90', fontSize: '24px' }}
        >
          Analytica
        </div>

        <nav className="lovable-nav flex flex-col">
          <button
            className="lovable-nav-icon mb-4 inline-flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#14ff00', // active
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            aria-label="home"
          >
            <FiHome size={20} color="#000" />
          </button>

          <button
            className="lovable-nav-icon mb-4 inline-flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#2b2b2b',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            aria-label="chart"
          >
            <FiPieChart size={20} color="#fff" />
          </button>

          <button
            className="lovable-nav-icon mb-4 inline-flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#2b2b2b',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            aria-label="card"
          >
            <FiCreditCard size={20} color="#fff" />
          </button>

          <button
            className="lovable-nav-icon inline-flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#2b2b2b',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            aria-label="settings"
          >
            <FiSettings size={20} color="#fff" />
          </button>
        </nav>
      </aside>

      {/* Main */}
      <main
        className="lovable-main flex-1 overflow-y-auto"
        style={{
          padding: '2rem',
          background: 'linear-gradient(to bottom, #000000, #0a0a0a)'
        }}
      >
        <header className="lovable-header flex justify-between items-center mb-8">
          <div>
            <h2 className="m-0">Welcome back, Pradeep</h2>
            <p className="m-0">Here's your performance and analytics.</p>
          </div>

          <div
            className="lovable-header-right flex items-center"
            style={{ gap: '1rem' }}
          >
            <input
              type="text"
              value="Mar 2025 - Jul 2025"
              readOnly
              className="text-center"
              style={{
                background: '#1e1e1e',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '8px',
              }}
            />
            <button
              className="lovable-add-coin font-bold"
              style={{
                background: '#14ff00',
                color: 'black',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Add new coin
            </button>

            <div
              className="lovable-user flex items-center"
              style={{
                gap: '0.5rem',
                backgroundColor: '#1a1a1a',
                padding: '0.5rem',
                borderRadius: '8px'
              }}
            >
              <img
                src="https://i.pravatar.cc/40"
                alt="user"
                style={{ borderRadius: '50%' }}
              />
              <div className="lovable-name-email flex flex-col" style={{lineHeight:1}}>
                <span>Pradeep Debnath</span>
                <small style={{ color: '#ccc' }}>debnath.pradeep619@gmail.com</small>
              </div>
            </div>
          </div>
        </header>

        <section className="lovable-stats flex gap-6 mb-8">
          <div
            className="lovable-spending flex-1"
            style={{
              backgroundColor: '#1e1e1e',
              padding: '1.5rem',
              borderRadius: '12px'
            }}
          >
            <h3 className="m-0">THIS MONTH'S SPENDING</h3>
            <h1 className="mt-2 mb-2" style={{ fontSize: '2rem' }}>$6,960.92</h1>
            <p className="lovable-positive" style={{ color: '#14ff00', margin: 0, fontWeight:500 }}>+ 8.89%</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', lineHeight: 1.6 }}>
              <li><strong>VOLUME (24H):</strong> $84.42B</li>
              <li><strong>MARKET CAP:</strong> $804.42B</li>
              <li><strong>AVG. MONTHLY GROWING:</strong> $804.42B</li>
            </ul>
            <button
              className="lovable-download"
              style={{
                background: '#14ff00',
                color: 'black',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Download Report
            </button>
          </div>

          <div
            className="lovable-chart flex-1"
            style={{
              backgroundColor: '#1e1e1e',
              padding: '1.5rem',
              borderRadius: '12px'
            }}
          >
            <h3 className="m-0">Active credit</h3>
            <div
              className="lovable-line-chart-container mt-8 flex items-center justify-center"
              style={{
                height: '200px',
                width: '100%',
                position: 'relative',
                background: '#111',
                borderRadius: '8px',
                color: '#888',
                marginTop: '2rem'
              }}
            >
              <div style={{ width: '100%', height: '100%' }}>
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>

          <div
            className="lovable-credit-score flex-1 text-center"
            style={{
              backgroundColor: '#1e1e1e',
              padding: '1.5rem',
              borderRadius: '12px'
            }}
          >
            <h3 className="m-0">Your credit score</h3>
            <div
              className="lovable-score-circle"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'conic-gradient(#14ff00 90%, #333 0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '2rem auto'
              }}
            >
              90%
            </div>
            <h2 className="m-0">790</h2>
            <p className="m-0">Your credit score is amazing</p>
          </div>
        </section>

        <section
          className="lovable-payment-history"
          style={{
            backgroundColor: '#1e1e1e',
            padding: '1.5rem',
            borderRadius: '12px'
          }}
        >
          <h3 className="m-0">Payment History</h3>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.9rem' }}>
            <thead>
              <tr>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #333' }}>NAME</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #333' }}>DATE</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #333' }}>PRICE</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #333' }}>STATUS</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #333' }}>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>Achain</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>12 Jun, 2024</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>$14,923.33</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>Successfully</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333', color: '#ff3b3b' }}>-8.43%</td>
              </tr>

              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>Cardano</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>16 May, 2024</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>$2,432.90</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>Successfully</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333', color: '#14ff00' }}>+2.34%</td>
              </tr>

              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>Digibyte</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>21 Feb, 2024</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>$202.43</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>Successfully</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333', color: '#14ff00' }}>+16.84%</td>
              </tr>

              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>Ethereum</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>19 Dec, 2023</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>$---</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333' }}>--- </td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #333', color: '#ff3b3b' }}>-34.34%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Lovable;
