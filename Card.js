import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
        <div data-aos={this.props.aos} data-aos-offset={this.props.aos_offset} className='col-l1 col-md-6 col-lg-3 mx-0 mb-4'>    
        <div class="card p-0 overflow-hidden h-100 shadow">
            <img class="card-img-top" src={nft.meta.content[0].url} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{nft.meta.name}</h5>
                    <p class="card-text">{nft.contract}</p>
                </div>
        </div>
    </div> 
    )
  }
}
