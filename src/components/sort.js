import React, { useState } from "react";
import HotelCards from "./hotelCards";

const Sort = () => {
  const [selectValue, setSelectValue] = useState("ascending");
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <>
      <div className="sorting">
        <select
          defaultValue={"Sıralama"}
          className="sorting__select"
          name="sorting"
          id="sorting"
          onChange={handleSelectChange}
        >
          <option disabled hidden>
            Sıralama
          </option>
          <option value="ascending">Puan (Artan)</option>
          <option value="descending">Puan (Azalan)</option>
        </select>
        <div className="sorting__icon">
          <i className="arrow down"></i>
        </div>
      </div>
      <HotelCards sortType={selectValue} />
    </>
  );
};

export default Sort;
