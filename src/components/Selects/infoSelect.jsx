import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { FinanceContext } from "../../Context/context";
import { getChosenInfo } from "../../Reducer/action";

export default function InfoSelect() {
  const [info, setInfo] = useState("");
  const { dispatch } = useContext(FinanceContext);
  const handleChange = (event) => {
    setInfo(event.target.value);
    dispatch(getChosenInfo(event.target.value));
  };

  return (
    <Form.Select
      id="demo-simple-select"
      value={info}
      label="Ma'lumotlar"
      onChange={handleChange}
      size="lg"
      style={{ cursor: "pointer" }}
    >
      <option  value={"ARIZALAR"}>Arizalar soni</option>
      <option value={"SUMMA"}>To'langan summa</option>
    </Form.Select>
  );
}
