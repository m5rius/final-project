import React from 'react'
import AlbumItem from '../AlbumItem/AlbumItem'

const AlbumsList = ({ albums }) => {
    let albumsElement = <p>No albums...</p>

    if (albums.length > 0) {
        albumsElement = (
            <ul className='albums-item-list'>
                {albums.map((album) => <AlbumItem key={album.id} data={album}/>)}
            </ul>
        )
    }
  return (
    <div>{albumsElement}</div>
  )
}

export default AlbumsList