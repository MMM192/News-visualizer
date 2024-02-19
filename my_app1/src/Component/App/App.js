//npm install react-router-dom
import './App.css';

import Dashboard from '../other/Dashboard';
import Chart1 from '../other/Chart1';
import Chart2 from '../other/Chart2';

import Googglechart1 from '../other/Googlechart1';
import GooglchartDynamic from '../other/GooglchartDynamic';
import Year1 from '../other/Year1';
import Piechart from '../other/Piechart';

import Meter from '../other/Meter';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';








function App() {

    const data1 = [12, 5, 6, 6, 9, 2];
    const w = 500;
    const h = 400;
    return (
        <div >



            <Dashboard />
            {/* 
            <Piechart />
            <Googglechart1 />

            <Year1 />

            
            <Chart2 data={data1} w={w} h={h} color="cyan" />
            
           
            <Dashboard />

 */}








        </div>
    );
}

export default App;


