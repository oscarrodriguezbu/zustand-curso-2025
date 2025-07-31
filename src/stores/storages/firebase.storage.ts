import { StateStorage, createJSONStorage } from 'zustand/middleware';

// const firebaseUrl = 'https://zustand-storage-default-rtdb.firebaseio.com/zustand'; //url del curso de zustand
const firebaseUrl = 'https://zustand-storage2025-default-rtdb.firebaseio.com/zustand'; // /zustand es el nodo donde va a guardar todo

const storageApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseUrl}/${name}.json`).then(res => res.json());
      return JSON.stringify(data);// se parcea para que quedé en el localstorage al pasar por el persit del store
    } catch (error) {
      throw error;
    }
  },

  setItem: async function (name: string, value: string): Promise<void> {
    await fetch(`${firebaseUrl}/${name}.json`, {
      method: 'PUT',
      body: value
    }).then(res => res.json());
    // console.count('setItem');
    //! Esta peticion se hace muchas veces cuando se teclea cualquier cosa, se le conoce como peticion de carrera
    // si se hacen 10 peticiones no quiere decir que la primera llegara primero ni la ultima de ultimo, se puede
    //solucionar parcialmente con un debounce, pero axios lo maneja mucho mejor cancelando las peticiones anteriores a la ultima
    return;
  },

  removeItem: function (name: string): void | Promise<void> {
    console.log('removeItem', name);
  }
}

export const firebaseStorage = createJSONStorage(() => storageApi);