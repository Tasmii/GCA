import { createContext, useContext, useState } from 'react';
import NominationForm from '../components/NominationForm';

const NominationContext = createContext();

export const useNomination = () => {
  const context = useContext(NominationContext);
  if (!context) {
    throw new Error('useNomination must be used within a NominationProvider');
  }
  return context;
};

export const NominationProvider = ({ children }) => {
  const [isNominationFormOpen, setIsNominationFormOpen] = useState(false);

  const openNominationForm = () => setIsNominationFormOpen(true);
  const closeNominationForm = () => setIsNominationFormOpen(false);

  return (
    <NominationContext.Provider value={{ openNominationForm }}>
      {children}
      <NominationForm
        isOpen={isNominationFormOpen}
        onClose={closeNominationForm}
      />
    </NominationContext.Provider>
  );
};