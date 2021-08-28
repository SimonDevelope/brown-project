import './svg.scss';

export const HamburgerIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="hamburger-svg-attr">
      <path d="M 21 6 H 3 V 5 h 18 V 6 Z M 21 11 H 3 v 1 h 18 V 11 Z M 21 17 H 3 v 1 h 18 V 17 Z"></path>
    </svg>
  );
};

export const BellIcon = () => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="bell-svg-attr">
      <path d="M16,29a4,4,0,0,1-4-4,1,1,0,0,1,1-1h6a1,1,0,0,1,1,1A4,4,0,0,1,16,29Zm-1.73-3a2,2,0,0,0,3.46,0Z M18,7H14a1,1,0,0,1-1-1,3,3,0,0,1,6,0A1,1,0,0,1,18,7ZM16,5h0Z M27,26H5a1,1,0,0,1-1-1,7,7,0,0,1,3-5.75V14a9,9,0,0,1,8.94-9h.11a9,9,0,0,1,9,9v5.25A7,7,0,0,1,28,25h0A1,1,0,0,1,27,26ZM6.1,24H25.9a5,5,0,0,0-2.4-3.33,1,1,0,0,1-.5-.87V14A7,7,0,1,0,9,14v5.8a1,1,0,0,1-.5.87A5,5,0,0,0,6.1,24Z" />
    </svg>
  );
};