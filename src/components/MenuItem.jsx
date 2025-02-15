import { useState } from 'react';
import PropTypes from 'prop-types';


const   MenuItem = ({ name, icon, onClick, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultItemStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 15px',
    border: 'none',
    backgroundColor: ' #e8e8e8',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: ' #363636',
    fontSize: '1.2rem',
    ...style,
    ...(isHovered && {
      backgroundColor: " #aaa" , 
      transform: 'translateX(7px)'
    }),
    ...(name === 'Sign out' && {
      color: '#363636',
      marginTop: '20px',
      '&:hover': {
        backgroundColor: ' #aaa'
      }
    })
  };

  return (
    <button
      style={defaultItemStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ marginRight: '12px', fontSize: '1.2rem' }}>
        <img src={icon} alt={icon} />
      </span>
      {name}
    </button>
  );
};
MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object
};

export {MenuItem}
