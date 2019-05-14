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
            title: '弹幕',
            dataIndex: 'message',
            key: 'message',
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


class DanmuLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get(config.api + '/blive/danmu')
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

export default DanmuLog;
