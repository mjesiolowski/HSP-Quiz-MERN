import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Statistics = ({ isHSPScore }) => {
  const [stats, setStats] = useState({})

  useEffect(() => {
    axios.get('/stats/')
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
      const womenPercentage = 100 - menPercentage

      return (
        <>
          <p className="text"><strong>{allUsersCount}</strong> <span>{allUsersCount === 1 ? 'person has' : 'people have'}</span> taken part in the quiz so far.</p>
          <p className="text"><strong>{womenPercentage}%</strong> of them are women and <strong>{menPercentage}%</strong> are men.</p>
          <p className="text"><strong>{isHSPPercentage}%</strong> of them are HSP.</p>
        </>
      )
    }
    catch (e) {
      return (
        <p className="text">Loading statistics...</p>
      )
    }
  }

  renderStats()

  return (
    <div className="statistics">

      <div className="statistics__content">
        <h2 className="title">Statistics</h2>
        {renderStats()}
      </div>

      <div className="statistics__buttons buttons">
        <Link
          className="statistics__button link button"
          to='/'
        >RETURN</Link>
      </div>

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
