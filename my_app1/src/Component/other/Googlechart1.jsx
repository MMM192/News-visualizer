
//npm install react-router-dom
import { get1 } from '../services/graph1';
import { useEffect, useState } from 'react';

import { Chart } from "react-google-charts";










let Googglechart1 = () => {





    let [productList, setProductList] = useState([]);









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




    //  const firstProduct = productList[0];



    /* You can also access them in a single line
    const [firstProductId, firstProductNumber, firstProductValue] = [
      firstProduct.id,
      firstProduct.number,
      firstProduct.value,
    ];
*/



    const data = [
        ["City", "2010 Population", "2000 Population"],
        ["New York City, NY", 50, 10],
        ["Los Angeles, CA", 100, 100],
        ["Chicago, IL", 100, 50],
        ["Houston, TX", 85, 65],
        ["Philadelphia, PA", 25, 62],



    ];


    const data1 = productList.map(product => ["Philadelphia, PA", 25, 62]);





    const data2 = productList.map(product =>

        [
            product.topic.toString(),
            product.intensity,

        ]);

    // Add column headers to the data
    data2.unshift(["City", "intencity"]);



    const options = {
        title: "Population of Largest U.S. Cities",
        chartArea: { width: "50%" },
        hAxis: {
            title: "Total Population",
            minValue: 0,
        },
        vAxis: {
            title: "topic",
        },
    };







    return (
        <div >




            <Chart
                chartType="BarChart"
                width="100%"
                height="800px"
                data={data2}
                options={options}
            />













        </div>
    )
}

export default Googglechart1;







