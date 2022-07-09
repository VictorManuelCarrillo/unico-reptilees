import { createContext, useContext } from 'react';

export const AnimalContext = createContext();

export const useAnimals = () => useContext( AnimalContext);


export const AnimalsProvider = ( { children}) => {

  const [animals, setAnimals] = useState( [ {}]);

  return (

    <AnimalContext.Provider value={{  }}>

      { children}
    </AnimalContext.Provider>
  )
};