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
                title='The lean startup'
                price={29.99}
                image='https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg'
                rating={3} />
                <Product 
                id='2'
                title=" asdfkjasfd as dlfkjasfd asfd sf"
                price={50.45}
                image='https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_SY400_.jpg'
                rating={5} />
            </div>

            <div className="home_row">
              <Product
              id='3'
              title='jwieuvx,v skjfs fsf '
              price={30.11}
              image='https://m.media-amazon.com/images/I/61JW4dXXnML._AC_UY327_FMwebp_QL65_.jpg'
              rating={4}/>
              <Product
              id='4'
              title='ohy yeksd0we kmsdfaosfijweff'
              price={6.99}
              image='https://m.media-amazon.com/images/I/51yz9sHMSSL._AC_UL480_FMwebp_QL65_.jpg'
              rating={3}/>
              <Product
              id='5'
              title='one two three '
              price={10.75}
              image='https://m.media-amazon.com/images/I/71BYRkQ2H8L._AC_UY327_FMwebp_QL65_.jpg'
              rating={3}/>
            </div>

            <div className="home_row">
              <Product
              id='6'
              title='the one and only pice in the world'
              price={15.65}
              image='https://m.media-amazon.com/images/I/71vZypjNkPS._AC_UY327_FMwebp_QL65_.jpg'
              rating={4}/>
            </div>
        </div>
    </div>
  )
}

export default Home