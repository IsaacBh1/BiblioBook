import PropTypes from "prop-types";

const ProfileHeader = ({ user }) => {
  const styles = {
    profileHeader: {
      display: "flex",
      alignItems: "center",
      background: "white",
      padding: "2rem",
      borderRadius: "15px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      marginBottom: "2rem",
    },
    profileImg: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      marginRight: "2rem",
      border: "4px solid #fff",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    profileInfo: {
      flex: 1,
    },
  };

  return (
    <div style={styles.profileHeader}>
      <img src={user.profilePic} alt="Profile" style={styles.profileImg} />
      <div style={styles.profileInfo}>
        <h1 style={{ margin: "0 0 0.5rem", color: "#2d3436" }}>{user.name}</h1>
        <p style={{ color: "#636e72", marginBottom: "1rem" }}>{user.bio}</p>
      </div>
    </div>
  );
};
ProfileHeader.propTypes = {
  user: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export { ProfileHeader };
