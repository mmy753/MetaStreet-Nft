import React from 'react'

const Card2 = ({nft,aos,aos_offset}) => {
  return (
    <div data-aos={aos} data-aos-offset={aos_offset} className='col-l1 col-md-6 col-lg-3 mx-0 mb-4'>    
    <div class="card p-0 overflow-hidden h-100 shadow">
        <img class="card-img-top" src={nft.meta.content[0].url} />
            <div class="card-body">
                <h5 class="card-title">{nft.meta.name}</h5>
                <h6 class="card-title">Contract : </h6>
                <p class="card-text">{nft.contract}</p>
            </div>
    </div>
</div> 
  )
}

export default Card2