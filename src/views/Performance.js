import React from 'react';
import { LineChart, XAxis, Tooltip, Line, YAxis } from 'recharts';

const Performance = ({data}) => {

  return (
    <div className="App-item-performance">
      <div className="heading">
        Performance
      </div>
      <div className="performance-graph">
        <LineChart 
          width={300}
          height={300}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          data={data}
        >
          <XAxis dataKey="temp" />
          <YAxis />
          <Tooltip contentStyle={{"backgroundColor": "#040E29" }}/>
          <Line type="monotone" dataKey="7w" dot={false} stroke="#FF0074" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="11w" dot={false} stroke="white" />
          </LineChart>
      </div>
    </div>
  );
}

export default Performance;
