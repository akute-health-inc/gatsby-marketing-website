import React from 'react'
import CenteredColumns from './../CenteredColumns'
import Avatar from './../Avatar'
import './styles.scss'

function TeamBios(props) {
  return (
    <CenteredColumns>
      {props.people.names.map((name, index) => (
        <div
          className="column is-half-tablet is-one-third-desktop is-flex"
          key={index}
        >
          <div className="TeamBios__card card is-flex">
            <div className="TeamBios__card-content card-content is-flex has-text-centered">
              <div className="TeamBios__avatar-wrapper">
                <Avatar
                  image={props.people.profilePics[index].fluid.src}
                  size={128}
                  alt={name}
                />
              </div>
              <div className="TeamBios__details">
                <p className="is-size-5">{name}</p>
                <p className="is-size-7 is-uppercase has-text-weight-semibold">
                  {props.people.titles[index]}
                </p>
                <p className="TeamBios__bio">{props.people.bios[index]}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CenteredColumns>
  )
}

export default TeamBios
