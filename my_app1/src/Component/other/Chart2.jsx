import React, { Component } from 'react'
import * as d3 from 'd3'

class Chart2 extends Component {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        const { data, w, h, color } = this.props;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", 700)
            .attr("height", 300);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 300 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", color);
    }
    render() {
        return <div id={"#" + this.props.id}></div>
    }
}
export default Chart2;
