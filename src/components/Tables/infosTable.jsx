import React,{useContext} from "react";
import Table from 'react-bootstrap/Table';
import { FinanceContext } from "../../Context/context";

export default function InfosTable() {
    const { state } = useContext(FinanceContext);
    const { filterData, filterAppData, financeInfos, chosenInfo } = state;
    const allFilappDatas =
    filterAppData.length > 0 &&
    filterAppData.reduce((a, b) => a + parseInt(b.applicationsCount), 0);
   
    function capit(string) {
        return string && string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      }
  return (
    <div>
      <Table striped bordered hover variant="success" style={{width:"110%",marginLeft:"30px"}}>
        <thead>
          <tr>
            <th>Viloyat</th>
            <th>Tuman</th>
            <th>{chosenInfo}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >{capit( financeInfos.regionName)} </td>
            <td style={{textTransform:"capitalize"}}> {capit( financeInfos.districtName)}</td>
            <td>    {chosenInfo === "SUMMA" && filterData.length > 0 ? (
                <h5>{filterData[0].sumAmount}</h5>
              ) : financeInfos.districtName &&
                financeInfos.regionName &&
                financeInfos.paymentYear &&
                financeInfos.paymentMonth &&
                financeInfos.programmeID &&
                filterData.length === 0 ? (
                <h5>Malumot kiritilmagan</h5>
              ) : (
                " "
              )}
              {chosenInfo === "ARIZALAR" && filterAppData.length > 0 ? (
                <h5>{allFilappDatas} ta</h5>
              ) : (
                ""
              )}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}




