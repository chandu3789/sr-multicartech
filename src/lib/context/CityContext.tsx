'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CITIES_LIST } from '../data/workshopsData';

interface CityContextType {
  currentCity: string;
  setCity: (city: string) => void;
  availableCities: typeof CITIES_LIST;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [currentCity, setCurrentCity] = useState<string>('Eluru, Andhra Pradesh');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('srmct_city');
      if (stored && stored !== 'Guwahati') {
        setCurrentCity(stored);
      } else {
        setCurrentCity('Eluru, Andhra Pradesh');
        localStorage.setItem('srmct_city', 'Eluru, Andhra Pradesh');
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const setCity = (cityName: string) => {
    setCurrentCity(cityName);
    try {
      localStorage.setItem('srmct_city', cityName);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <CityContext.Provider value={{ currentCity, setCity, availableCities: CITIES_LIST }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
}
