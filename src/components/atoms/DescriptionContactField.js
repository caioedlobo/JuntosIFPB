import React from "react";
import { TextField } from "@mui/material";
const DescriptionContactField = (props) => {
  const handleDescriptionData = (event) => {
    props.descriptionData(event.target.value);
  };

  return (
    <div data-testid="description-contact-field" style={{ width: "100%" }}>
      <TextField
        style={{ width: "100%", marginTop: "28px" }}
        placeholder="Comentário"
        multiline
        rows={4}
        variant="outlined"
        onChange={handleDescriptionData}
        required={true}
      ></TextField>
    </div>
  );
};

export default DescriptionContactField;
