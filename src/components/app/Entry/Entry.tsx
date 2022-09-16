import { Provider } from 'mobx-react';
import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store';
import { StartPage } from '../StartPage';

export const Entry: FunctionComponent = () => {
  return (
    <Provider {...store}>
      <BrowserRouter>
        <StartPage />
      </BrowserRouter>
    </Provider>
  );
};
