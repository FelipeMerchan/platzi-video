import React from 'react'

import { About } from '@components/About'
import '@styles/pages/Home.scss'

export const Home = () => {
  return (
    <>
      <main className="Home">
        <div className="wrapper">
          <div className="Home-content">
            <About />
          </div>
        </div>
      </main>
    </>
  )
}