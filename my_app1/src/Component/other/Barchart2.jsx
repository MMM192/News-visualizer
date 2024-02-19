


import React, { useEffect, useState } from 'react';
import { get1 } from '../services/graph1';
import { Chart } from 'react-google-charts';
import { count } from 'd3';

const Barchart = () => {
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

            if (counts[item.sector]) {
                counts[item.sector] += item.intensity;


            } else {
                counts[item.sector] = 1;
            }
        });

        return counts;
    };



    {/* */ }

    // Prepare data for the pie chart
    const data2 = Object.entries(duplicateCounts).map(([value, count]) => [
        value,
        count,
    ]);


    // Add column headers to the data
    data2.unshift(['Sector', 'most intencity of each sector ']);







    const options = {
        chart: {
            title: "most intencity of each sector",
            subtitle: "Based on most recent and previous census data",
        },
        hAxis: {
            title: "Total Population",
            minValue: 0,
        },
        vAxis: {
            title: "City",
        },
        bars: "horizontal",
        axes: {
            y: {
                0: { side: "right" },
            },
        },
    };


























    const [productList1, setProductList1] = useState([]);

    const [duplicateCounts1, setDuplicateCounts1] = useState([]);




    useEffect(() => {
        let pobj = get1();

        pobj.then((response) => {
            console.log(JSON.stringify(response.data, null, 3));
            setProductList1(response.data);
        });

        pobj.catch((error) => {
            console.log(JSON.stringify(error, null, 3));
        });

    }, []);




    useEffect(() => {
        // Extract the values you want to count duplicates for (e.g., product names)


        const valuesToCount1 = productList1.map((product) => {
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
        const counts = countDuplicates1(valuesToCount1);
        setDuplicateCounts1(counts);
    }, [productList1]);




    const countDuplicates1 = (arr) => {
        const counts = {};

        arr.forEach((item) => {

            if (counts[item.sector]) {
                counts[item.sector] += item.relevance;


            } else {
                counts[item.sector] = 1;
            }
        });

        return counts;
    };



    {/* */ }

    // Prepare data for the pie chart
    const data3 = Object.entries(duplicateCounts1).map(([value, count]) => [
        value,
        count,
    ]);


    // Add column headers to the data
    data3.unshift(['Sector', ' intencity  ']);













    const diffdata = {
        old: data2,
        new: data3,
    };

    const options1 = {
        legend: { position: "top" },
    };










    return (
        <div>











            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                diffdata={diffdata}
                options={options1}
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

export default Barchart;
