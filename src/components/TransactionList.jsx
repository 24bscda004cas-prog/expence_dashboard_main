export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <table>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.type}</td>
            <td>{t.amount}</td>
            <td>{t.category}</td>
            <td>
              <button onClick={() => deleteTransaction(t.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
