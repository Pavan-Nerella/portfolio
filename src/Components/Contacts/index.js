import "./index.css";

const Contacts = () => {
  const imgClicked = () => {
    window.location.replace(
      "https://www.linkedin.com/in/nerella-pavan-53342624a"
    );
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <hr
        style={{
          color: "white",
          borderColor: "white",
          marginBottom: "8px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      />
      <h1 style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
        {" "}
        Contacts
      </h1>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="f-img"
          className="c-img"
          onClick={imgClicked}
        />
      </div>
    </div>
  );
};

export default Contacts;
