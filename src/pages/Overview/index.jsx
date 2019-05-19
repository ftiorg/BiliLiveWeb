import React, {Component} from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Chart, Geom, Axis, Tooltip} from 'bizcharts';
import {Row, Col, Button, Spin} from 'antd';
import './style.scss';
import axios from 'axios';
import DataSet from '@antv/data-set';
import config from '../../config';
import gugugu from '../../assets/images/gugugu.jpg';

class Overview extends Component {


    render() {
        return (
            <MainLayout>
                <img width="300px" src={gugugu} alt="鸽了"/>
                <p>虽然这个页面鸽了，其他几个页面是可以看的！</p>

            </MainLayout>
        );
    }
}

export default Overview;
