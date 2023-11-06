import css from "./transactions.module.css"

export const Th = ({array}) => {
    return (
    <table className={css.transactionhistory}>
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={css.table}>
{array.map(el => (
    <tr className={css.row} key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>))}
  </tbody>
    </table>


    )
} 