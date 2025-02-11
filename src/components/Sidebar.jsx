import PropTypes from "prop-types";
import { MenuItem } from "./MenuItem";


const defaultStyles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)'
  },
  welcomeSection: {
    color: '#2c3e50',
    marginBottom: '30px',
    fontSize: '1.5rem',
    paddingBottom: '10px',
    borderBottom: '2px solid #ecf0f1'
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }
};



const Sidebar = ({ username, onMenuItemClick, styles = {} }) => {
  const mergedStyles = { ...defaultStyles, ...styles };
  const menuItems = [
    { name: "Profile", icon: "👤" },
    { name: "Catalog", icon: "📚" },
    { name: "Friends", icon: "👥" },
    { name: "Groups", icon: "🕴️" },
    { name: "Events", icon: "📅" },
    { name: "Settings", icon: "⚙️" },
    { name: "Sign out", icon: "🚪" },
  ];

  return (
    <div style={mergedStyles.sidebar}>
      <div style={mergedStyles.welcomeSection}>
        <h2>Welcome, {username}!</h2>
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
