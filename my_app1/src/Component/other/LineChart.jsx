


import React, { useEffect, useState } from 'react';
import { get1 } from '../services/graph1';
import { Chart } from 'react-google-charts';
import { count } from 'd3';

const LineChart = () => {
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
            if (product.topic == 0) {
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
                counts[item.topic] = item.start_year;
                counts[item.topic] = item.relevance;
                // counts[item.topic] += 1;



            } else {
                counts[item.sector] = item.relevance;
            }
        });

        return counts;
    };



    const aa = 0;
    {/* */ }

    // Prepare data for the pie chart
    const data2 = Object.entries(duplicateCounts).map(([value, data1, data2]) => [


        data1,
        data2,


    ]);


    // Add column headers to the data
    data2.unshift([
        duplicateCounts.values

    ]

    );








    const options = {
        hAxis: {
            title: "Time",
        },
        vAxis: {
            title: "Popularity",
        },
        series: {
            1: { curveType: "function" },
        },
    };















    return (
        <div>











            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data2}
                options={options}
            />


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
};

export default LineChart;
