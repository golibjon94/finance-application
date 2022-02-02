import React, { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../../Context/context";
import { addInfos } from "../../Reducer/action";
import Form from "react-bootstrap/Form";

export default function YearSelect() {
  const [yil, setYil] = useState("");
  const { state, dispatch } = useContext(FinanceContext);
  const handleChange = (event) => {
    setYil(event.target.value);
  };
  useEffect(() => {
    const newObj = {
      ...state.financeInfos,
      paymentYear: yil,
    };
    dispatch(addInfos(newObj));
  }, [yil]);

  const years = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];
  return (
    <Form.Select
      id="demo-simple-select"
      value={yil}
      label="Yil"
      onChange={handleChange}
      size="lg"
      style={{ cursor: "pointer" }}
    >
      <option style={{ cursor: "pointer" }}>Yilni tanlash</option>
      {years.map((year, index) => (
        <option style={{ cursor: "pointer" }} key={index} value={year}>
          {year}
        </option>
      ))}
    </Form.Select>
  );
}
