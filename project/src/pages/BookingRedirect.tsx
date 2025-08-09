import { useEffect } from 'react';

const BookingRedirect: React.FC = () => {
  useEffect(() => {
    // Redirect to Vagaro booking page
    window.location.href = 'https://www.vagaro.com/bortemicroblading/book-now';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F7F5]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#E6DAD2] mx-auto mb-4"></div>
        <h2 className="text-2xl font-medium text-[#2D2D2B] mb-2">Redirecting to Booking...</h2>
        <p className="text-[#2D2D2B]/70">
          You're being redirected to our secure booking system.
        </p>
        <p className="text-sm text-[#2D2D2B]/60 mt-4">
          If you're not redirected automatically, 
          <a 
            href="https://www.vagaro.com/bortemicroblading/book-now" 
            className="text-[#E6DAD2] hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default BookingRedirect;
