import React from 'react'
import '../Styles/Footer/footer.css'

const prodCat = [
  'Smartphones',
  'Laptops',
  'DSLR Cameras',
  'Televisions',
  'Air Conditioners',
  'Refrigerators',
  'Kitchen Appliances',
  'Accessories',
  'Personal Care & Grooming',
]

const siteInfo = [
  'About Reliance Digital',
  'resQ Services',
  'Site Map',
  'Gift Cards',
  'Corporate Enquires',
  'Contact Us',
]

const resCenter = [
  'Product Reviews',
  'Buying Guides',
  'How Tos',
  'Featured Stories',
  'Events & Happenings',
]

const policies = [
  'Terms of Use',
  'FAQs',
  'Cancellation and Return Policy',
  'Pricing and Payments Policy',
  'Shipping and Delivery Policy',
  'Privacy Policy',
  'E-waste Recycling Policy',
  'EMI and Additional Cashback T&C',
  'RelianceOne Loyalty Program T&C',
  'Caution Notice',
]

export default function Footer() {


  return (
    <div>

      <div className='topFooter' style={{width:'100%'}}>
        <div id='align'>
          <div className='footerParent'>
            <h4>PRODUCT CATEGORIES</h4>
            <div className='footerChild'>
              {
                prodCat.map((ele, i) => {
                  return <ol key={i}>{ele}</ol>
                })
              }
            </div>
          </div>

          <div className='footerParent'>
            <h4>SITE INFO</h4>
            <div className='footerChild'>
              {
                siteInfo.map((ele, i) => {
                  return <ol key={i}>{ele}</ol>
                })
              }
            </div>
          </div>

          <div className='footerParent'>
            <h4>RESOURCE CENTRE</h4>
            <div className='footerChild'>
              {
                resCenter.map((ele, i) => {
                  return <ol key={i}>{ele}</ol>
                })
              }
            </div>
          </div>

          <div className='footerParent'>
            <h4>POLICIES</h4>
            <div className='footerChild'>
              {
                policies.map((ele, i) => {
                  return <ol key={i}>{ele}</ol>
                })
              }
            </div>
          </div>
        </div>
      </div>

      <div className='topFooter'>
        <div>
          <h4>FOLLOW US</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '80px', marginTop: '5px' }}>
            <img width='20px' src="https://cdn-icons-png.flaticon.com/512/3665/3665141.png" alt="" />
            <img width='20px' src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png" alt="" />
            <img width='20px' src="https://cdn-icons-png.flaticon.com/512/2504/2504965.png" alt="" />
          </div>
        </div>

        <div>
          <h4>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h4>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '300px', marginTop: '5px' }}>
            <img width='140px' src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="" />
            <img width='140px' src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="" />
          </div>
        </div>

      </div>

      <div id='botFooter'>
        <div>
          <h3 style={{ textDecoration: 'underline' }}>Disclaimer</h3>
          <p >Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
        </div>
        <hr style={{ border: '0.5px solid gray' }} />
        <p > © 2022 Reliance Digital. All Rights Reserved.</p>
      </div>

    </div>
  )
}
