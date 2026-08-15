import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import VehicleCard from './VehicleCard';
import './Fleet.css';

const FLEET_DATA = [
  // ================= ECONOMY (16) =================
  {
    id: 'spresso',
    name: 'SUZUKI SPRESSO',
    category: 'ECONOMY',
    categoryTag: 'COMPACT CITY',
    transmission: 'AUTOMATIC',
    seats: 4,
    luggage: '1 Bag',
    image: '/images/suzuki-spresso.jpg'
  },
  {
    id: 'celerio',
    name: 'SUZUKI CELERIO',
    category: 'ECONOMY',
    categoryTag: 'ECONOMY',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: '/images/suzuki-celerio.jpg'
  },
  {
    id: 'march',
    name: 'NISSAN MARCH',
    category: 'ECONOMY',
    categoryTag: 'COMPACT HATCH',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: '/images/nissan-march.jpg'
  },
  {
    id: 'grand-i10',
    name: 'HYUNDAI GRAND I10',
    category: 'ECONOMY',
    categoryTag: 'CITY HATCH',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: '/images/hyundai-grand-i10.jpg'
  },
  {
    id: 'picanto',
    name: 'KIA PICANTO',
    category: 'ECONOMY',
    categoryTag: 'MINI CITY',
    transmission: 'AUTOMATIC',
    seats: 4,
    luggage: '1 Bag',
    image: '/images/kia-picanto.jpg'
  },
  {
    id: 'swift',
    name: 'SUZUKI SWIFT',
    category: 'ECONOMY',
    categoryTag: 'ECONOMY',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: '/images/suzuki-swift.jpg'
  },
  {
    id: 'baleno',
    name: 'SUZUKI BALENO',
    category: 'ECONOMY',
    categoryTag: 'PREMIUM HATCH',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: '/images/suzuki-baleno.jpg'
  },
  {
    id: 'yaris',
    name: 'TOYOTA YARIS',
    category: 'ECONOMY',
    categoryTag: 'COMPACT',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: '/images/toyota-yaris.jpg'
  },
  {
    id: 'vitz',
    name: 'TOYOTA VITZ',
    category: 'ECONOMY',
    categoryTag: 'CITY HATCH',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aqua',
    name: 'TOYOTA AQUA',
    category: 'ECONOMY',
    categoryTag: 'HYBRID COMPACT',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jazz',
    name: 'HONDA JAZZ',
    category: 'ECONOMY',
    categoryTag: 'SPACE HATCH',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mirage',
    name: 'MITSUBISHI MIRAGE',
    category: 'ECONOMY',
    categoryTag: 'ECONOMY',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rio',
    name: 'KIA RIO',
    category: 'ECONOMY',
    categoryTag: 'COMPACT HATCH',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'clio',
    name: 'RENAULT CLIO',
    category: 'ECONOMY',
    categoryTag: 'EUROPEAN HATCH',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bezza',
    name: 'PERODUA BEZZA',
    category: 'ECONOMY',
    categoryTag: 'COMPACT SEDAN',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dzire-2025',
    name: 'SUZUKI DZIRE (NEW SHAPE 2025)',
    category: 'ECONOMY',
    categoryTag: 'SEDAN 2025',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },

  // ================= SUV (18) =================
  {
    id: 'brezza',
    name: 'SUZUKI BREZZA',
    category: 'SUV',
    categoryTag: 'COMPACT SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'magnite',
    name: 'NISSAN MAGNITE',
    category: 'SUV',
    categoryTag: 'URBAN SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fronx',
    name: 'SUZUKI FRONX',
    category: 'SUV',
    categoryTag: 'COUPE SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'raize',
    name: 'TOYOTA RAIZE',
    category: 'SUV',
    categoryTag: 'COMPACT SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'exter',
    name: 'HYUNDAI EXTER',
    category: 'SUV',
    categoryTag: 'MICRO SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rush',
    name: 'TOYOTA RUSH',
    category: 'SUV',
    categoryTag: '7-SEATER SUV',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'grand-vitara',
    name: 'SUZUKI GRAND VITARA',
    category: 'SUV',
    categoryTag: 'FULL SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'outlander-sport',
    name: 'MITSUBISHI OUTLANDER SPORT',
    category: 'SUV',
    categoryTag: 'CROSSOVER SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vezel',
    name: 'HONDA VEZEL',
    category: 'SUV',
    categoryTag: 'HYBRID SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sonet',
    name: 'KIA SONET',
    category: 'SUV',
    categoryTag: 'COMPACT SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'creta',
    name: 'HYUNDAI CRETA',
    category: 'SUV',
    categoryTag: 'MID SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'captur',
    name: 'RENAULT CAPTUR',
    category: 'SUV',
    categoryTag: 'EUROPEAN SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cx3',
    name: 'MAZDA CX-3',
    category: 'SUV',
    categoryTag: 'PREMIUM SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aruz',
    name: 'PERODUA ARUZ',
    category: 'SUV',
    categoryTag: '7-SEATER SUV',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jolion',
    name: 'HAVAL JOLION',
    category: 'SUV',
    categoryTag: 'MODERN SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sportage',
    name: 'KIA SPORTAGE',
    category: 'SUV',
    categoryTag: 'FAMILY SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eclipse-cross',
    name: 'MITSUBISHI ECLIPSE CROSS',
    category: 'SUV',
    categoryTag: 'TURBO SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tucson',
    name: 'HYUNDAI TUCSON',
    category: 'SUV',
    categoryTag: 'FULL SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },

  // ================= 4X4 (2) =================
  {
    id: 'jimny',
    name: 'SUZUKI JIMNY',
    category: '4X4',
    categoryTag: 'ALL-TERRAIN 4X4',
    transmission: 'AUTOMATIC',
    seats: 4,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jetour-t2',
    name: 'JETOUR T2',
    category: '4X4',
    categoryTag: 'OFF-ROAD 4X4',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },

  // ================= PICK-UP (5) =================
  {
    id: 'hilux',
    name: 'TOYOTA HILUX',
    category: 'PICK-UP',
    categoryTag: 'DOUBLE CAB 4X4',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '5 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'triton',
    name: 'MITSUBISHI TRITON',
    category: 'PICK-UP',
    categoryTag: 'DOUBLE CAB 4X4',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '5 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bt50',
    name: 'MAZDA BT-50',
    category: 'PICK-UP',
    categoryTag: 'PREMIUM PICK-UP',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '5 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ranger-xlt',
    name: 'FORD RANGER XLT',
    category: 'PICK-UP',
    categoryTag: 'HEAVY DUTY 4X4',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '5 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hunter',
    name: 'CHANGAN HUNTER',
    category: 'PICK-UP',
    categoryTag: 'TURBO PICK-UP',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '5 Bags',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80'
  },

  // ================= FAMILY (9) =================
  {
    id: 'ciaz',
    name: 'SUZUKI CIAZ',
    category: 'FAMILY',
    categoryTag: 'COMFORT SEDAN',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'virtus',
    name: 'VOLKSWAGEN VIRTUS',
    category: 'FAMILY',
    categoryTag: 'GERMAN SEDAN',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mg5',
    name: 'MG 5',
    category: 'FAMILY',
    categoryTag: 'EXECUTIVE SEDAN',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ertiga',
    name: 'SUZUKI ERTIGA',
    category: 'FAMILY',
    categoryTag: '7-SEATER MPV',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'xl6',
    name: 'SUZUKI XL6',
    category: 'FAMILY',
    categoryTag: 'PREMIUM 6-SEATER',
    transmission: 'AUTOMATIC',
    seats: 6,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sienta',
    name: 'TOYOTA SIENTA',
    category: 'FAMILY',
    categoryTag: '7-SEATER COMPACT',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'xpander',
    name: 'MITSUBISHI XPANDER',
    category: 'FAMILY',
    categoryTag: '7-SEATER MPV',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'xpander-cross',
    name: 'MITSUBISHI XPANDER CROSS',
    category: 'FAMILY',
    categoryTag: 'CROSSOVER MPV',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'carens',
    name: 'KIA CARENS',
    category: 'FAMILY',
    categoryTag: 'PREMIUM 7-SEATER',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },

  // ================= PREMIUM (12) =================
  {
    id: 'mini-convertible',
    name: 'MINI COOPER CONVERTIBLE',
    category: 'PREMIUM',
    categoryTag: 'CABRIOLET',
    transmission: 'AUTOMATIC',
    seats: 4,
    luggage: '2 Bags',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cla-180',
    name: 'MERCEDES CLA 180',
    category: 'PREMIUM',
    categoryTag: 'LUXURY COUPE',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gle-450',
    name: 'MERCEDES GLE 450',
    category: 'PREMIUM',
    categoryTag: 'LUXURY SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '5 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'v-class',
    name: 'MERCEDES V-CLASS',
    category: 'PREMIUM',
    categoryTag: 'VIP MINIVAN',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '6 Bags',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bmw-x1-2021',
    name: 'BMW X1 (2021)',
    category: 'PREMIUM',
    categoryTag: 'COMPACT LUXURY',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bmw-x3',
    name: 'BMW X3',
    category: 'PREMIUM',
    categoryTag: 'LUXURY SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bmw-x5',
    name: 'BMW X5',
    category: 'PREMIUM',
    categoryTag: 'EXECUTIVE SUV',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '5 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bmw-x7',
    name: 'BMW X7',
    category: 'PREMIUM',
    categoryTag: 'FLAGSHIP SUV',
    transmission: 'AUTOMATIC',
    seats: 7,
    luggage: '5 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bmw-3-series',
    name: 'BMW 3 SERIES',
    category: 'PREMIUM',
    categoryTag: 'SPORTS SEDAN',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '3 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bmw-5-series',
    name: 'BMW 5 SERIES',
    category: 'PREMIUM',
    categoryTag: 'EXECUTIVE SEDAN',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 SERIES',
    category: 'PREMIUM',
    categoryTag: 'LUXURY SALOON',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bmw-i7',
    name: 'BMW I7',
    category: 'PREMIUM',
    categoryTag: 'ELECTRIC LUXURY',
    transmission: 'AUTOMATIC',
    seats: 5,
    luggage: '4 Bags',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80'
  }
];

const CATEGORIES = ['ALL', 'ECONOMY', 'SUV', '4X4', 'PICK-UP', 'FAMILY', 'PREMIUM'];
const BATCH_SIZE = 12;

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const filteredFleet = activeCategory === 'ALL'
    ? FLEET_DATA
    : FLEET_DATA.filter((item) => item.category === activeCategory);

  const displayedFleet = filteredFleet.slice(0, visibleCount);
  const hasMore = visibleCount < filteredFleet.length;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(BATCH_SIZE);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + BATCH_SIZE);
  };

  const scrollToWidget = () => {
    const widgetElem = document.getElementById('hero');
    if (widgetElem) {
      widgetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cars" className="fleet-section section-padding">
      <div className="container">
        {/* Header Bar */}
        <div className="fleet-top-bar">
          <div className="fleet-title-block">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span>RIDEMORIS FLEET</span>
            </div>
            <h2 className="fleet-heading">FEATURED CARS</h2>
          </div>

          {/* Category Filter Pills */}
          <div className="category-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="fleet-grid">
          {displayedFleet.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="fleet-show-more-wrapper">
            <button onClick={handleShowMore} className="btn-show-more" aria-label="Show more vehicles">
              <span>SHOW MORE</span>
              <ChevronDown size={18} />
            </button>
          </div>
        )}

        {/* Bottom Callout */}
        <div className="fleet-bottom-bar">
          <p className="fleet-note">
            All RideMoris vehicles are air-conditioned, regularly serviced, and supplied with full comprehensive insurance options.
          </p>
          <button onClick={scrollToWidget} className="btn-secondary">
            VIEW ALL CARS
          </button>
        </div>
      </div>
    </section>
  );
}
