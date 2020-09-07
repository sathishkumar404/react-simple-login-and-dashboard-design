import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
  render() {
    const options = {
      exportEnabled: false,
      animationEnabled: true,
      title: {
        text: "",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: 18, label: "Direct" },
            { y: 49, label: "Organic Search" },
            { y: 9, label: "Paid Search" },
          ],
        },
      ],
    };

    return (
      <div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Project List</h4>
            </div>
            <div className="card-content">
              <CanvasJSChart
                options={options}
                /* onRef={ref => this.chart = ref} */
              />
            </div>
          </div>
       
      </div>
    );
  }
}

export default PieChart;
