import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { connect} from 'react-redux';

const CardSaleReport = (props) => {

console.log(props.x_axis)
    console.log(props.y_axis)


    const state = {
        series: [
            {
                name: 'series1',
                data: props.y_axis,
            },
        ],

        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#fcb800', '#f9f9f9', '#9c27b0'],
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: props.x_axis,
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy ',
                },
            },
            responsive: [
                {
                    breakpoint: 1680,
                    options: {
                        chart: {
                            width: '100%',
                        },
                    },
                },
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%',
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className="ps-card ps-card--sale-report">
            <div className="ps-card__header">
                <h4>Rapports de Ventes</h4>
            </div>

            <div className="ps-card__content">
                <div id="chart"></div>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={320}
                />
            </div>


        </div>
    );
};

export default CardSaleReport;
