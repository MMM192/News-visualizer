


import React, { useEffect, useState } from 'react';
import { get1 } from '../services/graph1';
import { Chart } from 'react-google-charts';
import { count } from 'd3';

const GeoChart = () => {
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
            if (product.country == "") {
                return product.country = "other";
            } else {
                return product.country;
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
    data.unshift(['Country', 'most news ']);












    const chartOptions = {
        colorAxis: { colors: ['#F44336', '#FFC107', '#4CAF50', '#2196F3'] }, // Change colors here
    };



    return (
        <div>



            {/* 


            <table className="table table-hover">


                <tbody>


                    {productList.map((item, index) => (
                        <tr >
                            <td>{item.intensity}</td>
                            <td>{index + 1}</td>
                        </tr>
                    ))}



                </tbody>
            </table>
*/}





            <h6 align="center">most news from the registered country's</h6>






            <Chart
                chartType="GeoChart"
                width="100%"
                height="300px"
                data={data}
                options={chartOptions}

            />





        </div>
    );
};

export default GeoChart;
