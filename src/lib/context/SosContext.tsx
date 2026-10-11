'use client';

import React, { createContext, useContext, useState } from 'react';

interface SosContextType {
  isSosOpen: boolean;
  openSos: () => void;
  closeSos: () => void;
}

const SosContext = createContext<SosContextType>({
  isSosOpen: false,
  openSos: () => {},
  closeSos: () => {}
});

export function SosProvider({ children }: { children: React.ReactNode }) {
  const [isSosOpen, setIsSosOpen] = useState(false);

  const openSos = () => setIsSosOpen(true);
  const closeSos = () => setIsSosOpen(false);

  return (
    <SosContext.Provider value={{ isSosOpen, openSos, closeSos }}>
      {children}
    </SosContext.Provider>
  );
}

export function useSos() {
  return useContext(SosContext);
}
