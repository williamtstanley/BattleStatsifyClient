import React, { Component } from 'react';
import config from '../../config/default';

const urlBase = config.s3.linkBase; 

class ItemList extends Component {
  getImageUrl(id) {
    return `${urlBase}item/${id}.png`; 
  }
  
  render() {
    return (
      <div className='item-list-container'>
        {
          this.props.list.map((itemId, index) => (
            <img
              src={this.getImageUrl(itemId)}
              className='item-icon'
              alt='item-icon'
              key={index}
            />
          ))
        }   
      </div>
    )
  }
}

export default ItemList
