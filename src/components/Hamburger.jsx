import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'

const HamburgerContainer = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
  );
  
}

export default HamburgerContainer;
