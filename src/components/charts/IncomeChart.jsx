import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../utils/formatUtils';

const IncomeChart = ({ data, timeRange = 'month' }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      
      return (
        <div className="bg-white p-2 sm:p-3 border border-gray-200 shadow-md rounded-md text-xs sm:text-sm max-w-[200px] sm:max-w-none">
          <p className="font-medium text-gray-800">{label}</p>
          <p className="text-green-600 mt-1">
            <span className="font-medium">Income: </span>
            {formatCurrency(data.income)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-60 sm:h-72 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 10 }}
            tickMargin={10}
            interval="preserveStartEnd"
          />
          <YAxis 
            tickFormatter={(value) => `$${value}`}
            tick={{ fontSize: 10 }}
            width={45}
            domain={[0, 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="top" 
            height={36}
            wrapperStyle={{
              paddingBottom: '10px',
              fontSize: '12px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="income" 
            name="Income" 
            stroke="#4f46e5" 
            strokeWidth={2} 
            dot={{ r: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;