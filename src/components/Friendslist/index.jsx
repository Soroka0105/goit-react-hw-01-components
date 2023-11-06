
import css from "./friends.module.css"

export const Fr = ({arr}) => {
return (<ul className={css.list}>
{arr.map(el => (
    <li className={css.item} key={el.id}>
      <span className={el.isOnline === true ? css.true : css.false}></span>
    <img className="avatar" src={el.avatar} alt={el.name} width="48" />
    <p className="name">{el.name}</p>
  </li>
))}
</ul>)

}