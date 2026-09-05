'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SelectedCar {
  id?: string;
  brand: string;
  brandSlug: string;
  model: string;
  modelSlug: string;
  fuel: string;
  year?: number;
  registrationNumber?: string;
}

interface CarContextType {
  currentCar: SelectedCar | null;
  savedGarage: SelectedCar[];
  selectCar: (car: SelectedCar) => void;
  addToGarage: (car: SelectedCar) => void;
  removeFromGarage: (carIdOrIndex: string) => void;
  clearCar: () => void;
  formattedCarName: string;
}

const DEFAULT_CAR: SelectedCar = {
  id: 'car-default-1',
  brand: 'Hyundai',
  brandSlug: 'hyundai',
  model: 'Creta',
  modelSlug: 'creta',
  fuel: 'Petrol',
  year: 2022,
  registrationNumber: 'AS-01-BK-4921'
};

const CarContext = createContext<CarContextType | undefined>(undefined);

export function CarProvider({ children }: { children: React.ReactNode }) {
  const [currentCar, setCurrentCar] = useState<SelectedCar | null>(DEFAULT_CAR);
  const [savedGarage, setSavedGarage] = useState<SelectedCar[]>([
    DEFAULT_CAR,
    {
      id: 'car-default-2',
      brand: 'Maruti Suzuki',
      brandSlug: 'maruti-suzuki',
      model: 'Swift',
      modelSlug: 'swift',
      fuel: 'Petrol',
      year: 2020,
      registrationNumber: 'AS-01-EA-8842'
    }
  ]);

  useEffect(() => {
    try {
      const storedCar = localStorage.getItem('srmct_current_car');
      if (storedCar) {
        setCurrentCar(JSON.parse(storedCar));
      }
      const storedGarage = localStorage.getItem('srmct_garage');
      if (storedGarage) {
        setSavedGarage(JSON.parse(storedGarage));
      }
    } catch (e) {
      console.warn('LocalStorage not available', e);
    }
  }, []);

  const selectCar = (car: SelectedCar) => {
    setCurrentCar(car);
    try {
      localStorage.setItem('srmct_current_car', JSON.stringify(car));
    } catch (e) {
      console.warn(e);
    }
  };

  const addToGarage = (car: SelectedCar) => {
    const newCar = { ...car, id: car.id || `car-${Date.now()}` };
    const updated = [newCar, ...savedGarage.filter(c => c.model !== car.model || c.brand !== car.brand)];
    setSavedGarage(updated);
    setCurrentCar(newCar);
    try {
      localStorage.setItem('srmct_garage', JSON.stringify(updated));
      localStorage.setItem('srmct_current_car', JSON.stringify(newCar));
    } catch (e) {
      console.warn(e);
    }
  };

  const removeFromGarage = (carId: string) => {
    const updated = savedGarage.filter(c => c.id !== carId);
    setSavedGarage(updated);
    if (currentCar?.id === carId) {
      setCurrentCar(updated[0] || null);
    }
    try {
      localStorage.setItem('srmct_garage', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  const clearCar = () => {
    setCurrentCar(null);
    try {
      localStorage.removeItem('srmct_current_car');
    } catch (e) {
      console.warn(e);
    }
  };

  const formattedCarName = currentCar
    ? `${currentCar.brand} ${currentCar.model} (${currentCar.fuel}${currentCar.year ? ` ${currentCar.year}` : ''})`
    : 'Select Vehicle';

  return (
    <CarContext.Provider
      value={{
        currentCar,
        savedGarage,
        selectCar,
        addToGarage,
        removeFromGarage,
        clearCar,
        formattedCarName
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export function useCar() {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCar must be used within a CarProvider');
  }
  return context;
}
