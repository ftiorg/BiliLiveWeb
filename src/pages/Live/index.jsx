import React, {Component} from 'react';
import MainLayout from '../../layouts/MainLayout';
import {Button} from "antd";
import './style.scss';

class Live extends Component {
    render() {
        return (
            <MainLayout>
                <div className="liveBox">
                    <embed
                        src="https://s1.hdslb.com/bfs/static/blive/live-assets/player/flash/pageplayer-latest.swf?room_id=1598896&cid=1598896&state=LIVE"
                        type="application/x-shockwave-flash"
                        width="600px"
                        height="400px"
                    />
                    <br/>
                    <Button type="primary" href="https://live.bilibili.com/1598896" size="large">进入Bilibili观看</Button>
                </div>
            </MainLayout>
        )
    }
}

export default Live;