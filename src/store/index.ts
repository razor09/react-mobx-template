import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import { Store } from './Store';

export const store = new Store();

export const useStore = () => useContext<Store>(MobXProviderContext);
