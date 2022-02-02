import React, { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import UzbMap from "../Maps/UzbMap/uzbMap";
import RegionsMap from "../Maps/RegionMap/regionsMap";
import Selects from "../Selects/selects";
import { Api } from "../../Axios/https";
import { FinanceContext } from "../../Context/context";
import { addAllDatas, addAllAppDatas } from "../../Reducer/action";
import Card from "react-bootstrap/Card";
// import axios from "axios";
import InfosTable from "../Tables/infosTable";
import ApplicationTable from "../Tables/applicationTable";
import Chart1 from "../Charts/chart1";
// import PieChart from "../Charts/PieChart";
// import PieChartComponent from "../Charts/PieChart";

function Layout() {
  const { state, dispatch } = useContext(FinanceContext);
  const allApps = JSON.parse(localStorage.getItem("jamiArizalar"));
  const allSums = JSON.parse(localStorage.getItem("jamiTolovlar"));
  useEffect(() => {
    Api({
      method: "get",
      url: "/GetPaymentByYearMonthProgramRegionDistrict",
      header: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    })
      .then((res) => {
        dispatch(addAllDatas(res.data));
        const allPayment = res.data
          .map((item) => item.sumAmount.replace(/,/g, ""))
          .reduce((acc, current) => parseInt(acc) + parseInt(current))
          .toString();
        const newAdd =
          allPayment.substring(0, 10) +
          "," +
          allPayment.substring(10, allPayment.length);
        const newAdd2 =
          newAdd.substring(0, 7) + "," + newAdd.substring(7, newAdd.length);
        const newAdd3 =
          newAdd2.substring(0, 4) + "," + newAdd2.substring(4, newAdd2.length);
        const newAllPayment =
          newAdd3.substring(0, 1) + "," + newAdd3.substring(1, newAdd3.length);
        localStorage.setItem("jamiTolovlar", JSON.stringify(newAllPayment));
      })
      .catch((err) => console.log(err.message));
    // --------------------------------------
    Api({
      method: "get",
      url: "/GetApplicationsByRegionDistrict",
      header: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    })
      .then((res) => {
        dispatch(addAllAppDatas(res.data));
        const allApp = res.data
          .reduce(
            (acc, current) => acc + parseInt(current.applicationsCount),
            0
          )
          .toString();
        localStorage.setItem("jamiArizalar", JSON.stringify(allApp));
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <Container fluid>
        <Row className="bg-success p-3">
          <Col>
            <Selects />
          </Col>
        </Row>
        <Row className=" d-flex  mx-1 ">
          <Col xs={12} lg={5} style={{ margin: "5px",width:"50%" }}>
            <Card style={{ marginBottom: "5px" }} body>
              Jami Arizalar: {allApps} ta
            </Card>
            <Card style={{ marginBottom: "5px" }} body>Jami Summa: {allSums} sum</Card>
            <Routes>
              <Route path="/" element={<UzbMap />} />
              <Route path="/regionsMap/:id" element={<RegionsMap />} />
            </Routes>
          </Col>
          <Col xs={12} lg={5} style={{ height: "700px" , marginTop:"5px" }}>
            <InfosTable  /> 
            <ApplicationTable />
             <Chart1/>

          </Col>
        </Row>
        <Row style={{height:"700px",marginTop:"-10px"}}>
          <Col  >
          {/* <Chart1/> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default React.memo(Layout);
