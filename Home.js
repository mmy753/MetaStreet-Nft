import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Card2 from './Card2';
import Img1 from './img1.jpg'



const Home = ({nfts}) => {

    useEffect(() => {
     Aos.init();
      }, [ ])
    
  return (
    <section className='py-4 py-lg-5 container'>
        <div className='row'>
            {nfts.map((nft, index) => {
                return <Card2 aos="flip-left" aos_offset="100" nft={nft} key={index} />
            })}
        </div>
    </section>
  )
}

export default Home