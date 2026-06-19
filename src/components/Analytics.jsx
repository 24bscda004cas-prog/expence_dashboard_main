import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function Analytics({ transactions }) {
  const expenseData = {};

  transactions
    .filter((item) => item.type === "Expense")
    .forEach((item) => {
      expenseData[item.category] =
        (expenseData[item.category] || 0) + item.amount;
    });

  const chartData = Object.keys(expenseData).map((key) => ({
    name: key,
    value: expenseData[key],
  }));

  const COLORS = [
    "#38bdf8",
    "#22c55e",
    "#f97316",
    "#eab308",
    "#ec4899",
    "#8b5cf6",
    "#ef4444",
    "#14b8a6",
    "#6366f1",
  ];

  return (
    <div className="analytics">
      <h2>Expense Analytics</h2>

      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={140}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          No Expense Data Available
        </p>
      )}
    </div>
  );
}