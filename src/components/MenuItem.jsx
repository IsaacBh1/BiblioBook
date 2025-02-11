import { useState } from 'react';
import PropTypes from 'prop-types';


const MenuItem = ({ name, icon, onClick, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultItemStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 15px',
    border: 'none',
    background: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#EAE2C6',
    fontSize: '1rem',
    ...style,
    ...(isHovered && {
      backgroundColor: '#e8e8e8',
      transform: 'translateX(5px)'
    }),
    ...(name === 'Sign out' && {
      color: '#EAE2C6',
      marginTop: '20px',
      '&:hover': {
        backgroundColor: '#fbe9e7'
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
      <span style={{ marginRight: '12px', fontSize: '1.2rem' }}>{icon}</span>
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
