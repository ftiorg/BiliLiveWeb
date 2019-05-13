import React, {Component} from 'react';
import {AutoComplete, Spin, Table} from "antd";
import MainLayout from '../../layouts/MainLayout';
import './style.scss';
import axios from "axios";
import config from '../../config';
import DataSet from "@antv/data-set";
import {Axis, Chart, Geom, Tooltip} from "bizcharts";

class BuildList extends Component {

}

class DanmuLog extends Component {
    render() {
        return (
            <MainLayout>
                <BuildList data={this.state.data}></BuildList>
            </MainLayout>
        )
    }
}

export default DanmuLog;