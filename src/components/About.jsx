import React from 'react'

import githubLogo from '@images/github.png'
import instagramLogo from '@images/instagram.png'
import twitterLogo from '@images/twitter.png'
import '@styles/components/About.scss'

export const About = () => {
  const data = {
    picture: "https://avatars.githubusercontent.com/u/47896948?s=460&u=45557309b1824f035a2a71fdc38a9f39d58f6070&v=4",
    name: {
      first: 'Felipe',
      last: 'Merchan'
    },
    email: 'felipemerchanfuquen@gmail.com',
    location: {
      country: 'Colombia'
    }
  }

  return (
    <div className="About">
      <div className="card">
        <div className="card_details">
          <div className="card_photo center circle">
            <img src={data.picture} alt={data.name.first} />
          </div>
          <p className="card_title">Hi, My name is</p>
          <p className="card_value">{data.name.first} {data.name.last}</p>
        </div>
        <div className="card_userdata">
          <ul>
            <li>{data.email}</li>
            <li>{data.location.country}</li>
          </ul>
        </div>
        <div className="card_social">
          <a href="https://twitter.com/_FelipeSc_">
            <img src={twitterLogo} />
          </a>
          <a href="https://github.com/FelipeMerchan">
            <img src={githubLogo} />
          </a>
          <a href="https://www.instagram.com/felipemerchan.col/">
            <img src={instagramLogo} />
          </a>
        </div>
      </div>
    </div>
  )
};