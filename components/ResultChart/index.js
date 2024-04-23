import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const ResultChart = ({ result }) => {

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

  const data = Object.keys(result).map(key => ({
    name: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
    value: parseFloat(result[key].replace('%', '')) // Convert percentage string to number
  }));

  const COLORS = ['#051821', '#1A4645', '#266867', '#6B6BF8', '#F58800', '#F6BC24'];  // Fixed color code

  return (
    <div className='hidden laptopl:flex' style={{justifyContent: 'center', width: '100%', height: '100%' }}>
      <ResponsiveContainer width="50%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

  );
};

export default ResultChart;
