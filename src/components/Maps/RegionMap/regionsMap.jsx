import React, { useState, useEffect, useContext } from "react";
import "./regionsMap.css";
import { useParams } from "react-router-dom";
import { FinanceContext } from "../../../Context/context";
import { addInfos } from "../../../Reducer/action";
import { allDatas } from "../../../datas/allDatas";
function RegionsMap() {
  const [categories, setcategories] = useState([]);
  const { id } = useParams();
  const { state, dispatch } = useContext(FinanceContext);
  const filteredDatas = allDatas.filter((item) => item.id === id);
  useEffect(() => {
    filteredDatas.map((item) => setcategories(item.infos));
  }, []);

  const getDatas = (id, name) => {
    const newObj = {
      ...state.financeInfos,
      districtID: id,
      districtName: name,
    };
    dispatch(addInfos(newObj));
  };

  return (
    <div className="region">
      {filteredDatas.map((itemm, index) => (
        <svg
          key={index}
          id={itemm.name}
          className={itemm.regionClas}
          baseProfile="tiny"
          width="100%"
          height="100%"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          version="1.2"
          viewBox="0 0 1000 652"
        >
          <svg>
            {categories?.map((item, ind) => (
              <a xlinkTitle={item.name} key={ind}>
                <path
                  onClick={(id, name) => {
                    getDatas(item.id, item.name);
                  }}
                  id={item.id}
                  className={item.clas}
                  d={item.d}
                />
              </a>
            ))}
          </svg>

          <circle cx="673.4" cy="626" id="0"></circle>
          <circle cx="637.6" cy="506" id="1"></circle>
          <circle cx="636" cy="498.9" id="2"></circle>
        </svg>
      ))}
    </div>
  );
}

export default RegionsMap;
