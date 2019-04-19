import React, {Component} from 'react';
import {AutoComplete, Spin, Table} from "antd";
import MainLayout from '../../layouts/MainLayout';
import './style.scss';
import axios from "axios";
import config from '../../config';
import DataSet from "@antv/data-set";
import {Axis, Chart, Geom, Tooltip} from "bizcharts";

class BuildTable extends Component {
    render() {
        const dv = new DataSet().createView().source(this.props.data);
        const columns = [{
            title: '序号',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '日期',
            dataIndex: 'date',
            key: 'date',
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
        }];
        const cols = {
            date: {
                name: "日期",
                range: [0, 1]
            },
            time: {
                name: "打卡时间",
                min: 0
            }
        };
        //TODO: 图表的纵坐标
        return (
            <div>
                <Chart height={400} data={dv} scale={cols} width={600}>
                    <Axis name="日期"/>
                    <Axis name="打卡时间"/>
                    <Tooltip
                        crosshairs={{
                            type: "y",
                        }}
                    />
                    <Geom type="line" position="date*time" size={2}/>
                    <Geom
                        type="point"
                        position="date*time"
                        size={4}
                        shape={"circle"}
                        style={{
                            stroke: "#fff",
                            lineWidth: 1
                        }}
                    />
                </Chart>
                <Table dataSource={this.props.data} columns={columns} rowKey="id"/>
            </div>
        )
    }
}

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            dataSource: [],
            isLoaded: false,
            selectUser: 0,
            showData: [],
            isSearching: true
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get(config.api + '/blive/users?list=1')
            .then(function (response) {
                _this.setState({
                    userList: response.data,
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

    onSelect = (value) => {
        console.log('pick' + value);
        this.setState({selectUser: value, isSearching: true}, this.getData)
    };

    handleSearch = (value) => {
        const selector = [];
        this.state.userList.forEach(function (data) {
            if (data.includes(value)) {
                selector.push(data)
            }
        });
        this.setState({
            isSearching: true,
            dataSource: !value ? [] : [value].concat(selector)
        });
    };

    static changeFormat(arr) {
        arr.forEach(function (item, index) {
            arr[index]['timecode'] = parseInt(arr[index]['time'].replace(':', '').replace(':', ''));
        });
        return arr;
    }

    getData() {
        this.setState({isSearching: true});
        const _this = this;
        axios.get(config.api + '/blive/info?user=' + _this.state.selectUser)
            .then(function (response) {
                _this.setState({
                    showData: User.changeFormat(response.data),
                    isSearching: false
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isSearching: true,
                    error: error
                })
            })
    }

    isLoading() {
        return (
            <Spin spinning={this.state.isSearching}/>
        )
    }

    isLoaded() {
        return (
            <BuildTable data={this.state.showData}/>
        )
    }

    render() {
        const {dataSource} = this.state;
        return (
            <MainLayout>
                <div>
                    <AutoComplete
                        dataSource={dataSource}
                        style={{width: 300}}
                        onSelect={this.onSelect}
                        onSearch={this.handleSearch}
                        placeholder="输入您的UID或用户名"
                    />
                </div>
                <div>
                    {this.state.isSearching ? this.isLoading() : this.isLoaded()}
                </div>
            </MainLayout>
        );
    }
}

export default User;
