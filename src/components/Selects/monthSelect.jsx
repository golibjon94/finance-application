import React, { useState, useEffect, useContext } from "react";
import { FinanceContext } from "../../Context/context";
import { addInfos } from "../../Reducer/action";
import Form from "react-bootstrap/Form";

export default function MonthSelect() {
  const [oy, setOy] = useState("");
  const { state, dispatch } = useContext(FinanceContext);

  const handleChange = (event) => {
    setOy(event.target.value);
  };
  useEffect(() => {
    const newObj = {
      ...state.financeInfos,
      paymentMonth: oy,
    };
    dispatch(addInfos(newObj));
  }, [oy]);

  const months = [
    {
      monthId: "1",
      monthName: "Yanvar",
    },
    {
      monthId: "2",
      monthName: "Fevral",
    },
    {
      monthId: "3",
      monthName: "Mart",
    },
    {
      monthId: "4",
      monthName: "Aprel",
    },
    {
      monthId: "5",
      monthName: "May",
    },
    {
      monthId: "6",
      monthName: "Iyun",
    },
    {
      monthId: "7",
      monthName: "Iyul",
    },
    {
      monthId: "8",
      monthName: "Avgust",
    },
    {
      monthId: "9",
      monthName: "Sentabr",
    },
    {
      monthId: "10",
      monthName: "Oktabr",
    },
    {
      monthId: "11",
      monthName: "Noyabr",
    },
    {
      monthId: "12",
      monthName: "Dekabr",
    },
  ];
  return (
    <Form.Select
      id="demo-simple-select"
      value={oy}
      label="Yil"
      onChange={handleChange}
      size="lg"
      style={{ cursor: "pointer" }}
    >
      <option value="">Oyni tanlang</option>
      {months.map((item, index) => (
        <option key={index} value={item.monthId}>
          {item.monthName}
        </option>
      ))}
    </Form.Select>
  );
}
