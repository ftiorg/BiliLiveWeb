import React, {Component} from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Spin, Table} from 'antd';
import axios from 'axios';
import config from '../../config';
import './style.scss';

class BuildTable extends Component {

    render() {
        const columns = [{
            title: '用户',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '礼物',
            dataIndex: 'gift',
            key: 'gift',
        }, {
            title: '数量',
            dataIndex: 'count',
            key: 'count',
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
        }];
        return (
            <Table dataSource={this.props.data} columns={columns} rowKey="time"/>
        )
    }
}


class GiftLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get(config.api + '/blive/gift')
            .then(function (response) {
                _this.setState({
                    rank: response.data,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <MainLayout>
                    <Spin spinning={!this.state.isLoaded}/>
                </MainLayout>
            )
        } else {
            return (
                <MainLayout>
                    <Spin spinning={!this.state.isLoaded}>
                        <BuildTable data={this.state.rank}/>
                    </Spin>
                </MainLayout>
            )
        }
    }
}

export default GiftLog;
