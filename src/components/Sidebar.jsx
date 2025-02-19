import PropTypes from "prop-types";
import { MenuItem } from "./MenuItem";
import { useState } from "react";

const Sidebar = ({ username, onMenuItemClick, styles = {}, CloseSideBarHandler }) => {
  const [closeSidebar, ] = useState(false);
  
  const defaultStyles = {
    sidebar: {
      width: closeSidebar ? '0' : '250px',
      height: '100vh',
      backgroundColor: '#F2EFE7',
      padding: '20px',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      position: 'fixed',
      top: 0,
      left:0 , 
      // left: closeSidebar ? '-250px' : '0',
      zIndex: 20,
      transition: "3s" , 
    },
    welcomeSection: {
      color: '#252525',
      marginBottom: '30px',
      fontSize: '1.5rem',
      paddingBottom: '10px',
      borderBottom: '2px solid #EAE2C6'
    },
    menu: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    closeBtnStyle: {
      position: "absolute",
      right: "0.5rem",
      top: "0.5rem",
      cursor: "pointer"
    }
    };
  
    Sidebar.propTypes = {
      username: PropTypes.string.isRequired,
      onMenuItemClick: PropTypes.func.isRequired,
      styles: PropTypes.object,
      CloseSideBarHandler: PropTypes.func.isRequired,
  };

  const mergedStyles = { ...defaultStyles, ...styles };
  const menuItems = [
    { name: "Profile", icon: "src/assets/user-circle-fill.svg" },
    { name: "Favorites", icon: "src/assets/bookmark-fill.svg" },
    { name: "Catalog", icon: "src/assets/books-fill.svg" },
    { name: "Groups", icon: "src/assets/users-three-fill.svg" },
    { name: "Settings", icon: "src/assets/gear-fill.svg" },
    { name: "Sign out", icon: "src/assets/sign-out-fill.svg" },
  ];

  return (
    <div style={mergedStyles.sidebar}>
      <img src="src/assets/x.svg" alt="close" style={defaultStyles.closeBtnStyle} onClick={() => CloseSideBarHandler(false)} />
      <div style={mergedStyles.welcomeSection}>
        <h4 style={{ color: "#252525" }}>Welcome, {username}!</h4>
      </div>

      <nav style={mergedStyles.menu}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            onClick={() => onMenuItemClick(item.name)}
            style={mergedStyles.menuItem}
          />
        ))}
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  username: PropTypes.string.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
  styles: PropTypes.object,
};

export { Sidebar };
