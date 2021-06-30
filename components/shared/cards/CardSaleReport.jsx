import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { connect} from 'react-redux';

const CardSaleReport = (props) => {


    var date = new Date();

    var daysInMonth = new Date(date.getFullYear(), date. getMonth()+1, 0).getDate();
    let days = [] ;
    for (let i=0;i<=parseInt(daysInMonth);i++)
    {days[i]=`${i}/${date.getMonth()+1}/${date.getFullYear()}`}
console.log(props.y_axis)
    console.log(days)
    const state = {
        series: [
            {
                name: 'orders',
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

                categories : days,
                type: 'category',

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
