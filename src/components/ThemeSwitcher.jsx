import React, { useEffect, useState } from 'react';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

function ThemeSwitcher() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      type='button'
      onClick={handleThemeSwitch}
    >
      {theme === 'dark' ? <img className='hover:animate-spin' src={sun} alt="sun"/> : <img className='animate-pulse' src={moon} alt="moon"/>}
    </button>
  );
}

export default ThemeSwitcher;
