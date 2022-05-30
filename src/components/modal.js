import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

export default function Popup(props) {
  const { title, openPopup, setOpenPopup } = props;

  return (
    <Dialog style={{ opacity: "0.5" }} open={openPopup}>
      <DialogTitle style={{ fontWeight: "bold" }}>{title}</DialogTitle>
      <DialogContent>
        <div>Oteli silmek istediğinizden emin misiniz?</div>
        <div className="popup-div">
          <button
            className="popup-div__button1"
            onClick={() => setOpenPopup(false)}
          >
            OTELİ SİL
          </button>
          <button
            className="popup-div__button2"
            onClick={() => setOpenPopup(false)}
          >
            VAZGEÇ
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
