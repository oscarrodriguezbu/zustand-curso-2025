import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Bear {
  id: number;
  name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];

  totalBears: () => number; //esto hace que el almacenamiento en el localstorage sea reactiva

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<BearState>()(

  persist(// es un middleware para guardar en local o session storage

    (set, get) => ({ //Mejoras del uso y manejo de zustand con set, get que recomiendan para solventar varios issues
      blackBears: 10,
      polarBears: 5,
      pandaBears: 1,

      bears: [{ id: 1, name: 'Oso #1' }],

      totalBears: () => {
        return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
      },

      increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
      increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
      increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),

      doNothing: () => set(state => ({ bears: [...state.bears] })), //crea un nuevo estado pero va a ser igual que el anterior
      addBear: () => set(state => ({
        bears: [...state.bears, { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}` }]
      })),
      clearBears: () => set({ bears: [] })

    }),
    { name: 'bears-store' } // es el name del store del local o session storage cuando se usa el persist
  )

);