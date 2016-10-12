'use strict';

import React from 'react';

const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};



export default class Albums extends React.Component {
  constructor() {
    super();
  }
  componentDidMount () {
    this.props.getAlbumFromServer()
    // fetch('/api/albums')
    //   .then(res => res.json())
    //   .then(albums => this.props.loadAlbums(albums.map(album => convertAlbum(album))));
  }

  render() {
    return (
      <div>
      {this.props.albums.map((album) => (
      <div key={album.id}>
        <h3>Albums</h3>
        <div className="row">

          <div className="col-xs-4">
            <a className="thumbnail" href="#">
              <img src={album.imageUrl} />
              <div className="caption">
                <h5>
                  <span>{album.name}</span>
                </h5>
                <small>{album.songs.length} songs</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  )}
  </div>
  )
  }

}
