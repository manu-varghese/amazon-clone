import React from 'react'
import '../Home/Home.css'
import Product from '../Product/Product'

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="baner_image" />

            <div className="home_row">
                <Product
                id='1'
                title='Atomic Habits: The life-changing million copy bestseller Paperback – 30 October 2018'
                price={29.99}
                image='https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg'
                rating={3} />
                <Product 
                id='2'
                title=" OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)"
                price={50.45}
                image='https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_SY400_.jpg'
                rating={5} />
            </div>

            <div className="home_row">
              <Product
              id='3'
              title='Samsung 198 L 4 Star Inverter Direct-Cool Single Door Refrigerator '
              price={30.11}
              image='https://m.media-amazon.com/images/I/71DJffKcMZL._AC_UY327_FMwebp_QL65_.jpg'
              rating={4}/>
              <Product
              id='4'
              title='Borosil - Stainless Steel Hydra Trek - Vacuum Insulated Flask Water Bottle, Black, 500ML'
              price={6.99}
              image='https://m.media-amazon.com/images/I/51yz9sHMSSL._AC_UL480_FMwebp_QL65_.jpg'
              rating={3}/>
              <Product
              id='5'
              title='Usha Thunderbolt Mixer Grinder 800-Watt 3 Jars with Copper Motor(Red)'
              price={10.75}
              image='https://m.media-amazon.com/images/I/71BYRkQ2H8L._AC_UY327_FMwebp_QL65_.jpg'
              rating={3}/>
            </div>

            <div className="home_row">
              <Product
              id='6'
              title='OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1'
              price={15.65}
              image='https://m.media-amazon.com/images/I/71vZypjNkPS._AC_UY327_FMwebp_QL65_.jpg'
              rating={4}/>
            </div>
        </div>
    </div>
  )
}

export default Home