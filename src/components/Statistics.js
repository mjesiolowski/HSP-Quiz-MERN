import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

const Statistics = ({ isHSPScore }) => {
  const [stats, setStats] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3000/stats/')
      .then((res) => setStats(res.data))
      .catch((error) => setStats({ error }))
  }, [])

  const renderStats = () => {
    try {
      const allUsersCount = stats.length
      const isHSPCount = stats.filter(stats => stats.result >= isHSPScore).length
      const isHSPPercentage = Math.round(isHSPCount / allUsersCount * 100)
      const menCount = stats.filter(stats => stats.gender === 'M').length
      const menPercentage = Math.round(menCount / allUsersCount * 100)
      const womenCount = allUsersCount - menCount
      const womenPercentage = 100 - menPercentage

      return (
        <>
          <p>{allUsersCount} <span>{allUsersCount === 1 ? 'person has' : 'people have'}</span> taken part in the quiz so far.</p>
          <p>{womenPercentage}% of them are women and {menPercentage}% are men.</p>
          <p>{isHSPPercentage}% of them are HSP.</p>
        </>
      )
    }
    catch (e) {
      return (
        <p>Loading statistics...</p>
      )
    }
  }

  renderStats()

  return (
    <div>
      <h2>Statistics</h2>
      {renderStats()}
    </div>
  )
}

const mapStateToProps = ({ quizReducer }) => {
  const { isHSPScore } = quizReducer
  return ({
    isHSPScore
  })
}

export default connect(mapStateToProps)(Statistics)
