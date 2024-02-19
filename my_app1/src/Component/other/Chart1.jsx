import React, { Component } from 'react'
import * as d3 from 'd3'

class dd extends Component {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        const data = [12, 5,20, 6, 9, 21];
        const w = 500;
        const h = 400;
        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 300 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", (d, i) => d > 20 ? "cyan" : "red");
    }
    render() {
        return <div id={"#" + this.props.id}></div>
    }
}
export default dd;
