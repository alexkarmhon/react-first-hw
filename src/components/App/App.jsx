import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { AppContainer } from './App.styled';
import { Profile } from '../Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions';

export const App = () => {
  return (
    <AppContainer
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={ transactions } />
    </AppContainer>
  );
};

