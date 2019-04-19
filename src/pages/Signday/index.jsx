import React, {Component} from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Spin, Table, DatePicker} from 'antd';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn';
import config from '../../config';
import './style.scss';

moment.locale('zh-cn');

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
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '打卡时间',
            dataIndex: 'time',
            key: 'time',
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

class Signday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            data: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        this.getData()
    }

    isLoading() {
        return (
            <Spin spinning={!this.state.isLoaded}/>
        )
    }

    isLoaded() {
        return (
            <BuildTable data={this.state.data}/>
        )
    }

    getData() {
        this.setState({isLoaded: false});
        const _this = this;
        axios.get(config.api + '/blive/day?date=' + _this.state.date.format('YYYY-MM-DD'))
            .then(function (response) {
                _this.setState({
                    data: response.data,
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

    onChange = (date, dateString) => {
        console.log('pick ' + dateString);
        this.setState({date: date}, this.getData);
    };

    render() {
        return (
            <MainLayout>
                <div className="pickDate">
                    <span>选择日期：</span>
                    <DatePicker
                        placeholder={moment().format('YYYY-MM-DD')}
                        defaultPickerValue={moment()}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    {this.state.isLoaded ? this.isLoaded() : this.isLoading()}
                </div>
            </MainLayout>
        )
    }
}

export default Signday;
