import React, { useEffect, useState } from 'react';
import { get1 } from '../services/graph1';
import { Chart } from 'react-google-charts';
import { count } from 'd3';

const Swot = () => {
    const [productList, setProductList] = useState([]);
    const [duplicateCounts, setDuplicateCounts] = useState({});

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
            if (product.topic == "") {
                product.topic = "undefined topics";


                if (product.swot == "") {
                    product.swot = "undefined strength weakness opportunity threat";




                }


                return product;
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
            if (counts[item.topic]) {
                counts[item.topic].data1 += 1;
                counts[item.topic].data2 = item.swot;

            } else {
                counts[item.topic] = {
                    data1: 1,
                    data2: item.swot,

                };
            }
        });

        return counts;
    };

    // Prepare data for the pie chart
    const data2 = Object.entries(duplicateCounts).map(([value, data]) => [
        value,
        data.data2,
        data.data1,



    ]);

    // Add column headers to the data
    data2.unshift(['x', 'a', 'b']);

    const options = {
        title: "My Daily Activities",
        slices: {

        },
    };

    const data = [
        ["Name", "Gender", "Donuts eaten"],
        ["Michael", "Male", 5],
        ["Elisa", "Female", 5],
        ["Robert", "Male", 5],
        ["John", "Male", 5],
        ["Jessica", "Female", 5],

    ];
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
                        <h3>
                            visualization for strength weakness opportunity threat(SWOT) as per the news topics

                        </h3>
                    </td>

                </tr>
            </table>



            <Chart
                chartType="PieChart"
                width="100%"
                height="640px"
                data={data2}
                options={options}
                chartWrapperParams={{ view: { columns: [0, 2] } }}
                chartPackages={["corechart", "controls"]}
                controls={[
                    {
                        controlEvents: [
                            {
                                eventName: "statechange",
                                callback: ({ chartWrapper, controlWrapper }) => {
                                    console.log("State changed to", controlWrapper?.getState());
                                },
                            },
                        ],
                        controlType: "CategoryFilter",
                        options: {
                            filterColumnIndex: 1,
                            ui: {
                                labelStacking: "vertical",
                                label: "Gender Selection:",
                                allowTyping: false,
                                allowMultiple: false,
                            },
                        },
                    },
                ]}
            />


        </div>
    );
};

export default Swot;
