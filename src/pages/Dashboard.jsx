import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Analytics from "../components/Analytics";

import {
  getTransactions,
  saveTransactions,
} from "../utils/localStorage";

export default function Dashboard() {
  const [t, setT] = useState([]);

  useEffect(() => {
    setT(getTransactions());
  }, []);

  useEffect(() => {
    saveTransactions(t);
  }, [t]);

  const addTransaction = (data) => {
    setT([
      ...t,
      {
        id: Date.now(),
        ...data,
      },
    ]);
  };

  const deleteTransaction = (id) => {
    setT(
      t.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="container">
      <Sidebar />

      <div className="content">
        <DashboardCards transactions={t} />

        <TransactionForm
          addTransaction={addTransaction}
        />

        {/* Analytics Graph */}
        <Analytics transactions={t} />

        <TransactionList
          transactions={t}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}