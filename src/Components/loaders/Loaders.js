/**
 * @file Loaders.js
 * @description This file contains the loader component
 * @exports {Object} Loaders
 */

const Loaders = () => {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        fontSize: "2rem",
        fontWeight: "bold"
      }}>
        ...Loading
      </div>
    </>
  );
};

export default Loaders
