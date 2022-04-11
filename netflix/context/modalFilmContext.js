import { createContext, useState } from 'react';
export const ModalFilmContext = createContext();

const ModalFilmContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState({});

  return (
    <ModalFilmContext.Provider
      value={{
        open,
        setOpen,
        movie,
        setMovie,
      }}
    >
      {children}
    </ModalFilmContext.Provider>
  );
};

export default ModalFilmContextProvider;
