import { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';

export const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <BounceLoader 
          color="#6ee7b7"
          size={60}
          speedMultiplier={1.5}
        />
      </div>
    );
  }

  return <div className="animate-fadeIn">{children}</div>;
};
