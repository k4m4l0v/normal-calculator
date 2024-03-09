import { observer } from 'mobx-react-lite';
import './styles/global.css';
import { useContext } from 'react';
import { Context } from '.';
import { ButtonList } from './components/ButtonList';
import { Output } from './components/Output';

export const App = observer(() => {
  const {store} = useContext(Context);

  return (
    <div className='main'>
      <Output />
      <ButtonList />
    </div>
  );
})
