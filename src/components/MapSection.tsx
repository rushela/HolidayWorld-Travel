import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const destinations = [{
  name: 'Colombo',
  lat: 6.9271,
  lng: 79.8612,
  description: 'The vibrant capital city'
}, {
  name: 'Kandy',
  lat: 7.2906,
  lng: 80.6337,
  description: 'Cultural heart of Sri Lanka'
}, {
  name: 'Galle',
  lat: 6.0535,
  lng: 80.221,
  description: 'Historic fort city on the coast'
}, {
  name: 'Sigiriya',
  lat: 7.957,
  lng: 80.7603,
  description: 'Ancient rock fortress'
}, {
  name: 'Ella',
  lat: 6.8667,
  lng: 81.0466,
  description: 'Scenic mountain village'
}, {
  name: 'Trincomalee',
  lat: 8.5922,
  lng: 81.1995,
  description: 'Beautiful beaches and natural harbor'
}, {
  name: 'Yala',
  lat: 6.3735,
  lng: 81.5089,
  description: 'Famous wildlife national park'
}];
export function MapSection() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize map
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [7.8731, 80.7718],
        zoom: 8,
        scrollWheelZoom: false
      });
      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);
      // Custom icon
      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `<div class="marker-pin bg-teal-500 shadow-lg"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30]
      });
      // Add markers for destinations
      destinations.forEach(destination => {
        const marker = L.marker([destination.lat, destination.lng], {
          icon: customIcon
        }).addTo(mapInstanceRef.current);
        marker.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold">${destination.name}</h3>
            <p>${destination.description}</p>
          </div>
        `);
        // Add hover effect
        marker.on('mouseover', function () {
          this.openPopup();
        });
      });
    }
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);
  return <section className="py-20 bg-white" id="destinations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Sri Lanka
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the diverse destinations across the island. Click on the
            map markers to learn more about each location.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div ref={mapRef} className="h-[500px] w-full"></div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.slice(0, 4).map((destination, index) => <div key={index} className="text-center">
              <h3 className="font-semibold text-lg mb-1">{destination.name}</h3>
              <p className="text-gray-600 text-sm">{destination.description}</p>
            </div>)}
        </div>
      </div>
      <style jsx>{`
        .custom-map-marker {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .marker-pin {
          width: 20px;
          height: 20px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: rotate(-45deg) scale(1);
          }
          50% {
            transform: rotate(-45deg) scale(1.2);
          }
          100% {
            transform: rotate(-45deg) scale(1);
          }
        }
      `}</style>
    </section>;
}