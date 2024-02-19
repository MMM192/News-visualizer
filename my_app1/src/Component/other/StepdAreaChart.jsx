import React, { useEffect, useState } from 'react';
import { get1 } from '../services/graph1';
import { Chart } from 'react-google-charts';
import { count } from 'd3';

const StepdAreaChart = () => {
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
            if (product.pestle == "") {
                return product.pestle = "other";
            } else {
                return product.pestle;
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



    const data = [
        ["Style", "Colonial", "Victorian"],
        ["2013", 1, 2],
        ["2014", 2, 8],
        ["2015", 5, 9],
        ["2016", 8, 4],
    ];






    const options = {
        isStacked: "relative",
        height: 300,
        legend: { position: "top", maxLines: 3 },
        vAxis: {
            minValue: 0,
            //  ticks: [0, 0.3, 0.6, 0.9, 1],

        },
    };

    // Prepare data for the pie chart
    const data2 = Object.entries(duplicateCounts).map(([value, count]) => [
        value,
        count,
    ]);

    // Add column headers to the data
    data2.unshift(['Country', 'Count']);



    const options1 = {
        title: "   most news related to  ",

    };






    const data3 = productList.map(product =>

        [
            product.start_year.toString(),
            product.intensity,

        ]);

    // Add column headers to the data
    data3.unshift([
        "year",
        "intensity"

    ]);






    return (
        <div>













            <Chart
                chartType="SteppedAreaChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
                legendToggle
            />






        </div>
    );
};

export default StepdAreaChart;
