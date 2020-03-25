import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in'

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
          <div className="uk-margin-xlarge-top">
            <div className="uk-spinner" uk-spinner="ratio: 3" />
          </div>
        </FadeIn>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}

export default Loading
