
import user from "./profile/user.json"
import { Profile } from "components/profile";
import { Statistics } from "components/statistics";
import data from "./statistics/data.json"
import friends from "./Friendslist/friends.json"
import { Fr } from "./Friendslist";
import { Th } from "./Transactions";
import transactions from "./Transactions/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics elms={data} title = "Upload stats" />
<Fr arr ={friends}/>

<Th array={transactions} />

    </div>
  );
};
