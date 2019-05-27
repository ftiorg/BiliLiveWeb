import React, {Component} from 'react';
import APlayer from 'aplayer';
import MainLayout from '../../layouts/MainLayout';
import 'aplayer/dist/APlayer.min.css';

const ap = new APlayer({
    audio: [{
        name: 'name',
        artist: 'artist',
        url: 'url.mp3',
        cover: 'cover.jpg'
    }]
});

class Music extends Component {


    render() {
        return (
            <MainLayout>
                <p>MUSIC</p>
            </MainLayout>
        );
    }
}

export default Music;
