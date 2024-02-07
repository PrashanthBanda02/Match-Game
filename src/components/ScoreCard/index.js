import './index.css'

const ScoreCard = props => {
  const {score} = props

  return (
    <div className="score-card">
      <p className="score-card-Your-score-text">Your Score</p>
      <p className="score">{score}</p>
    </div>
  )
}

export default ScoreCard
