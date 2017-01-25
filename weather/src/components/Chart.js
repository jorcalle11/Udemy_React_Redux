import React from 'react';
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const average = data => _.round(_.sum(data)/data.length);

const Chart = ({data,color,units}) => {
  return (
    <div>
      <Sparklines data={data} width={180} height={120}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)} <strong>{units}</strong></div>
    </div>
  );
};

export default Chart;