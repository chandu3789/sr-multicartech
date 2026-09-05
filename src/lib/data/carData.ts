import { CarBrand } from './types';

export const CAR_BRANDS: CarBrand[] = [
  {
    id: 'maruti-suzuki',
    name: 'Maruti Suzuki',
    slug: 'maruti-suzuki',
    popular: true,
    logoText: 'MS',
    models: [
      { id: 'alto-800', name: 'Alto 800', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2012, 2014, 2016, 2018, 2020, 2022] },
      { id: 'alto-k10', name: 'Alto K10', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2014, 2016, 2018, 2020, 2022, 2023, 2024], popular: true },
      { id: 'baleno', name: 'Baleno', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'brezza', name: 'Brezza', bodyType: 'SUV', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2016, 2018, 2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'celerio', name: 'Celerio', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2015, 2017, 2019, 2021, 2023, 2024] },
      { id: 'celerio-x', name: 'Celerio X', bodyType: 'Hatchback', fuels: ['Petrol'], years: [2017, 2019, 2021] },
      { id: 'ciaz', name: 'Ciaz', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2015, 2017, 2019, 2021, 2023, 2024] },
      { id: 'dzire', name: 'Dzire', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2015, 2017, 2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'eeco', name: 'Eeco', bodyType: 'MUV', fuels: ['Petrol', 'CNG + Petrol'], years: [2015, 2017, 2019, 2021, 2023, 2024] },
      { id: 'ertiga', name: 'Ertiga', bodyType: 'MUV', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2015, 2017, 2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'fronx', name: 'Fronx', bodyType: 'SUV', fuels: ['Petrol', 'CNG + Petrol'], years: [2023, 2024], popular: true },
      { id: 'grand-vitara', name: 'Grand Vitara', bodyType: 'SUV', fuels: ['Petrol', 'Hybrid', 'CNG + Petrol'], years: [2022, 2023, 2024], popular: true },
      { id: 'ignis', name: 'Ignis', bodyType: 'Hatchback', fuels: ['Petrol'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'invicto', name: 'Invicto', bodyType: 'MUV', fuels: ['Hybrid'], years: [2023, 2024] },
      { id: 'jimny', name: 'Jimny 5-Door', bodyType: 'SUV', fuels: ['Petrol'], years: [2023, 2024] },
      { id: 'ritz', name: 'Ritz', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2010, 2012, 2014, 2016] },
      { id: 's-cross', name: 'S-Cross', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2015, 2017, 2019, 2021] },
      { id: 's-presso', name: 'S-Presso', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2019, 2021, 2023, 2024] },
      { id: 'swift', name: 'Swift', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2015, 2017, 2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'sx4', name: 'SX4', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2008, 2010, 2012, 2014] },
      { id: 'wagon-r', name: 'Wagon R', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2015, 2017, 2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'xl6', name: 'XL6', bodyType: 'MUV', fuels: ['Petrol', 'CNG + Petrol'], years: [2019, 2021, 2022, 2023, 2024] },
      { id: 'zen-estilo', name: 'Zen Estilo', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2008, 2010, 2012] }
    ]
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    slug: 'hyundai',
    popular: true,
    logoText: 'HY',
    models: [
      { id: 'alcazar', name: 'Alcazar', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2021, 2022, 2023, 2024] },
      { id: 'aura', name: 'Aura', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2020, 2021, 2022, 2023, 2024] },
      { id: 'creta', name: 'Creta', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'creta-n-line', name: 'Creta N Line', bodyType: 'SUV', fuels: ['Petrol'], years: [2024] },
      { id: 'elantra', name: 'Elantra', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020, 2022] },
      { id: 'eon', name: 'Eon', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2012, 2014, 2016, 2018] },
      { id: 'exter', name: 'Exter', bodyType: 'SUV', fuels: ['Petrol', 'CNG + Petrol'], years: [2023, 2024], popular: true },
      { id: 'grand-i10', name: 'Grand i10', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2014, 2016, 2018, 2020] },
      { id: 'grand-i10-nios', name: 'Grand i10 Nios', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'i10', name: 'i10 (1st Gen)', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2008, 2010, 2012, 2014] },
      { id: 'i20', name: 'i20', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2015, 2017, 2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'i20-active', name: 'i20 Active', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2015, 2017, 2019] },
      { id: 'i20-n-line', name: 'i20 N Line', bodyType: 'Hatchback', fuels: ['Petrol'], years: [2021, 2022, 2023, 2024] },
      { id: 'ioniq-5', name: 'Ioniq 5', bodyType: 'EV', fuels: ['Electric'], years: [2023, 2024] },
      { id: 'kona-electric', name: 'Kona Electric', bodyType: 'EV', fuels: ['Electric'], years: [2019, 2021, 2023] },
      { id: 'santa-fe', name: 'Santa Fe', bodyType: 'SUV', fuels: ['Diesel'], years: [2014, 2016, 2018] },
      { id: 'santro', name: 'Santro (New)', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2018, 2019, 2020, 2021, 2022] },
      { id: 'santro-xing', name: 'Santro Xing', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2004, 2008, 2010, 2014] },
      { id: 'tucson', name: 'Tucson', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'venue', name: 'Venue', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2019, 2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'venue-n-line', name: 'Venue N Line', bodyType: 'SUV', fuels: ['Petrol'], years: [2022, 2023, 2024] },
      { id: 'verna', name: 'Verna', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2015, 2017, 2019, 2021, 2023, 2024], popular: true },
      { id: 'xcent', name: 'Xcent', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2014, 2016, 2018, 2020] }
    ]
  },
  {
    id: 'tata',
    name: 'Tata Motors',
    slug: 'tata',
    popular: true,
    logoText: 'TA',
    models: [
      { id: 'altroz', name: 'Altroz', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'aria', name: 'Aria', bodyType: 'MUV', fuels: ['Diesel'], years: [2010, 2012, 2014] },
      { id: 'bolt', name: 'Bolt', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2015, 2017, 2019] },
      { id: 'curvv', name: 'Curvv', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2024] },
      { id: 'curvv-ev', name: 'Curvv EV', bodyType: 'EV', fuels: ['Electric'], years: [2024] },
      { id: 'harrier', name: 'Harrier', bodyType: 'SUV', fuels: ['Diesel'], years: [2019, 2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'hexa', name: 'Hexa', bodyType: 'MUV', fuels: ['Diesel'], years: [2017, 2018, 2019, 2020] },
      { id: 'indica', name: 'Indica', bodyType: 'Hatchback', fuels: ['Diesel', 'Petrol'], years: [2004, 2008, 2011] },
      { id: 'indica-vista', name: 'Indica Vista', bodyType: 'Hatchback', fuels: ['Diesel', 'Petrol'], years: [2009, 2011, 2013, 2015] },
      { id: 'indigo-ecs', name: 'Indigo eCS', bodyType: 'Sedan', fuels: ['Diesel', 'CNG + Petrol'], years: [2009, 2012, 2015] },
      { id: 'manza', name: 'Manza', bodyType: 'Sedan', fuels: ['Diesel', 'Petrol'], years: [2010, 2012, 2014] },
      { id: 'nano', name: 'Nano', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2010, 2012, 2014, 2016, 2018] },
      { id: 'nexon', name: 'Nexon', bodyType: 'SUV', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2017, 2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'nexon-ev', name: 'Nexon EV', bodyType: 'EV', fuels: ['Electric'], years: [2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'punch', name: 'Punch', bodyType: 'SUV', fuels: ['Petrol', 'CNG + Petrol'], years: [2021, 2022, 2023, 2024], popular: true },
      { id: 'punch-ev', name: 'Punch EV', bodyType: 'EV', fuels: ['Electric'], years: [2024], popular: true },
      { id: 'safari', name: 'Safari', bodyType: 'SUV', fuels: ['Diesel'], years: [2021, 2022, 2023, 2024], popular: true },
      { id: 'safari-storme', name: 'Safari Storme (Legacy)', bodyType: 'SUV', fuels: ['Diesel'], years: [2012, 2014, 2016, 2018] },
      { id: 'sumo-gold', name: 'Sumo Gold', bodyType: 'MUV', fuels: ['Diesel'], years: [2011, 2013, 2015, 2018] },
      { id: 'tiago', name: 'Tiago', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2016, 2018, 2020, 2022, 2023, 2024], popular: true },
      { id: 'tiago-ev', name: 'Tiago EV', bodyType: 'EV', fuels: ['Electric'], years: [2022, 2023, 2024] },
      { id: 'tigor', name: 'Tigor', bodyType: 'Sedan', fuels: ['Petrol', 'CNG + Petrol'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'tigor-ev', name: 'Tigor EV / XPRES-T', bodyType: 'EV', fuels: ['Electric'], years: [2021, 2022, 2023, 2024] },
      { id: 'zest', name: 'Zest', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2014, 2016, 2018] }
    ]
  },
  {
    id: 'honda',
    name: 'Honda',
    slug: 'honda',
    popular: true,
    logoText: 'HO',
    models: [
      { id: 'accord', name: 'Accord', bodyType: 'Sedan', fuels: ['Petrol', 'Hybrid'], years: [2008, 2011, 2014, 2017] },
      { id: 'amaze', name: 'Amaze', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2013, 2016, 2018, 2020, 2022, 2023, 2024], popular: true },
      { id: 'br-v', name: 'BR-V', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020] },
      { id: 'brio', name: 'Brio', bodyType: 'Hatchback', fuels: ['Petrol'], years: [2011, 2014, 2017, 2019] },
      { id: 'cr-v', name: 'CR-V', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2010, 2014, 2018, 2020] },
      { id: 'city-4th-gen', name: 'City (4th Gen)', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2014, 2016, 2018, 2020] },
      { id: 'city-5th-gen', name: 'City (5th Gen)', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'city-hybrid', name: 'City e:HEV (Hybrid)', bodyType: 'Sedan', fuels: ['Hybrid'], years: [2022, 2023, 2024] },
      { id: 'civic', name: 'Civic', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2008, 2010, 2012, 2019, 2021] },
      { id: 'elevate', name: 'Elevate', bodyType: 'SUV', fuels: ['Petrol'], years: [2023, 2024], popular: true },
      { id: 'jazz', name: 'Jazz', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2011, 2015, 2018, 2020, 2022] },
      { id: 'mobilio', name: 'Mobilio', bodyType: 'MUV', fuels: ['Petrol', 'Diesel'], years: [2014, 2016, 2018] },
      { id: 'wr-v', name: 'WR-V', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023] }
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    slug: 'toyota',
    popular: true,
    logoText: 'TO',
    models: [
      { id: 'camry', name: 'Camry Hybrid', bodyType: 'Luxury', fuels: ['Hybrid'], years: [2014, 2017, 2020, 2022, 2024] },
      { id: 'corolla-altis', name: 'Corolla Altis', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2010, 2014, 2017, 2020] },
      { id: 'etios', name: 'Etios', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2011, 2014, 2017, 2020] },
      { id: 'etios-cross', name: 'Etios Cross', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2014, 2017, 2019] },
      { id: 'etios-liva', name: 'Etios Liva', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2011, 2014, 2017, 2020] },
      { id: 'fortuner', name: 'Fortuner', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2012, 2016, 2018, 2020, 2022, 2023, 2024], popular: true },
      { id: 'fortuner-legender', name: 'Fortuner Legender', bodyType: 'SUV', fuels: ['Diesel'], years: [2021, 2022, 2023, 2024], popular: true },
      { id: 'glanza', name: 'Glanza', bodyType: 'Hatchback', fuels: ['Petrol', 'CNG + Petrol'], years: [2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'hilux', name: 'Hilux 4x4', bodyType: 'SUV', fuels: ['Diesel'], years: [2022, 2023, 2024] },
      { id: 'innova', name: 'Innova (Classic 2.5D)', bodyType: 'MUV', fuels: ['Diesel', 'Petrol'], years: [2008, 2011, 2013, 2015] },
      { id: 'innova-crysta', name: 'Innova Crysta', bodyType: 'MUV', fuels: ['Diesel', 'Petrol'], years: [2016, 2018, 2020, 2022, 2023, 2024], popular: true },
      { id: 'innova-hycross', name: 'Innova Hycross', bodyType: 'MUV', fuels: ['Hybrid', 'Petrol'], years: [2022, 2023, 2024], popular: true },
      { id: 'land-cruiser', name: 'Land Cruiser LC300', bodyType: 'Luxury', fuels: ['Diesel'], years: [2016, 2020, 2023, 2024] },
      { id: 'rumion', name: 'Rumion', bodyType: 'MUV', fuels: ['Petrol', 'CNG + Petrol'], years: [2023, 2024] },
      { id: 'urban-cruiser', name: 'Urban Cruiser', bodyType: 'SUV', fuels: ['Petrol'], years: [2020, 2021, 2022] },
      { id: 'urban-cruiser-hyryder', name: 'Urban Cruiser Hyryder', bodyType: 'SUV', fuels: ['Hybrid', 'Petrol', 'CNG + Petrol'], years: [2022, 2023, 2024], popular: true },
      { id: 'urban-cruiser-taisor', name: 'Urban Cruiser Taisor', bodyType: 'SUV', fuels: ['Petrol', 'CNG + Petrol'], years: [2024] },
      { id: 'vellfire', name: 'Vellfire Luxury Lounge', bodyType: 'Luxury', fuels: ['Hybrid'], years: [2020, 2022, 2024] },
      { id: 'yaris', name: 'Yaris', bodyType: 'Sedan', fuels: ['Petrol'], years: [2018, 2019, 2020, 2021] }
    ]
  },
  {
    id: 'mahindra',
    name: 'Mahindra',
    slug: 'mahindra',
    popular: true,
    logoText: 'MA',
    models: [
      { id: 'alturas-g4', name: 'Alturas G4 4WD', bodyType: 'SUV', fuels: ['Diesel'], years: [2018, 2020, 2022] },
      { id: 'bolero', name: 'Bolero', bodyType: 'SUV', fuels: ['Diesel'], years: [2012, 2015, 2018, 2021, 2023, 2024], popular: true },
      { id: 'bolero-neo', name: 'Bolero Neo', bodyType: 'SUV', fuels: ['Diesel'], years: [2021, 2022, 2023, 2024], popular: true },
      { id: 'bolero-neo-plus', name: 'Bolero Neo+ 9-Seater', bodyType: 'SUV', fuels: ['Diesel'], years: [2024] },
      { id: 'kuv100', name: 'KUV100 / KUV100 NXT', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020] },
      { id: 'marazzo', name: 'Marazzo', bodyType: 'MUV', fuels: ['Diesel'], years: [2018, 2020, 2022, 2024] },
      { id: 'quanto', name: 'Quanto', bodyType: 'SUV', fuels: ['Diesel'], years: [2012, 2014, 2016] },
      { id: 'scorpio-classic', name: 'Scorpio Classic', bodyType: 'SUV', fuels: ['Diesel'], years: [2012, 2016, 2019, 2022, 2023, 2024], popular: true },
      { id: 'scorpio-n', name: 'Scorpio-N', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2022, 2023, 2024], popular: true },
      { id: 'thar', name: 'Thar 4x4 (3-Door)', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2014, 2018, 2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'thar-roxx', name: 'Thar Roxx (5-Door)', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2024], popular: true },
      { id: 'tuv300', name: 'TUV300 / TUV300 Plus', bodyType: 'SUV', fuels: ['Diesel'], years: [2015, 2018, 2020] },
      { id: 'verito', name: 'Verito / Verito Vibe', bodyType: 'Sedan', fuels: ['Diesel'], years: [2011, 2014, 2017] },
      { id: 'xuv-3xo', name: 'XUV 3XO', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2024], popular: true },
      { id: 'xuv300', name: 'XUV300', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2019, 2021, 2022, 2023] },
      { id: 'xuv400-ev', name: 'XUV400 EV', bodyType: 'EV', fuels: ['Electric'], years: [2023, 2024] },
      { id: 'xuv500', name: 'XUV500 (Legacy)', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2011, 2014, 2017, 2020] },
      { id: 'xuv700', name: 'XUV700', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2021, 2022, 2023, 2024], popular: true },
      { id: 'xylo', name: 'Xylo', bodyType: 'MUV', fuels: ['Diesel'], years: [2009, 2012, 2015, 2018] }
    ]
  },
  {
    id: 'kia',
    name: 'Kia',
    slug: 'kia',
    popular: true,
    logoText: 'KI',
    models: [
      { id: 'carens', name: 'Carens', bodyType: 'MUV', fuels: ['Petrol', 'Diesel'], years: [2022, 2023, 2024], popular: true },
      { id: 'carnival', name: 'Carnival', bodyType: 'Luxury', fuels: ['Diesel'], years: [2020, 2021, 2022, 2024] },
      { id: 'ev6', name: 'EV6 GT Line', bodyType: 'EV', fuels: ['Electric'], years: [2022, 2023, 2024] },
      { id: 'ev9', name: 'EV9 Luxury SUV', bodyType: 'EV', fuels: ['Electric'], years: [2024] },
      { id: 'seltos', name: 'Seltos', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2019, 2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'sonet', name: 'Sonet', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2020, 2021, 2022, 2023, 2024], popular: true }
    ]
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    slug: 'volkswagen',
    popular: true,
    logoText: 'VW',
    models: [
      { id: 'ameo', name: 'Ameo', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020] },
      { id: 'beetle', name: 'Beetle', bodyType: 'Coupe', fuels: ['Petrol'], years: [2010, 2013, 2016] },
      { id: 'jetta', name: 'Jetta', bodyType: 'Sedan', fuels: ['Diesel', 'Petrol'], years: [2010, 2013, 2016] },
      { id: 'passat', name: 'Passat', bodyType: 'Luxury', fuels: ['Diesel'], years: [2011, 2014, 2018, 2020] },
      { id: 'polo', name: 'Polo', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2012, 2014, 2016, 2018, 2020, 2022], popular: true },
      { id: 'polo-gt', name: 'Polo GT TSI / TDI', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2014, 2017, 2020, 2022], popular: true },
      { id: 't-roc', name: 'T-Roc', bodyType: 'SUV', fuels: ['Petrol'], years: [2020, 2021] },
      { id: 'taigun', name: 'Taigun', bodyType: 'SUV', fuels: ['Petrol'], years: [2021, 2022, 2023, 2024], popular: true },
      { id: 'tiguan', name: 'Tiguan', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'tiguan-allspace', name: 'Tiguan Allspace 7-Seater', bodyType: 'SUV', fuels: ['Petrol'], years: [2020, 2021] },
      { id: 'vento', name: 'Vento', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2011, 2014, 2017, 2020, 2022], popular: true },
      { id: 'virtus', name: 'Virtus GT', bodyType: 'Sedan', fuels: ['Petrol'], years: [2022, 2023, 2024], popular: true }
    ]
  },
  {
    id: 'skoda',
    name: 'Skoda',
    slug: 'skoda',
    popular: true,
    logoText: 'SK',
    models: [
      { id: 'fabia', name: 'Fabia', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2008, 2011, 2013] },
      { id: 'karoq', name: 'Karoq', bodyType: 'SUV', fuels: ['Petrol'], years: [2020, 2021] },
      { id: 'kodiaq', name: 'Kodiaq 4x4', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2018, 2020, 2022, 2024] },
      { id: 'kushaq', name: 'Kushaq', bodyType: 'SUV', fuels: ['Petrol'], years: [2021, 2022, 2023, 2024], popular: true },
      { id: 'laura', name: 'Laura', bodyType: 'Sedan', fuels: ['Diesel', 'Petrol'], years: [2008, 2010, 2013] },
      { id: 'octavia', name: 'Octavia', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2014, 2017, 2019, 2021, 2023], popular: true },
      { id: 'octavia-vrs', name: 'Octavia vRS', bodyType: 'Sedan', fuels: ['Petrol'], years: [2017, 2020] },
      { id: 'rapid', name: 'Rapid', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2012, 2015, 2018, 2020, 2021] },
      { id: 'slavia', name: 'Slavia', bodyType: 'Sedan', fuels: ['Petrol'], years: [2022, 2023, 2024], popular: true },
      { id: 'superb', name: 'Superb L&K', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2012, 2016, 2019, 2021, 2024] },
      { id: 'yeti', name: 'Yeti 4x4', bodyType: 'SUV', fuels: ['Diesel'], years: [2011, 2014, 2016] }
    ]
  },
  {
    id: 'renault',
    name: 'Renault',
    slug: 'renault',
    logoText: 'RE',
    models: [
      { id: 'captur', name: 'Captur', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2020] },
      { id: 'duster', name: 'Duster AWD', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2012, 2015, 2018, 2020, 2022], popular: true },
      { id: 'fluence', name: 'Fluence', bodyType: 'Sedan', fuels: ['Diesel', 'Petrol'], years: [2011, 2014, 2016] },
      { id: 'kiger', name: 'Kiger Turbo', bodyType: 'SUV', fuels: ['Petrol'], years: [2021, 2022, 2023, 2024], popular: true },
      { id: 'koleos', name: 'Koleos 4x4', bodyType: 'SUV', fuels: ['Diesel'], years: [2011, 2014] },
      { id: 'kwid', name: 'Kwid Climber', bodyType: 'Hatchback', fuels: ['Petrol'], years: [2015, 2017, 2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'lodgy', name: 'Lodgy Stepway', bodyType: 'MUV', fuels: ['Diesel'], years: [2015, 2017, 2019] },
      { id: 'pulse', name: 'Pulse', bodyType: 'Hatchback', fuels: ['Diesel', 'Petrol'], years: [2012, 2014, 2017] },
      { id: 'scala', name: 'Scala', bodyType: 'Sedan', fuels: ['Diesel', 'Petrol'], years: [2012, 2015, 2017] },
      { id: 'triber', name: 'Triber', bodyType: 'MUV', fuels: ['Petrol'], years: [2019, 2021, 2022, 2023, 2024], popular: true }
    ]
  },
  {
    id: 'mg',
    name: 'MG Motor',
    slug: 'mg',
    logoText: 'MG',
    models: [
      { id: 'astor', name: 'Astor ADAS', bodyType: 'SUV', fuels: ['Petrol'], years: [2021, 2022, 2023, 2024] },
      { id: 'comet-ev', name: 'Comet EV', bodyType: 'EV', fuels: ['Electric'], years: [2023, 2024] },
      { id: 'gloster', name: 'Gloster 4WD', bodyType: 'Luxury', fuels: ['Diesel'], years: [2020, 2022, 2024] },
      { id: 'hector', name: 'Hector', bodyType: 'SUV', fuels: ['Petrol', 'Diesel', 'Hybrid'], years: [2019, 2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'hector-plus', name: 'Hector Plus 6/7-Seater', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2020, 2022, 2024] },
      { id: 'windsor-ev', name: 'Windsor EV', bodyType: 'EV', fuels: ['Electric'], years: [2024] },
      { id: 'zs-ev', name: 'ZS EV', bodyType: 'EV', fuels: ['Electric'], years: [2020, 2022, 2023, 2024], popular: true }
    ]
  },
  {
    id: 'nissan',
    name: 'Nissan',
    slug: 'nissan',
    logoText: 'NI',
    models: [
      { id: 'gt-r', name: 'GT-R Nismo', bodyType: 'Coupe', fuels: ['Petrol'], years: [2017, 2019, 2021] },
      { id: 'kicks', name: 'Kicks Turbo', bodyType: 'SUV', fuels: ['Petrol'], years: [2019, 2020, 2021, 2022] },
      { id: 'magnite', name: 'Magnite', bodyType: 'SUV', fuels: ['Petrol'], years: [2020, 2021, 2022, 2023, 2024], popular: true },
      { id: 'micra', name: 'Micra', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2010, 2013, 2016, 2019] },
      { id: 'micra-active', name: 'Micra Active', bodyType: 'Hatchback', fuels: ['Petrol'], years: [2013, 2016, 2019] },
      { id: 'sunny', name: 'Sunny', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2011, 2014, 2017, 2020] },
      { id: 'terrano', name: 'Terrano', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2013, 2016, 2019] },
      { id: 'x-trail', name: 'X-Trail 4x4', bodyType: 'SUV', fuels: ['Petrol', 'Hybrid'], years: [2011, 2014, 2024] }
    ]
  },
  {
    id: 'ford',
    name: 'Ford',
    slug: 'ford',
    logoText: 'FD',
    models: [
      { id: 'aspire', name: 'Figo Aspire', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel', 'CNG + Petrol'], years: [2015, 2017, 2019, 2021] },
      { id: 'ecosport', name: 'EcoSport Titanium', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2013, 2015, 2017, 2019, 2021], popular: true },
      { id: 'endeavour', name: 'Endeavour 4x4', bodyType: 'SUV', fuels: ['Diesel'], years: [2011, 2014, 2016, 2019, 2021], popular: true },
      { id: 'fiesta', name: 'Fiesta', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2011, 2014, 2016] },
      { id: 'figo', name: 'Figo', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2010, 2013, 2016, 2019, 2021], popular: true },
      { id: 'freestyle', name: 'Freestyle CUV', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2018, 2019, 2020, 2021] },
      { id: 'mustang', name: 'Mustang GT V8', bodyType: 'Coupe', fuels: ['Petrol'], years: [2016, 2018, 2020] }
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    slug: 'bmw',
    popular: true,
    logoText: 'BMW',
    models: [
      { id: '2-series', name: '2 Series Gran Coupe', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2020, 2022, 2024] },
      { id: '3-series', name: '3 Series Gran Limousine', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2018, 2020, 2022, 2024], popular: true },
      { id: '3-series-gt', name: '3 Series GT', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020] },
      { id: '5-series', name: '5 Series LWB', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024], popular: true },
      { id: '6-series-gt', name: '6 Series Gran Turismo', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2018, 2020, 2022, 2024] },
      { id: '7-series', name: '7 Series', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2016, 2019, 2022, 2024] },
      { id: 'x1', name: 'X1 sDrive', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024], popular: true },
      { id: 'x3', name: 'X3 xDrive', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2018, 2020, 2022, 2024], popular: true },
      { id: 'x4', name: 'X4 Coupe SUV', bodyType: 'Coupe', fuels: ['Petrol', 'Diesel'], years: [2019, 2021, 2023] },
      { id: 'x5', name: 'X5 xDrive', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'x6', name: 'X6 M Sport', bodyType: 'Coupe', fuels: ['Petrol'], years: [2018, 2021, 2023] },
      { id: 'x7', name: 'X7 7-Seater', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2019, 2021, 2023, 2024] },
      { id: 'i4', name: 'i4 eDrive', bodyType: 'EV', fuels: ['Electric'], years: [2022, 2023, 2024] },
      { id: 'ix', name: 'iX xDrive50', bodyType: 'EV', fuels: ['Electric'], years: [2022, 2023, 2024] },
      { id: 'ix1', name: 'iX1 EV', bodyType: 'EV', fuels: ['Electric'], years: [2023, 2024] },
      { id: 'z4', name: 'Z4 Roadster', bodyType: 'Coupe', fuels: ['Petrol'], years: [2019, 2021, 2024] }
    ]
  },
  {
    id: 'mercedes-benz',
    name: 'Mercedes-Benz',
    slug: 'mercedes-benz',
    popular: true,
    logoText: 'MB',
    models: [
      { id: 'a-class', name: 'A-Class Limousine', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2021, 2022, 2023, 2024] },
      { id: 'c-class', name: 'C-Class', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020, 2022, 2024], popular: true },
      { id: 'cla', name: 'CLA Urban Coupe', bodyType: 'Coupe', fuels: ['Petrol', 'Diesel'], years: [2015, 2017, 2019] },
      { id: 'cls', name: 'CLS 4-Door Coupe', bodyType: 'Coupe', fuels: ['Diesel'], years: [2016, 2019] },
      { id: 'e-class', name: 'E-Class LWB', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024], popular: true },
      { id: 'eqb', name: 'EQB 7-Seater EV', bodyType: 'EV', fuels: ['Electric'], years: [2022, 2024] },
      { id: 'eqe-suv', name: 'EQE SUV', bodyType: 'EV', fuels: ['Electric'], years: [2023, 2024] },
      { id: 'eqs', name: 'EQS 580 Sedan', bodyType: 'EV', fuels: ['Electric'], years: [2022, 2023, 2024] },
      { id: 'g-class', name: 'G-Class (G63 AMG)', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2018, 2021, 2024] },
      { id: 'gla', name: 'GLA', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024], popular: true },
      { id: 'glb', name: 'GLB 7-Seater', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2022, 2023, 2024] },
      { id: 'glc', name: 'GLC', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024], popular: true },
      { id: 'gle', name: 'GLE LWB', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2017, 2020, 2022, 2024] },
      { id: 'gls', name: 'GLS Maybach / GLS 450', bodyType: 'Luxury', fuels: ['Diesel', 'Petrol'], years: [2018, 2021, 2024] },
      { id: 's-class', name: 'S-Class S450 / Maybach', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2016, 2019, 2022, 2024] }
    ]
  },
  {
    id: 'audi',
    name: 'Audi',
    slug: 'audi',
    popular: true,
    logoText: 'AU',
    models: [
      { id: 'a3', name: 'A3 Sedan', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2014, 2017, 2019] },
      { id: 'a4', name: 'A4', bodyType: 'Luxury', fuels: ['Petrol'], years: [2016, 2018, 2020, 2022, 2024], popular: true },
      { id: 'a6', name: 'A6 Matrix', bodyType: 'Luxury', fuels: ['Petrol'], years: [2017, 2019, 2021, 2023, 2024], popular: true },
      { id: 'a8-l', name: 'A8 L', bodyType: 'Luxury', fuels: ['Petrol'], years: [2018, 2021, 2023, 2024] },
      { id: 'q2', name: 'Q2 Quattro', bodyType: 'SUV', fuels: ['Petrol'], years: [2020, 2021, 2022] },
      { id: 'q3', name: 'Q3', bodyType: 'SUV', fuels: ['Petrol'], years: [2016, 2018, 2020, 2022, 2023, 2024], popular: true },
      { id: 'q3-sportback', name: 'Q3 Sportback', bodyType: 'Coupe', fuels: ['Petrol'], years: [2023, 2024] },
      { id: 'q5', name: 'Q5 Quattro', bodyType: 'SUV', fuels: ['Petrol'], years: [2017, 2019, 2021, 2023, 2024], popular: true },
      { id: 'q7', name: 'Q7 7-Seater', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020, 2022, 2024] },
      { id: 'q8', name: 'Q8 / RS Q8', bodyType: 'Luxury', fuels: ['Petrol'], years: [2020, 2022, 2024] },
      { id: 'e-tron', name: 'e-tron 55 Quattro', bodyType: 'EV', fuels: ['Electric'], years: [2021, 2023, 2024] },
      { id: 'e-tron-gt', name: 'e-tron GT RS', bodyType: 'EV', fuels: ['Electric'], years: [2022, 2024] }
    ]
  },
  {
    id: 'jeep',
    name: 'Jeep',
    slug: 'jeep',
    popular: true,
    logoText: 'JP',
    models: [
      { id: 'compass', name: 'Compass 4x4', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2017, 2019, 2021, 2022, 2023, 2024], popular: true },
      { id: 'compass-trailhawk', name: 'Compass Trailhawk', bodyType: 'SUV', fuels: ['Diesel'], years: [2019, 2021, 2023] },
      { id: 'meridian', name: 'Meridian 7-Seater', bodyType: 'SUV', fuels: ['Diesel'], years: [2022, 2023, 2024], popular: true },
      { id: 'wrangler', name: 'Wrangler Rubicon', bodyType: 'SUV', fuels: ['Petrol'], years: [2019, 2021, 2022, 2023, 2024] },
      { id: 'grand-cherokee', name: 'Grand Cherokee L', bodyType: 'Luxury', fuels: ['Petrol'], years: [2022, 2023, 2024] }
    ]
  },
  {
    id: 'volvo',
    name: 'Volvo',
    slug: 'volvo',
    logoText: 'VO',
    models: [
      { id: 'c40-recharge', name: 'C40 Recharge EV', bodyType: 'EV', fuels: ['Electric'], years: [2023, 2024] },
      { id: 's60', name: 'S60', bodyType: 'Sedan', fuels: ['Petrol'], years: [2016, 2019, 2021] },
      { id: 's90', name: 'S90 Inscription', bodyType: 'Luxury', fuels: ['Diesel', 'Petrol'], years: [2017, 2020, 2022, 2024] },
      { id: 'xc40', name: 'XC40 B4', bodyType: 'SUV', fuels: ['Petrol'], years: [2018, 2020, 2022, 2024] },
      { id: 'xc40-recharge', name: 'XC40 Recharge EV', bodyType: 'EV', fuels: ['Electric'], years: [2022, 2023, 2024] },
      { id: 'xc60', name: 'XC60 B5 AWD', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2017, 2019, 2021, 2023, 2024] },
      { id: 'xc90', name: 'XC90 Excellence', bodyType: 'Luxury', fuels: ['Diesel', 'Hybrid'], years: [2016, 2019, 2022, 2024] }
    ]
  },
  {
    id: 'land-rover',
    name: 'Land Rover',
    slug: 'land-rover',
    logoText: 'LR',
    models: [
      { id: 'defender-90', name: 'Defender 90', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2020, 2022, 2024] },
      { id: 'defender-110', name: 'Defender 110', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2020, 2022, 2023, 2024], popular: true },
      { id: 'defender-130', name: 'Defender 130 8-Seater', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2023, 2024] },
      { id: 'discovery', name: 'Discovery', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2017, 2020, 2023] },
      { id: 'discovery-sport', name: 'Discovery Sport', bodyType: 'SUV', fuels: ['Diesel', 'Petrol'], years: [2016, 2019, 2021, 2024] },
      { id: 'range-rover', name: 'Range Rover Autobiography', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2018, 2021, 2023, 2024] },
      { id: 'range-rover-evoque', name: 'Range Rover Evoque', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2016, 2019, 2021, 2023, 2024], popular: true },
      { id: 'range-rover-sport', name: 'Range Rover Sport', bodyType: 'Luxury', fuels: ['Diesel', 'Petrol'], years: [2017, 2020, 2023, 2024] },
      { id: 'range-rover-velar', name: 'Range Rover Velar', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2018, 2020, 2022, 2024] }
    ]
  },
  {
    id: 'jaguar',
    name: 'Jaguar',
    slug: 'jaguar',
    logoText: 'JAG',
    models: [
      { id: 'f-pace', name: 'F-Pace Prestige', bodyType: 'SUV', fuels: ['Petrol', 'Diesel'], years: [2017, 2019, 2021, 2023, 2024], popular: true },
      { id: 'f-type', name: 'F-Type R-Dynamic', bodyType: 'Coupe', fuels: ['Petrol'], years: [2016, 2019, 2022] },
      { id: 'i-pace', name: 'I-Pace EV400', bodyType: 'EV', fuels: ['Electric'], years: [2021, 2023] },
      { id: 'xe', name: 'XE Sedan', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2016, 2018, 2020] },
      { id: 'xf', name: 'XF', bodyType: 'Luxury', fuels: ['Petrol', 'Diesel'], years: [2015, 2018, 2021, 2024] },
      { id: 'xj-l', name: 'XJ L Sovereign', bodyType: 'Luxury', fuels: ['Diesel'], years: [2014, 2017, 2019] }
    ]
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet',
    slug: 'chevrolet',
    logoText: 'CH',
    models: [
      { id: 'beat', name: 'Beat', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2010, 2012, 2014, 2016] },
      { id: 'cruze', name: 'Cruze LTZ', bodyType: 'Sedan', fuels: ['Diesel'], years: [2011, 2013, 2015, 2017], popular: true },
      { id: 'enjoy', name: 'Enjoy', bodyType: 'MUV', fuels: ['Diesel', 'Petrol'], years: [2013, 2015, 2017] },
      { id: 'sail-hatchback', name: 'Sail U-VA', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2012, 2014, 2016] },
      { id: 'sail-sedan', name: 'Sail Sedan', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2013, 2015, 2017] },
      { id: 'spark', name: 'Spark', bodyType: 'Hatchback', fuels: ['Petrol'], years: [2008, 2011, 2014] },
      { id: 'tavera', name: 'Tavera Neo', bodyType: 'MUV', fuels: ['Diesel'], years: [2008, 2011, 2014, 2016] }
    ]
  },
  {
    id: 'fiat',
    name: 'Fiat',
    slug: 'fiat',
    logoText: 'FIAT',
    models: [
      { id: 'abarth-punto', name: 'Abarth Punto (145hp)', bodyType: 'Hatchback', fuels: ['Petrol'], years: [2015, 2017, 2019] },
      { id: 'avventura', name: 'Avventura CUV', bodyType: 'Hatchback', fuels: ['Diesel', 'Petrol'], years: [2014, 2016, 2018] },
      { id: 'linea', name: 'Linea T-Jet', bodyType: 'Sedan', fuels: ['Petrol', 'Diesel'], years: [2010, 2013, 2016] },
      { id: 'palio', name: 'Palio Stile', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2006, 2009] },
      { id: 'punto-evo', name: 'Punto Evo', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2014, 2016, 2018] },
      { id: 'urban-cross', name: 'Urban Cross', bodyType: 'Hatchback', fuels: ['Petrol', 'Diesel'], years: [2016, 2018] }
    ]
  }
];
