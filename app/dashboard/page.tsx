"use client";

import Navbar from "../components/Navbar";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface dashboardData {
  title: string;
  data: number;
  bgColor: string;
}

const Dashboard = () => {
  const users: dashboardData[] = [
    { title: "Total Users", data: 5432, bgColor: "bg-primary" },
    { title: "Active Users Today", data: 1234, bgColor: "bg-accent" },
    { title: "New Sign Ups", data: 145, bgColor: "bg-warning" },
    { title: "Pending Requests", data: 12, bgColor: "bg-error" },
  ];

  // Line Chart - User Growth
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const lineChartData = {
    labels,
    datasets: [
      {
        label: "User Growth",
        data: [65, 59, 80, 81, 56, 55, 120],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Bar Chart - Active Users per Day
  const barChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Users",
        data: [300, 400, 500, 700, 800, 650, 900],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart - User Roles
  const pieChartData = {
    labels: ["Admins", "Moderators", "Users"],
    datasets: [
      {
        data: [10, 20, 70],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <Navbar />

      {/* User Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {users.map((user, index) => (
          <div
            key={index}
            className={`p-5 md:p-6 rounded-lg shadow-md ${user.bgColor} text-white`}
          >
            <h2 className="text-lg md:text-xl font-semibold">{user.title}</h2>
            <p className="text-2xl md:text-3xl font-bold mt-2">{user.data}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Line Chart */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-4">User Growth</h2>
          <Line data={lineChartData} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Active Users Per Day
          </h2>
          <Bar data={barChartData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            User Roles Distribution
          </h2>
          <Pie data={pieChartData} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
