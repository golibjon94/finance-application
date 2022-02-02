import React,{useContext} from "react";
import { FinanceContext } from "../../Context/context";
import Table from 'react-bootstrap/Table';


export default function ApplicationTable() {
  const { state } = useContext(FinanceContext);
  const { filterAppData } = state;
  console.log(filterAppData);
  return (
    <Table striped bordered hover variant="success">
      <thead>
        <tr>
          <th>Arizalar holati</th>
          <th>Arizalar soni</th>
        </tr>
      </thead>
      <tbody>
        {filterAppData.length > 0 &&
          filterAppData.map((row) => (
            <tr
              sx={{ fontSize: "20px", padding: "13px " }}
              key={row.statusID}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <td
                sx={{ fontSize: "16px", padding: "13px " }}
                component="th"
                scope="row"
              >
                {row.statusID === "WAITING LIST" && "Hal bo'lishi kutilayotgan"}
                {row.statusID === "PENDING APPROVAL" &&
                  "Tasdiqni kutish bosqichida"}
                {row.statusID === "REJECTED" && "Rad etilgan"}
                {row.statusID === "APPROVED" && "Ma'qullangan"}
                {row.statusID === "EXITED" && "Bolasi 18ga to'lgan"}
                {row.statusID === "EXPIRED" &&
                  "Topshirilganiga 1 yildan oshgan"}
                {row.statusID === "MEMBERS" &&
                  "Oila a'zolarini qo'shish bosqichida"}
                {row.statusID === "OTHER_INCOME" && "Chorva soni bo'yicha"}
                {row.statusID === "UPLOAD_DOC" &&
                  "Xujjat nusxalarini yuklash bosqichida"}
                {row.statusID === "REGIONAL_REVIEW" &&
                  "Nikoh hujjati kutish bosqichida "}
                {row.statusID === "REVIEW_APPLICATION" &&
                  "2 kunda keyingi bosqichga o'tadigan"}
              </td>
              <td>
                {row.applicationsCount} ta
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
