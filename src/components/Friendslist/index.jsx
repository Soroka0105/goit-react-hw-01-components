
import css from "./friends.module.css"

export const Fr = ({arr}) => {
return (
  <div>
<FriendListItem props = {arr}/>
  </div>
)

}

const FriendListItem = ({props}) => {
  return (<ul className={css.list}>
    {props.map(el => (
        <li className={css.item} key={el.id}>
          <span className={el.isOnline === true ? css.true : css.false}></span>
        <img className="avatar" src={el.avatar} alt={el.name} width="48" />
        <p className="name">{el.name}</p>
      </li>
    ))}
    </ul>)
}