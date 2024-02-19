import React, { useEffect, useState } from 'react';
import { get1 } from '../services/graph1';
import { Chart } from 'react-google-charts';
import { count } from 'd3';

const ContryFilter = () => {
    const [productList, setProductList] = useState([]);
    const [duplicateCounts, setDuplicateCounts] = useState([]);

    useEffect(() => {
        let pobj = get1();

        pobj.then((response) => {
            console.log(JSON.stringify(response.data, null, 3));
            setProductList(response.data);
        });

        pobj.catch((error) => {
            console.log(JSON.stringify(error, null, 3));
        });
    }, []);

    useEffect(() => {
        // Extract the values you want to count duplicates for (e.g., product names)
        const valuesToCount = productList.map((product) => {
            if (product.country === "") {
                return product.country = "other";
            } else {
                return product.country;
            }
        });

        // Count duplicates and store the result in duplicateCounts state
        const counts = countDuplicates(valuesToCount);
        setDuplicateCounts(counts);
    }, [productList]);

    const countDuplicates = (arr) => {
        const counts = {};

        arr.forEach((item) => {
            if (counts[item]) {
                counts[item] += 1;
            } else {
                counts[item] = 1;
            }
        });

        return counts;
    };

    // Prepare data for the pie chart
    const data = Object.entries(duplicateCounts).map(([value, count]) => [
        value,
        count,
    ]);

    // Add column headers to the data
    data.unshift(['Country', 'most news']);

    const chartOptions = {
        colorAxis: { colors: ['#F44336', '#FFC107', '#4CAF50', '#2196F3'] }, // Change colors here
    };

    return (
        <div>
            <br></br>
            <table>
                <tr>
                    <td>
                        <svg id="icon637" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
                            <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                        </svg>
                    </td>
                    <td>
                        <h2>
                            Most News from the Registered Countries
                        </h2>
                    </td>

                </tr>
            </table>


            <Chart


                controls={[
                    {
                        controlType: "StringFilter",
                        options: {
                            filterColumnIndex: 0,
                            matchType: "any", // 'prefix' | 'exact',
                            ui: {
                                label: "Search the contry ",
                            },
                        },
                    },
                ]}

                chartType="GeoChart"
                width="99%"
                height="680px"
                data={data}
                options={chartOptions}
            />






        </div>
    );
};



{/* */ }







export default ContryFilter;
/*chartEvents={[
                    {
                        eventName: "select",
                        callback: ({ chartWrapper }) => {
                            const chart = chartWrapper.getChart();
                            const selection = chart.getSelection();
                            if (selection.length === 0) return;
                            const region = data[selection[0].row + 1];
                            console.log("Selected: " + region);
                        },
                    },
                ]} */