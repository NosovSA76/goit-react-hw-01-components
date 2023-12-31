import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import  data  from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import  friends  from './FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';

import  transactions  from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        textDecoration: `none`,
        backgroundColor: `#c6e9f7`
      }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
