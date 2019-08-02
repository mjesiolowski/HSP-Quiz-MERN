import React, { useEffect } from 'react';
import axios from 'axios'

const Statistics = () => {

  useEffect(() => {
    axios.get('http://localhost:3000/stats/')
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e))
  }, [])

  return (
    <div>
      <h2>Statistics component</h2>
    </div>
  )

}

export default Statistics;
