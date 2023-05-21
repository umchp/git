import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
            <div className='col mb-3'>
                  
                      <img src='img/logo1.png' className='bi me-2' width={200} height={90}>
                      </img>
            </div>
                    <div className='col mb-4'>
                        <ul className='nav flex-column'>
                          <li className='nav-item mb-3'>
                           <a href='#'> На главную</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a href='/favorites'> Избранное</a>
                          </li>
                          <li className='nav-item mb-3'>
                          <a href='/cart'> Корзина</a>
                          </li>
                        </ul>
                    </div>
          
        </footer>
    </div>
  )
}

export default Footer