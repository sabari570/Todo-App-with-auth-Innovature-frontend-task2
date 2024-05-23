import React from 'react'
import './loginBgImage.styles.css';

const LoginBgImage = ({imageSrc}) => {
  return (
    <div className='notes-list-img'>
      < img src={imageSrc} />
    </div>
  )
}

export default LoginBgImage
