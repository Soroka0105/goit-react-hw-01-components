import css from "./statistics.module.css"

export const Statistics = ({elms}) => {
    return (
    <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.statlist}>
{elms.map(el => (<li className={css.item} key={el.id}>
      <span className="label">{el.label}</span>
      <span className="percentage">{el.percentage}</span>
    </li>) ) }
  </ul>
</section>
)
}



