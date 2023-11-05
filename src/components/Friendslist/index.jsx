


export const Fr = ({arr}) => {
return (<ul className="list">
{arr.map(el => (
    <li className="item" key={el.id}>
    <span className="status">{el.isOnline}</span>
    <img className="avatar" src={el.avatar} alt={el.name} width="48" />
    <p className="name">{el.name}</p>
  </li>

))}
</ul>)



}