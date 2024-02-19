import '../other/MiniDashboard2.css';
import Piechart from './Piechart';
import StepdAreaChart from './StepdAreaChart';
import GeoChart from './GeoChart';
import Barchart from './Barchart';
import Barchart2 from './Barchart2';


import React, { useEffect, useState } from 'react';
import { get1 } from '../services/graph1';
import { Chart } from 'react-google-charts';
import { count } from 'd3';









let TopicFilter = () => {







    const [productList, setProductList] = useState([]);
    const [productList1, setProductList1] = useState([]);
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
            if (product.sector == 0) {
                //product.sector = "other";
                // return product;
                return 0;
            } else {
                return product;
            }
            // Return the updated or unchanged product
        });

        // Count duplicates and store the result in duplicateCounts state
        const counts = countDuplicates(valuesToCount);
        setDuplicateCounts(counts);
    }, [productList]);



    const countDuplicates = (arr) => {
        const counts = {};

        arr.forEach((item) => {
            if (counts[item.topic]) {
                // If the topic already exists in counts, update its values
                counts[item.topic].data1 += item.relevance;
                counts[item.topic].data2 += item.intensity;
                counts[item.topic].data3 += item.impact;
                counts[item.topic].cnt += 1;
            } else {
                // If the topic doesn't exist in counts, create a new object
                counts[item.topic] = {
                    data1: item.intensity,
                    data2: item.relevance,
                    data3: item.likelihood,
                    cnt: 1, // Remove the extra "=" sign here
                };
            }
        });

        return counts;
    };

    // Prepare data for the pie chart
    const data2 = Object.entries(duplicateCounts).map(([topic, values, count]) => [
        topic,
        values.data1,
        values.data2,
        values.data3,
        values.cnt,
    ]);



    // Add column headers to the data
    data2.unshift(['topic', ' relevance ', ' intensity ', 'impact', 'most topics']);







    const options = {
        chart: {
            title: "overall visualizations of all sectors over the years",
            subtitle: " 2018-2060",
        },
    };




    const options1 = {
        // Material design options
        chart: {
            title: " ",
            subtitle: " ",
        },
        series: {
            0: { axis: "hours studied" },
            1: { axis: "final grade" },
        },/*
        axes: {
            y: {
                "hours studied": { label: "Hours Studied" },
                "final grade": { label: "Final Exam Grade" },
            },
        },*/
    };



    const options3 = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
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
                            topic wise visualization
                        </h2>
                    </td>

                </tr>
            </table>







            {/* 

            <Chart
                chartType="Bar"
                width="98%"
                height="400px"
                data={data2}
                options={options}
                controls={[
                    {
                        controlType: "StringFilter",
                        options: {
                            filterColumnIndex: 0,
                            matchType: "any", // 'prefix' | 'exact',
                            ui: {
                                label: "Search by year ",
                            },
                        },
                    },
                ]}
            />

*/}




            <Chart
                chartType="Scatter"
                width="98%"
                height="400px"
                data={data2}
                options={options1}
                controls={[
                    {
                        controlType: "StringFilter",
                        options: {
                            filterColumnIndex: 0,
                            matchType: "any", // 'prefix' | 'exact',
                            ui: {
                                label: "Search the topic ",
                            },
                        },
                    },
                ]}

            />


            {/* 

            <Chart
                chartType="ScatterChart"
                width="80%"
                height="400px"
                data={data2}
                options={options3}
                controls={[
                    {
                        controlType: "StringFilter",
                        options: {
                            filterColumnIndex: 0,
                            matchType: "any", // 'prefix' | 'exact',
                            ui: {
                                label: "Search by year ",
                            },
                        },
                    },
                ]}
            />*/}


            {/* 




            <table className="table table-hover">


                <tbody>


                    {productList.map((item, index) => (
                        <tr >
                            <td>{item.start_year}</td>
                            <td>{index + 1}</td>
                        </tr>
                    ))}



                </tbody>
            </table>

*/}





        </div>
    );
}

export default TopicFilter;