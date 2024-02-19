import React, { useEffect, useState } from 'react';
import { get1 } from '../services/graph1';
import { Chart } from 'react-google-charts';
import { count } from 'd3';

const City = () => {
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
            if (product.city === "") {
                product.city = "other";
                return product
            } else {
                return product;
            }
        });

        // Count duplicates and store the result in duplicateCounts state
        const counts = countDuplicates(valuesToCount);
        setDuplicateCounts(counts);
    }, [productList]);





    const countDuplicates = (arr) => {
        const counts = {};

        arr.forEach((item) => {
            if (item.city === "other") {
                // Handle the case when the city is "other"
                // You can implement custom logic here if needed
            } else if (counts[item.city]) {
                // If the city already exists in counts, update its values
                counts[item.city].data1 += item.intensity;
                counts[item.city].data2 += item.relevance;
                counts[item.city].data3 += item.likelihood;
            } else {
                // If the city doesn't exist in counts, create a new object
                counts[item.city] = {
                    data1: item.intensity,
                    data2: item.relevance,
                    data3: item.likelihood,
                };
            }
        });

        return counts;
    };

    // Prepare data for the pie chart
    const data2 = Object.entries(duplicateCounts).map(([city, values]) => [
        city,

        values.data1,
        values.data2,
        values.data3,
    ]);


    // Add column headers to the data
    data2.unshift(['city  ', ' intencity ', ' relevance ', 'likelihood']);











    const options = {
        title: "Population of Largest U.S. Cities",
        chartArea: { width: "76%" },
        isStacked: true,
        hAxis: {
            title: "Total",
            minValue: 0,
        },
        vAxis: {
            title: "City",
        },
    };

    return (
        <div>

            <table>
                <tr>
                    <td>
                        <svg id="icon637" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
                            <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                        </svg>
                    </td>
                    <td>
                        <h2>
                            Most News from the Registered City
                        </h2>
                    </td>

                </tr>
            </table>






            <Chart
                chartType="BarChart"
                width="100%"
                height="700px"
                data={data2}
                options={options}
                controls={[
                    {
                        controlType: "StringFilter",
                        options: {
                            filterColumnIndex: 0,
                            matchType: "any", // 'prefix' | 'exact',
                            ui: {
                                label: "Search by city ",
                            },
                        },
                    },
                ]}
            />









        </div>
    );
};



{/* */ }







export default City;
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