import { CarBrand } from './types';

export const CAR_BRANDS: CarBrand[] = [
  {
    id: 'maruti-suzuki',
    name: 'Maruti Suzuki',
    slug: 'maruti-suzuki',
    popular: true,
    logoText: 'MS',
    models: [
      { id: 'swift', name: 'Swift', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG'], years: [2018, 2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'baleno', name: 'Baleno', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG'], years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'brezza', name: 'Brezza', bodyType: 'SUV', fuels: ['Petrol', 'CNG'], years: [2018, 2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'ertiga', name: 'Ertiga', bodyType: 'MUV', fuels: ['Petrol', 'CNG'], years: [2016, 2018, 2020, 2022, 2024] },
      { id: 'wagon-r', name: 'Wagon R', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG'], years: [2015, 2017, 2019, 2021, 2023] },
      { id: 'dzire', name: 'Dzire', bodyType: 'Sedan', fuels: ['Petrol', 'CNG'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'grand-vitara', name: 'Grand Vitara', bodyType: 'SUV', fuels: ['Petrol', 'Hybrid', 'CNG'], years: [2022, 2023, 2024] },
      { id: 'alto-k10', name: 'Alto K10', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG'], years: [2016, 2018, 2020, 2022, 2024] },
    ]
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    slug: 'hyundai',
    popular: true,
    logoText: 'HY',
    models: [
      { id: 'creta', name: 'Creta', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'venue', name: 'Venue', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'i20', name: 'i20', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020, 2022, 2024] },
      { id: 'verna', name: 'Verna', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'grand-i10-nios', name: 'Grand i10 Nios', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG'], years: [2019, 2021, 2023, 2024] },
      { id: 'exter', name: 'Exter', bodyType: 'SUV', fuels: ['Petrol', 'CNG'], years: [2023, 2024] },
      { id: 'tucson', name: 'Tucson', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2019, 2021, 2023, 2024] },
    ]
  },
  {
    id: 'tata',
    name: 'Tata Motors',
    slug: 'tata',
    popular: true,
    logoText: 'TA',
    models: [
      { id: 'nexon', name: 'Nexon', bodyType: 'SUV', fuels: ['Petrol', 'Diesel', 'Electric', 'CNG'], years: [2018, 2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'punch', name: 'Punch', bodyType: 'SUV', fuels: ['Petrol', 'CNG', 'Electric'], years: [2021, 2022, 2023, 2024] },
      { id: 'harrier', name: 'Harrier', bodyType: 'SUV', fuels: ['Diesel'], years: [2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'safari', name: 'Safari', bodyType: 'SUV', fuels: ['Diesel'], years: [2021, 2022, 2023, 2024] },
      { id: 'altroz', name: 'Altroz', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel', 'CNG'], years: [2020, 2021, 2022, 2023, 2024] },
      { id: 'tiago', name: 'Tiago', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG', 'Electric'], years: [2017, 2019, 2021, 2023, 2024] },
    ]
  },
  {
    id: 'honda',
    name: 'Honda',
    slug: 'honda',
    popular: true,
    logoText: 'HO',
    models: [
      { id: 'city', name: 'City', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel', 'Hybrid'], years: [2015, 2017, 2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'amaze', name: 'Amaze', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020, 2022, 2024] },
      { id: 'elevate', name: 'Elevate', bodyType: 'SUV', fuels: ['Petrol'], years: [2023, 2024] },
      { id: 'civic', name: 'Civic', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2019, 2020, 2021] },
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    slug: 'toyota',
    popular: true,
    logoText: 'TO',
    models: [
      { id: 'innova-crysta', name: 'Innova Crysta', bodyType: 'MUV', fuels: ['Diesel', 'Petrol'], years: [2016, 2018, 2020, 2022, 2023, 2024] },
      { id: 'fortuner', name: 'Fortuner', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2017, 2019, 2021, 2022, 2023, 2024] },
      { id: 'urban-cruiser-hyryder', name: 'Urban Cruiser Hyryder', bodyType: 'SUV', fuels: ['Hybrid', 'Petrol', 'CNG'], years: [2022, 2023, 2024] },
      { id: 'glanza', name: 'Glanza', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG'], years: [2019, 2021, 2023, 2024] },
      { id: 'camry', name: 'Camry', bodyType: 'Luxury', fuels: ['Hybrid'], years: [2018, 2020, 2022, 2024] },
    ]
  },
  {
    id: 'mahindra',
    name: 'Mahindra',
    slug: 'mahindra',
    popular: true,
    logoText: 'MA',
    models: [
      { id: 'xuv700', name: 'XUV700', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2021, 2022, 2023, 2024] },
      { id: 'scorpio-n', name: 'Scorpio-N', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2022, 2023, 2024] },
      { id: 'thar', name: 'Thar', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2020, 2021, 2022, 2023, 2024] },
      { id: 'xuv300', name: 'XUV300 / 3XO', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2019, 2021, 2023, 2024] },
      { id: 'bolero', name: 'Bolero Neo', bodyType: 'SUV', fuels: ['Diesel'], years: [2018, 2020, 2022, 2024] },
    ]
  },
  {
    id: 'kia',
    name: 'Kia',
    slug: 'kia',
    popular: true,
    logoText: 'KI',
    models: [
      { id: 'seltos', name: 'Seltos', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'sonet', name: 'Sonet', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2020, 2021, 2022, 2023, 2024] },
      { id: 'carens', name: 'Carens', bodyType: 'MUV', fuels: ['Petrol', 'Diesel'], years: [2022, 2023, 2024] },
      { id: 'carnival', name: 'Carnival', bodyType: 'Luxury', fuels: ['Diesel'], years: [2020, 2022, 2024] },
    ]
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    slug: 'volkswagen',
    popular: true,
    logoText: 'VW',
    models: [
      { id: 'taigun', name: 'Taigun', bodyType: 'SUV', fuels: ['Petrol'], years: [2021, 2022, 2023, 2024] },
      { id: 'virtus', name: 'Virtus', bodyType: 'Sedan', fuels: ['Petrol'], years: [2022, 2023, 2024] },
      { id: 'polo', name: 'Polo', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2015, 2017, 2019, 2021] },
      { id: 'tiguan', name: 'Tiguan', bodyType: 'SUV', fuels: ['Petrol'], years: [2019, 2021, 2023, 2024] },
    ]
  },
  {
    id: 'skoda',
    name: 'Skoda',
    slug: 'skoda',
    popular: true,
    logoText: 'SK',
    models: [
      { id: 'kushaq', name: 'Kushaq', bodyType: 'SUV', fuels: ['Petrol'], years: [2021, 2022, 2023, 2024] },
      { id: 'slavia', name: 'Slavia', bodyType: 'Sedan', fuels: ['Petrol'], years: [2022, 2023, 2024] },
      { id: 'octavia', name: 'Octavia', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023] },
      { id: 'kodiaq', name: 'Kodiaq', bodyType: 'Luxury', fuels: ['Petrol'], years: [2018, 2020, 2022, 2024] },
    ]
  },
  {
    id: 'renault',
    name: 'Renault',
    slug: 'renault',
    logoText: 'RE',
    models: [
      { id: 'kwid', name: 'Kwid', bodyType: 'Hatchback', fuels: ['Petrol'], years: [2016, 2018, 2020, 2022, 2024] },
      { id: 'triber', name: 'Triber', bodyType: 'MUV', fuels: ['Petrol'], years: [2019, 2021, 2023, 2024] },
      { id: 'kiger', name: 'Kiger', bodyType: 'SUV', fuels: ['Petrol'], years: [2021, 2022, 2023, 2024] },
    ]
  },
  {
    id: 'mg',
    name: 'MG Motor',
    slug: 'mg',
    logoText: 'MG',
    models: [
      { id: 'hector', name: 'Hector', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2019, 2020, 2021, 2022, 2023, 2024] },
      { id: 'astor', name: 'Astor', bodyType: 'SUV', fuels: ['Petrol'], years: [2021, 2022, 2023, 2024] },
      { id: 'zs-ev', name: 'ZS EV', bodyType: 'SUV', fuels: ['Electric'], years: [2020, 2022, 2024] },
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    slug: 'bmw',
    logoText: 'BMW',
    models: [
      { id: '3-series', name: '3 Series Gran Limousine', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2018, 2020, 2022, 2024] },
      { id: '5-series', name: '5 Series', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'x1', name: 'X1', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2018, 2020, 2022, 2024] },
      { id: 'x3', name: 'X3', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2019, 2021, 2023, 2024] },
    ]
  },
  {
    id: 'mercedes-benz',
    name: 'Mercedes-Benz',
    slug: 'mercedes-benz',
    logoText: 'MB',
    models: [
      { id: 'c-class', name: 'C-Class', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'e-class', name: 'E-Class LWB', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2018, 2020, 2022, 2024] },
      { id: 'gla', name: 'GLA', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2019, 2021, 2023, 2024] },
      { id: 'glc', name: 'GLC', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2018, 2020, 2022, 2024] },
    ]
  },
  {
    id: 'audi',
    name: 'Audi',
    slug: 'audi',
    logoText: 'AU',
    models: [
      { id: 'a4', name: 'A4', bodyType: 'Luxury', fuels: ['Petrol'], years: [2018, 2020, 2022, 2024] },
      { id: 'a6', name: 'A6', bodyType: 'Luxury', fuels: ['Petrol'], years: [2019, 2021, 2023, 2024] },
      { id: 'q3', name: 'Q3', bodyType: 'Luxury', fuels: ['Petrol'], years: [2019, 2021, 2023, 2024] },
      { id: 'q5', name: 'Q5', bodyType: 'Luxury', fuels: ['Petrol'], years: [2018, 2020, 2022, 2024] },
    ]
  },
  {
    id: 'jeep',
    name: 'Jeep',
    slug: 'jeep',
    logoText: 'JP',
    models: [
      { id: 'compass', name: 'Compass', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2018, 2020, 2022, 2024] },
      { id: 'meridian', name: 'Meridian', bodyType: 'SUV', fuels: ['Diesel'], years: [2022, 2023, 2024] },
      { id: 'wrangler', name: 'Wrangler Rubicon', bodyType: 'SUV', fuels: ['Petrol'], years: [2020, 2022, 2024] },
    ]
  }
];
