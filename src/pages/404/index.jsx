import React, {Component} from 'react';
import MainLayout from '../../layouts/MainLayout';
import './style.scss';

class NotMatch extends Component {
    render() {
        return (
            <MainLayout>
                <h2>404</h2>
                <h3>找不到该页面</h3>
            </MainLayout>
        );
    }
}

export default NotMatch;
