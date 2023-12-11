import React from 'react'
import './style.scss'
import HomeCards from '../../Component/HomeCards'
import ProductOverView from '../../Component/ProductOverView'
import ProductOverViewCards from '../../Component/ProductOverViewCards'


function HomePage() {
  return (
    <div>
   
   <HomeCards></HomeCards>
   <ProductOverView></ProductOverView>
   <ProductOverViewCards></ProductOverViewCards>
    </div>
  )
}

export default HomePage