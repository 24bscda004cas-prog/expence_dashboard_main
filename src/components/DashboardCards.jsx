export default function DashboardCards({ transactions }) {
  const i = transactions
    .filter((t) => t.type === "Income")
    .reduce((a, b) => a + b.amount, 0);
  const e = transactions
    .filter((t) => t.type === "Expense")
    .reduce((a, b) => a + b.amount, 0);
  return (
    <div className="cards">
      <div className="card">
        <h3>Income</h3>
        <p>{i}</p>
      </div>
      <div className="card">
        <h3>Expense</h3>
        <p>{e}</p>
      </div>
      <div className="card">
        <h3>Balance</h3>
        <p>{i - e}</p>
      </div>
      <div className="card">
        <h3>Transactions</h3>
        <p>{transactions.length}</p>
      </div>
    </div>
  );
}
