import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
      <h2 className="title">Statistics</h2>
      {renderStats()}
      <Link
        className="link button"
        to='/'
        onClick={() => handleClick()}
      >RETURN</Link>
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
