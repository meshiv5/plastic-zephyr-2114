import React from 'react'
import '../Styles/Home/Home.css'

export default function ProductsCard({ url, title, dealPrice, mrp, youSave }) {

  return (
    <div id='productsCard'>
      <img src="https://www.reliancedigital.in/build/client/images/limited_time_offer.png" alt="limitedTimeImage" />

      <div>
        <img id='productsImage' src={`https://www.reliancedigital.in${url}`} alt="productsImage" />
      </div>

      <p>{title.substr(0, 50)}</p>
      <br />
      <p className='ProductPrice'>Offer Price: <span style={{ color: 'black', fontWeight: '700px' }}>₹{dealPrice}</span> </p>
      <p className='ProductPrice'>M.R.P: <span style={{textDecoration:'line-Through'}}>₹{mrp}</span> </p>
      <p className='ProductPrice'>You Save: {youSave}</p>
      <p id='offersAvailable'>OFFERS AVAILABLE</p>
    </div>
  )
}
