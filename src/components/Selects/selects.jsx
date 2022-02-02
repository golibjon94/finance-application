import React,{useContext,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoSelect from "./infoSelect";
import MonthSelect from "./monthSelect";
import ProgrammeSelect from "./programmeSelect";
import YearSelect from "./yearSelect";
import { FinanceContext } from "../../Context/context";
import { getFilterData,getFilterAppData } from "../../Reducer/action";
export default function Selects() {
  const { state, dispatch } = useContext(FinanceContext);
  const { financeInfos, allDatas, allAppDatas, chosenInfo } = state;
  const {
    districtID,
    districtName,
    regionID,
    regionName,
    programmeID,
    paymentMonth,
    paymentYear,
  } = financeInfos;

  useEffect(() => {
    const filteredData = allDatas
      ? allDatas.filter((item) => {
          return (
            item.districtID === districtID &&
            item.districtName === districtName &&
            item.regionID === regionID &&
            item.regionName === regionName &&
            item.paymentYear === paymentYear &&
            item.paymentMonth === paymentMonth &&
            item.programmeID === programmeID
          );
        })
      : [];
    dispatch(getFilterData(filteredData));
  }, [districtName, paymentMonth, paymentYear, programmeID]);
  // ------------------------------------------

  useEffect(() => {
    const filteredAppData = allAppDatas
      ? allAppDatas.filter((item) => {
          return (
            item.districtID === districtID &&
            item.districtName === districtName &&
            item.regionID === regionID &&
            item.regionName === regionName
          );
        })
      : [];
    dispatch(getFilterAppData(filteredAppData));
  }, [districtName, regionName]);

  // --------------------------------------------
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} sm={6}  lg={3} className="my-1" >
            <InfoSelect />
          </Col>
          <Col xs={12} sm={6}  lg={3} className="my-1 " >
          <YearSelect/>
          </Col>
          <Col xs={12} sm={6}  lg={3} className="my-1" >
          <MonthSelect/>
          </Col>
          <Col xs={12} sm={6}  lg={3} className="my-1" >
          <ProgrammeSelect/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
