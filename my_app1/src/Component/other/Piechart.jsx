import React, { useEffect, useState } from 'react';
import { get1 } from '../services/graph1';
import { Chart } from 'react-google-charts';
import { count } from 'd3';

const Piechart = () => {
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

    // Prepare data for the pie chart
    const data2 = Object.entries(duplicateCounts).map(([value, count]) => [
        value,
        count,
    ]);

    // Add column headers to the data
    data2.unshift(['Country', 'Count']);

    const options = {
        title: 'My Daily Activities',
        is3D: true,
    };

    const options1 = {
        title: "   most news related to  ",

    };



    const options2 = {
        title: "Indian Language Use",
        legend: "none",
        pieSliceText: "label",
        slices: {
            4: { offset: 0.2 },
            12: { offset: 0.3 },
            14: { offset: 0.4 },
            15: { offset: 0.5 },
        },
    };


    const options3 = {
        title: "My Daily Activities",
        pieHole: 0.4,
        is3D: false,
    };

    var cnt;

    return (
        <div>



            {/*
            <table className="table table-hover">


                <tbody>


                    {productList.map((item, index) => (
                        <tr >
                            <td>{item.pestle}</td>
                            <td>{index + 1}</td>
                        </tr>
                    ))}



                </tbody>
            </table>
 */}









            <Chart
                chartType="PieChart"
                width="100%"
                height="300px"
                data={data2}
                options={options1}
            />






        </div>
    );
};

export default Piechart;
