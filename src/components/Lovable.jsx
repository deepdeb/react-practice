import { FiCreditCard, FiHome, FiPieChart, FiSettings, FiArrowUpRight, FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const chartData = {
  labels: ["2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
  datasets: [
    {
      data: [6200, 7500, 8200, 9500, 8400, 9100, 9800],
      borderColor: "#6366f1",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.2)");
        gradient.addColorStop(1, "rgba(99, 102, 241, 0)");
        return gradient;
      },
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "#6366f1",
      borderWidth: 3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { color: "#64748b", font: { size: 10 } } },
    y: { display: false },
  },
};

const tableData = [
                  { name: 'Achain', date: '12 Jun, 2024', price: '$14,923.33', status: 'Success', change: '-8.43%', pos: false },
                  { name: 'Cardano', date: '16 May, 2024', price: '$2,432.90', status: 'Success', change: '+2.34%', pos: true },
                  { name: 'Digibyte', date: '21 Feb, 2024', price: '$202.43', status: 'Success', change: '+16.84%', pos: true },
                  { name: 'Ethereum', date: '19 Dec, 2023', price: '$3,102.10', status: 'Pending', change: '-2.14%', pos: false },
                ]

function Lovable() {
  return (
    <div className='flex h-screen w-full bg-[#020617] text-slate-50 font-sans selection:bg-indigo-500/30'>
      
      {/* --- Sidebar --- */}
      <aside className='hidden md:flex w-24 flex-col items-center py-8 bg-slate-950/50 border-r border-white/5'>
        <div className='mb-12 text-2xl font-black bg-linear-to-br from-indigo-400 to-cyan-400 bg-clip-text text-transparent'>
          A.
        </div>
        
        <nav className='flex flex-col space-y-8'>
          <button className='p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-500/40 transition-transform active:scale-90'>
            <FiHome size={22} />
          </button>
          <button className='p-3 text-slate-500 hover:text-indigo-400 hover:bg-slate-900 rounded-2xl transition-all'>
            <FiPieChart size={22} />
          </button>
          <button className='p-3 text-slate-500 hover:text-indigo-400 hover:bg-slate-900 rounded-2xl transition-all'>
            <FiCreditCard size={22} />
          </button>
          <button className='p-3 text-slate-500 hover:text-indigo-400 hover:bg-slate-900 rounded-2xl transition-all'>
            <FiSettings size={22} />
          </button>
        </nav>
      </aside>

      {/* --- Main Content --- */}
      <main className='flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar'>
        
        {/* Header */}
        <header className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10'>
          <div>
            <h1 className='text-3xl font-bold tracking-tight'>Financial Overview</h1>
            <p className='text-slate-400 text-sm mt-1'>Welcome back, Pradeep Debnath.</p>
          </div>
          
          <div className='flex items-center gap-4 w-full md:w-auto'>
            <div className='relative flex-1 md:w-64'>
              <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-500' />
              <input 
                type="text" 
                placeholder="Search assets..." 
                className='w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-sm'
              />
            </div>
            <button className='relative p-2 text-slate-400 hover:text-white transition-colors'>
              <FiBell size={20} />
              <span className='absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#020617]'></span>
            </button>
            <div className='flex items-center gap-3 pl-4 border-l border-white/10'>
              <img src="https://i.pravatar.cc/40" alt="user" className='rounded-full ring-2 ring-indigo-500/20' />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8'>
          
          {/* Spending Card */}
          <div className='lg:col-span-4 p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl flex flex-col justify-between'>
            <div>
              <div className='flex justify-between items-start mb-6'>
                <span className='text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]'>Monthly Spending</span>
                <span className='bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1'>
                  +8.89% <FiArrowUpRight />
                </span>
              </div>
              <h2 className='text-4xl font-bold mb-8'>$6,960.92</h2>
              <div className='space-y-4'>
                <div className='flex justify-between items-center text-sm'>
                  <span className='text-slate-500'>24h Volume</span>
                  <span className='font-mono text-slate-200'>$84.42B</span>
                </div>
                <div className='flex justify-between items-center text-sm'>
                  <span className='text-slate-500'>Market Cap</span>
                  <span className='font-mono text-slate-200'>$804.42B</span>
                </div>
              </div>
            </div>
            <button className='w-full mt-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2'>
              <FiPlus /> Add New Asset
            </button>
          </div>

          {/* Chart Card */}
          <div className='lg:col-span-5 p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl'>
            <div className='flex justify-between items-center mb-8'>
              <h3 className='font-bold text-lg'>Portfolio Performance</h3>
              <select className='bg-transparent text-slate-400 text-xs font-bold outline-none cursor-pointer'>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className='h-55 w-full'>
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Credit Score Card */}
          <div className='lg:col-span-3 p-8 bg-linear-to-br from-indigo-600 to-violet-700 rounded-4xl text-center shadow-xl shadow-indigo-500/10 flex flex-col items-center justify-center'>
            <h3 className='text-indigo-100/70 text-xs font-bold uppercase tracking-widest mb-6'>Credit Health</h3>
            <div className='relative mb-6'>
              {/* Circular Progress Placeholder */}
              <div className='w-32 h-32 rounded-full border-10 border-white/10 flex items-center justify-center'>
                <div className='absolute inset-0 w-32 h-32 rounded-full border-10 border-white border-t-transparent -rotate-45'></div>
                <span className='text-3xl font-black text-white'>790</span>
              </div>
            </div>
            <p className='text-white font-bold text-lg'>Excellent</p>
            <p className='text-indigo-100/60 text-xs mt-1'>You're in the top 5% of users</p>
          </div>
        </div>

        {/* Payment History Table */}
        <section className='bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-4xl overflow-hidden'>
          <div className='p-8 border-b border-white/5 flex justify-between items-center'>
            <h3 className='text-xl font-bold'>Transaction History</h3>
            <button className='text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest'>
              Export CSV
            </button>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full text-left'>
              <thead>
                <tr className='text-slate-500 text-[10px] uppercase tracking-[0.2em]'>
                  <th className='px-8 py-4 font-semibold'>Asset Name</th>
                  <th className='px-8 py-4 font-semibold'>Date</th>
                  <th className='px-8 py-4 font-semibold'>Price</th>
                  <th className='px-8 py-4 font-semibold'>Status</th>
                  <th className='px-8 py-4 font-semibold text-right'>24h Change</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-white/5'>
                {tableData.map((item, i) => (
                  <tr key={i} className='group hover:bg-white/2 transition-colors cursor-pointer'>
                    <td className='px-8 py-5 font-bold text-slate-200'>{item.name}</td>
                    <td className='px-8 py-5 text-sm text-slate-400'>{item.date}</td>
                    <td className='px-8 py-5 font-mono text-sm'>{item.price}</td>
                    <td className='px-8 py-5'>
                      <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md border ${
                        item.status === 'Success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className={`px-8 py-5 text-right font-bold ${item.pos ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {item.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Lovable;