import { useState } from "react";

export default function TransactionForm({ addTransaction }) {
  const [f, s] = useState({
    type: "Income",
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      ...f,
      amount: Number(f.amount),
    });

    s({
      type: "Income",
      amount: "",
      category: "",
      description: "",
      date: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Transaction Type */}
      <select
        value={f.type}
        onChange={(e) =>
          s({
            ...f,
            type: e.target.value,
            category: "",
          })
        }
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      {/* Amount */}
      <input
        type="number"
        placeholder="Enter Amount"
        value={f.amount}
        onChange={(e) =>
          s({
            ...f,
            amount: e.target.value,
          })
        }
        required
      />

      {/* Category Dropdown */}
      <select
        value={f.category}
        onChange={(e) =>
          s({
            ...f,
            category: e.target.value,
          })
        }
        required
      >
        <option value="">Select Category</option>

        {f.type === "Income" ? (
          <>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Business">Business</option>
            <option value="Gift">Gift</option>
            <option value="Others">Others</option>
          </>
        ) : (
          <>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="Bills">Bills</option>
            <option value="Rent">Rent</option>
            <option value="Others">Others</option>
          </>
        )}
      </select>

      {/* Description */}
      <input
        type="text"
        placeholder="Description"
        value={f.description}
        onChange={(e) =>
          s({
            ...f,
            description: e.target.value,
          })
        }
      />

      {/* Date */}
      <input
        type="date"
        value={f.date}
        onChange={(e) =>
          s({
            ...f,
            date: e.target.value,
          })
        }
        required
      />

      {/* Submit Button */}
      <button type="submit">Add Transaction</button>
    </form>
  );
}