import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in'
import Lottie from 'react-lottie'
import * as loadingData from '../data/loading.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const timer1 = setTimeout(() => setLoading(true), 1500)
    return () => {
      clearTimeout(timer1)
    }
  }, [])
  return (
    <div>
      {!loading ? (
        <FadeIn>
          <div className="uk-margin-large-top">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </FadeIn>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}

export default Loading
