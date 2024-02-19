import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

const NumberChart = () => {
    const [numberData, setNumberData] = useState([]);

    useEffect(() => {
        axios.get('/api/data/numbers')
            .then((response) => {
                setNumberData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // Convert numerical values to strings in the first column
    const chartData = [['Category', 'Value']].concat(
        numberData.map((data) => [data.category.toString(), data.value])
    );

    return (
        <div>
            <Chart
                chartType="BarChart"
                data={chartData}
                options={{
                    title: 'Number Chart',
                    hAxis: { title: 'Category' },
                    vAxis: { title: 'Value' },
                }}
                width="100%"
                height="400px"
            />
        </div>
    );
};

export default NumberChart;
