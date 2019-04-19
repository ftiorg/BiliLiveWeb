import React, {Component} from 'react';
import MainLayout from '../../layouts/MainLayout'
import {Typography, Divider} from 'antd';

const {Title, Paragraph, Text} = Typography;

class About extends Component {


    render() {
        return (
            <MainLayout>
                <Typography>
                    <Title level={2}>介绍</Title>
                    <Paragraph>
                        没有文案
                    </Paragraph>
                    <Title level={2}>地址</Title>

                    <Paragraph>
                        <ul>
                            <li><a href="https://live.bilibili.com/1598896">直播间</a></li>
                            <li><a href="https://github.com/isdut/BiliLiveWeb">Github</a></li>
                            <li><a href="https://www.isdut.cn">研究所</a></li>
                        </ul>
                    </Paragraph>
                </Typography>
            </MainLayout>
        );
    }
}

export default About;
