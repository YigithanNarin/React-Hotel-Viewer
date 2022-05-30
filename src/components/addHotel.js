import React from "react";
import AddIcon from "@mui/icons-material/Add";

const AddHotel = () => {
  const add = () => {
    alert("hotel add clicked");
  };

  return (
    <div className="add-hotel"><button className="add-hotel__button" onClick={add}>
        <AddIcon style={{ fontSize: 28 }} />
      </button>
      <h1 className="add-hotel__title">OTEL EKLE</h1>
    </div>
  );
};

export default AddHotel;
