import React from "react"
import * as d3 from "d3"

export default class MovieGraph extends React.Component {

    container = React.createRef()

    drawChart = data => {
        const canvas = d3.select(this.container.current)
        const svg = canvas.append("svg")
    
        const width = 700
        const height = 500
        const margin = {top: 10, left: 50, bottom: 40, right: 10}
        const innerWidth = width - margin.left - margin.right
        const innerHeigth = height - margin.top - margin.bottom
    
        svg.attr("width", width)
        svg.attr("height", height)

        const maxViews = Math.max(...data.map(m => m.views))
        
        const group = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`)
        
        
        const y = d3.scaleLinear()
            .domain([0, maxViews]).range([innerHeigth, 0])
        
        const x = d3.scaleBand()
            .domain(data.map(m => m.name)).range([0, innerWidth])
            .padding(0.1)
        
        const bars = group.selectAll("rect").data(data)
        const rects = bars.enter().append("rect")
            .attr("class", "bar")
            .style("fill", "orange")
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.views))
            .attr("height", d => innerHeigth - y(d.views))
            .attr("width", x.bandwidth())
        
        group.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", `translate(0, ${innerHeigth})`)
        
        group.append("g")
            .classed("y--axis", true)
            .call(d3.axisLeft(y))
      }

      render () {
          return (
          <div>{this.drawChart(this.props.movies)}</div>
          )
      }
}