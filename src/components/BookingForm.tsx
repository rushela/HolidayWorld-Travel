import React from 'react';
import { CalendarIcon, UsersIcon, MapPinIcon, SendIcon, XIcon } from 'lucide-react';

interface BookingFormProps {
  open?: boolean;
  onClose?: () => void;
}

export function BookingForm({ open = true, onClose }: BookingFormProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
        onClick={onClose}
      />
      {/* Booking Form */}
      <div className="relative m-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80">
          <div className="bg-teal-500 p-4 text-white flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Book Your Trip</h3>
              <p className="text-sm font-light opacity-90">
                Start planning your Sri Lankan adventure
              </p>
            </div>
            <button
              className="ml-4 p-1 rounded-full hover:bg-teal-600 transition-colors"
              onClick={onClose}
              aria-label="Close booking form"
            >
              <XIcon size={20} />
            </button>
          </div>
          <form className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Destination
                </label>
                <div className="relative">
                  <MapPinIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option value="">Select destination</option>
                    <option value="colombo">Colombo</option>
                    <option value="kandy">Kandy</option>
                    <option value="galle">Galle</option>
                    <option value="ella">Ella</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Check In
                  </label>
                  <div className="relative">
                    <CalendarIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Guests</label>
                  <div className="relative">
                    <UsersIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full bg-sunset-400 hover:bg-sunset-500 text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                Check Availability
                <SendIcon size={18} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}