import React, { useEffect } from 'react'
import AOS from 'aos'

import APX_Banner from '../../pages/APX_Token/APX_Banner'

const Apx_token = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    })
  }, [])

  return (
    <div data-aos="fade-zoom-in">
      <APX_Banner />
    </div>
  )
}

export default Apx_token
