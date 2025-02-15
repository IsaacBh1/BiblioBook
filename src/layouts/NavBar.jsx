const navStyle = {
  container: {
    zIndex: 10,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F2EFE7",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    padding: "0.5rem 1.5rem 0.5rem 1.5rem ",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  },
  logo: {
    color: "#404040",
    fontfamily: "serif",
    fontSize: "1.2rem",
  },
  img: {
    width: "1.5rem",
    height: "1.5rem",
    cursor: "pointer",
  },
};

function Navbar({openSideBarClickHandler}) {
  return (
    <nav style={navStyle.container}>
      <img
        src="src/assets/list.svg"
        alt="list all"
        onClick = {() => openSideBarClickHandler(true)}
        style={navStyle.img}
      />
      <h1 style={navStyle.logo}>BiblioBook</h1>
      <img
        src="src/assets/search.svg"
        alt="search"
        style={navStyle.img}
      />
    </nav>
  );
}

export { Navbar };
