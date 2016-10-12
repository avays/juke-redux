import { connect } from 'react-redux';
import React, { Component } from 'react';
import { store, RECEIVE_ALBUMS_FROM_SERVER, receiveAlbums } from '../myRedux.js';
import Albums from '../components/Albums.js'
import fetchAlbumsFromServer from '../myRedux.js'




const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

const mapStateTopProps = ({ albums }, ownProps) => ({ albums });


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAlbumFromServer: function() {dispatch({type: RECEIVE_ALBUMS_FROM_SERVER, albums: ["hello"]})},
    fetchTheAlbums: function () {
      let theFunction = fetchAlbumsFromServer()
      dispatch(theFunction)}
  }
}
    // loadAlbums (albums) {
    //   dispatch(receiveAlbums(albums));
    // }


const AlbumsContainer = connect(
  mapStateTopProps,
  mapDispatchToProps
)(Albums);

export default AlbumsContainer;
