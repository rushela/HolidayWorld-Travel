import { BookIcon } from 'lucide-react';

export function FloatingBookButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed right-6 bottom-6 z-50 bg-teal-500 hover:bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-teal-300"
      aria-label="Book your trip"
    >
      <BookIcon size={32} />
    </button>
  );
} 