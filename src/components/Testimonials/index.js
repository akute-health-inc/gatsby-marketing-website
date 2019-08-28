import React from 'react'
import CenteredColumns from './../CenteredColumns'
import Avatar from './../Avatar'
import './styles.scss'

function Testimonials(props) {
  return (
    <CenteredColumns>
      {/* {props.items.map((item, index) => ( */}
      {/* key={index} */}
      <div className="column">
        <figure className="testimonial">
          <blockquote className="Testimonials__card card">
            {/* "{item.quote}" */}
            "Akute is amazing!"
          </blockquote>
          <div className="Testimonials__author">
            <div className="Testimonials__avatar-wrapper">
              <Avatar
                image="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi7nbyYu53kAhULT6wKHR21DUgQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fportrait&psig=AOvVaw2zdE7za30Svq2JnfP6Ek9v&ust=1566803278420591"
                size={64}
                alt="person"
              />
            </div>
            <div className="Testimonials__info">
              <div className="has-text-weight-bold has-text-dark">
                {/* {item.name} */}
                Jack Forbush
              </div>
              <div className="Testimonials__company is-size-7">
                {/* {item.company} */}
                Company Name
              </div>
            </div>
          </div>
        </figure>
      </div>
      {/* ))} */}
    </CenteredColumns>
  )
}

export default Testimonials
