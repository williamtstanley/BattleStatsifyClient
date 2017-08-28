import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../../config/default';
import { ToolTip } from '../';

const urlBase = config.s3.linkBase;

@connect(
  (state) => ({
    items: state.items,
  })
)
class ItemList extends Component {
  constructor(props) {
    super(props)
    this.getItemDetails = this.getItemDetails.bind(this)
  }
  getImageUrl(id) {
    return `${urlBase}item/${id}.png`; 
  }
  getItemDetails(id) {
    return this.props.items.find((item) => item.id === id)
  }
  
  render() {
    //TODO make item details card for tool tips 
    return (
      <div className='item-list-container'> 
        {
          this.props.list.map((itemId, index) => (
            <ToolTip 
              tip={<span>{this.getItemDetails(itemId).name}</span>}
              key={index}
            >
              <img
                src={this.getImageUrl(itemId)}
                className='item-icon'
                alt='item-icon'
              />
            </ToolTip>
          ))
        }
      </div>  
    )
  }
}

export default ItemList
