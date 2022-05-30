import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import UseSorting from "../hooks/sorting";
import Pagination from "./pagination";
import CancelIcon from "@mui/icons-material/Cancel";
import Popup from "./modal";

const HotelCards = (props) => {
  const { sortType } = props;
  const [hotels] = UseSorting(sortType);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(5);
  const lastHotel = currentPage * hotelsPerPage;
  const firstHotel = lastHotel - hotelsPerPage;
  const currentHotel = hotels.slice(firstHotel, lastHotel);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="hotel-list">
      {currentHotel.map((hotel, index) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            <Card className="hotel-list__card">
              <CardMedia
                className="hotel-list__media"
                image={hotel.hotelImage}
                alt="Hotel image"
              />
              <div>
                <CardContent className="hotel-list__card-content">
                  <p className="hotel-list__hotel-name">{hotel.hotelName}</p>
                  <div className="hotel-list__hotel-div">
                    <p className="hotel-list__hotel-score">
                      {hotel.hotelScore} Puan
                    </p>
                  </div>
                </CardContent>
                <CardActions style={{ padding: "16px 0px 0px 10px" }}>
                  <button className="hotel-list__card-actions">
                    PUAN ARTIR
                  </button>
                  <button className="hotel-list__card-actions">
                    PUAN AZALT
                  </button>
                </CardActions>
              </div>
            </Card>
            <i className="delete-item">
              <CancelIcon
                className="delete-item__icon"
                onClick={() => setOpenPopup(true)}
              ></CancelIcon>
            </i>
            <Popup
              title={"Oteli Sil"}
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            ></Popup>
          </div>
        );
      })}
      <Pagination
        hotelsPerPage={hotelsPerPage}
        hotelNumber={hotels.length}
        paginate={paginate}
      />
    </div>
  );
};

export default HotelCards;
