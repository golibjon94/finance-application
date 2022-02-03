import React, { PureComponent,useContext} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {FinanceContext} from "../../Context/context"

const Chart1=()=> {
    const {state} = useContext(FinanceContext);
      const {filterAppData}=state;
      const filData=filterAppData.length>0 ? filterAppData.map(item=>{
          const statusName= item.statusID==="WAITING LIST" ? "Hal bo'lishi kutilayotgan"
          : item.statusID==="PENDING APPROVAL" ? "Tasdiqni kutish bosqichida"
          : item.statusID==="REJECTED" ? "Rad etilgan"
           : item.statusID==="APPROVED" ? "Ma'qullangan"
           : item.statusID==="EXITED" ? "Bolasi 18ga to'lgan"
           : item.statusID==="EXPIRED" ? "Topshirilganiga 1 yildan oshgan"
           : item.statusID==="MEMBERS" ? "Oila a'zolarini qo'shish bosqichida"
           :item.statusID=== "OTHER_INCOME" ? "Chorva soni bo'yicha"
           : item.statusID==="UPLOAD_DOC" ? "Xujjat nusxalarini yuklash bosqichida"
           : item.statusID==="REGIONAL_REVIEW" ? "Nikoh hujjati kutish bosqichida "
           : item.statusID==="REVIEW_APPLICATION" ? "2 kunda keyingi bosqichga o'tadigan":""
          const newObj={
              name:statusName,
              soni:item.applicationsCount,
              uv:5000,
              amt:20000
          }
          return newObj;
      })
      :null;

    const data = [
      {
        name: 'Page A',
        // uv: 4000,
        soni: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        // uv: 3000,
        soni: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        // uv: 2000,
        soni: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        // uv: 2780,
        soni: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        // uv: 1890,
        soni: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        // uv: 2390,
        soni: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        // uv: 3490,
        soni: 4300,
        amt: 2100,
      },
      {
        name: 'Page G',
        // uv: 3490,
        soni: 4300,
        amt: 2100,
      },
      {
        name: 'Page G',
        // uv: 3490,
        soni: 4300,
        amt: 2100,
      },
    ];
  const demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    return (
      <ResponsiveContainer width="120%" height="70%">
        <BarChart
          width={600}
          height={300}
          data={filData ? filData:data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="soni" uv  fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
export default Chart1;
