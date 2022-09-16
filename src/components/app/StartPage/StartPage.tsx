import { observer } from 'mobx-react';
import { FunctionComponent } from 'react';
import style from './StartPage.scss';

export const StartPage = observer<FunctionComponent>(() => {
  return <div className={style.container}>App</div>;
});
