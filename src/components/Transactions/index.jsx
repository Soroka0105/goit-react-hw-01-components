import css from "./transactions.module.css"

export const Th = ({array}) => {
    return (
    <table className="transaction-history">
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
{array.map(el => (
    <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>))}
  </tbody>
    </table>


    )
} 