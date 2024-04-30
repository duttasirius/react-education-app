import React from 'react'
import './Testimonials.css'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    

  return (
    <div className='testimonials'>
      
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, Usa </span>
                  </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus saepe animi iste ut quis dolores ducimus maiores illum, autem rerum nostrum neque id nemo, nihil quae nulla quibusdam laboriosam laudantium!</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, Usa </span>
                  </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus saepe animi iste ut quis dolores ducimus maiores illum, autem rerum nostrum neque id nemo, nihil quae nulla quibusdam laboriosam laudantium!</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, Usa </span>
                  </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus saepe animi iste ut quis dolores ducimus maiores illum, autem rerum nostrum neque id nemo, nihil quae nulla quibusdam laboriosam laudantium!</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, Usa </span>
                  </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus saepe animi iste ut quis dolores ducimus maiores illum, autem rerum nostrum neque id nemo, nihil quae nulla quibusdam laboriosam laudantium!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
