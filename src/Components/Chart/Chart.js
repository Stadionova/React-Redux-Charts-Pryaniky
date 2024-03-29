import React from 'react';
import GoogleChart from "react-google-charts";
import './Chart.css';
import ChartTypes from '../ChartTypes/ChartTypes';

class Chart extends React.Component {

    state = {
        chartType: 'BarChart'
    }

    render() {

        if (this.state.chartType == 'PieChart') {
            var position = 'bottom';
        } else {
            var position = 'none';
        }

        return (
            <div className="containerChart">
                <div><span>{this.props.title}</span></div>
                <div className="containerChart__types">
                    <ChartTypes chartType={this.state.chartType} onChangeChart={this.changeChart} />
                </div>
                <div className="containerChart__chart">
                    <GoogleChart
                        options={{ legend: { position: position } }}
                        chartType={this.state.chartType} width="400px" height="200px" data={this.props.data} />
                </div>
            </div>
        );
    }

    changeChart = (chartType) => {
        this.setState({
            chartType: chartType
        });
    }

}

export default Chart;
