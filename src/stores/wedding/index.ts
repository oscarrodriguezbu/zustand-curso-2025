import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { GuestSlice, createGuestSlice } from './guest.slice';
import { PersonSlice, createPersonSlice } from './person.slice';
import { DateSlice, createDateSlice } from './date.slice';
import { ConfirmationSlice, createConfirmationSlice } from './confirmation.slice';


// Crear el store
type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice; //Concatenar todos los tipos de los slices


export const useWeddingBoundStore = create<ShareState>()( //useWeddingBoundStore. El bound es para deecir que es un store compuesto de slices
  // persist(
  devtools(
    (...a) => ({ //(...a tiene el get, el set y el store api
      ...createPersonSlice(...a),
      ...createGuestSlice(...a),
      ...createDateSlice(...a),
      ...createConfirmationSlice(...a),
    })
    // ), { name: 'wedding-store' }
  )
);