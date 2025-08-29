import { useEffect } from 'react';

const EnvTest = () => {
  useEffect(() => {
    console.log('🔍 Environment Variable Test:');
    console.log('VITE_GEMINI_API_KEY:', import.meta.env.VITE_GEMINI_API_KEY?.substring(0, 15) + '...');
    console.log('All env vars:', import.meta.env);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, background: 'red', color: 'white', padding: '10px', zIndex: 9999 }}>
      ENV TEST: {import.meta.env.VITE_GEMINI_API_KEY ? 'KEY FOUND' : 'NO KEY'}
    </div>
  );
};

export default EnvTest;
