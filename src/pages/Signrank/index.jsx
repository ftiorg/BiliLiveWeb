import React, {Component} from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Spin, Table} from 'antd';
import axios from 'axios';
import config from '../../config';
import './style.scss';

class BuildTable extends Component {

    render() {
        const columns = [{
            title: '排名',
            dataIndex: 'rank',
            key: 'rank',
        }, {
            title: 'UID',
            dataIndex: 'uid',
            key: 'uid',
        }, {
            title: '用户',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '签到次数',
            dataIndex: 'times',
            key: 'times',
        }, {
            title: '个人空间',
            key: 'space',
            render: (text, record) => (
                <span>
                    <a href={"https://space.bilibili.com/" + record.uid}>查看</a>
                </span>
            ),
        }];
        return (
            <Table dataSource={this.props.data} columns={columns} rowKey="uid"/>
        )
    }
}


class Signrank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get(config.api + '/blive/rank')
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

export default Signrank;
