import React, {Component} from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Chart, Geom, Axis, Tooltip} from 'bizcharts';
import {Row, Col, Button, Spin} from 'antd';
import './style.scss';
import axios from 'axios';
import DataSet from '@antv/data-set';
import config from '../../config';

class Overview extends Component {


    render() {
        const dv = new DataSet().createView();
        const state = {loading: true};

        const freshData = () => function () {
            console.log('click');
            axios
                .get(config.api + '/blive/overview')
                .then(function (response) {
                    console.log(response);
                    dv.source(response.data['SignDayCount']);
                })
                .finally(function () {
                    state.loading = false;
                })
            ;
        };

        const cols = {
            key: {
                name: "日期",
                range: [0, 1]
            },
            value: {
                name: "签到人数",
                min: 0
            }
        };

        return (
            <MainLayout>
                <Spin spinning={state.loading}>
                    <div>
                        <Chart height={400} data={dv} scale={cols} width={600}>
                            <Axis name="日期"/>
                            <Axis name="签到人数"/>
                            <Tooltip
                                crosshairs={{
                                    type: "y",
                                }}
                            />
                            <Geom type="line" position="key*value" size={2}/>
                            <Geom
                                type="point"
                                position="key*value"
                                size={4}
                                shape={"circle"}
                                style={{
                                    stroke: "#fff",
                                    lineWidth: 1
                                }}
                            />
                        </Chart>
                    </div>
                </Spin>
            </MainLayout>
        );
    }
}

export default Overview;
