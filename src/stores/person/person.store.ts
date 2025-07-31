import { type StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { useWeddingBoundStore } from '../wedding';
// import { customSessionStorage } from '../storages/session.storage';
// import { firebaseStorage } from '../storages/firebase.storage';
// import { logger } from '../middlewares/logger.middleware';


interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

//el tipo [["zustand/devtools", never]] es para trabajar con los devtools
const storeAPi: StateCreator<PersonState & Actions, [["zustand/devtools", never]]> = (set) => ({ //storeAPi es para optimizar el codigo en el middleware persist
  firstName: '',
  lastName: '',

  setFirstName: (value: string) => set(({ firstName: value }), false, 'setFirstName'),  //...false, setFirstName es para ver esos nombres en las devtools de redux
  setLastName: (value: string) => set(({ lastName: value }), false, 'setLastName'), //...false, setLastName es para ver esos nombres en las devtools de redux
});

export const usePersonStore = create<PersonState & Actions>()( //combinacion con tipos PersonState & Actions, puede crearse uno solo combinando ambos tambien
  devtools(  //es un middleware para ver herramientos del redux devtools del navegador
    persist( //es un middleware, guarda en localstorage
      storeAPi
      , {
        name: 'person-storage',// el name que pide el persiste para guardar en localstorage
        // storage: customSessionStorage, //* Guardar en el sessionStorage
        // storage: firebaseStorage,
      })
  )
);

usePersonStore.subscribe((nextState, /*prevState*/) => {
  const { firstName, lastName } = nextState;

  useWeddingBoundStore.getState().setFirstName(firstName);
  useWeddingBoundStore.getState().setLastName(lastName);
});
