import css from "./profile.module.css"

export const Profile = ({username, tag, location, avatar, stats}) => (
<div className={css.profile}>
<div className={css.description}>
    <img className="avatar" src={avatar} alt={username}  height="200"/>
    <p className={css.descitem}>{username}</p>
    <p className={css.descitem}>@{tag}</p>
    <p className={css.descitem}>{location}</p>
</div>
<ul className={css.stats}>
    <li className={css.item}>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
)