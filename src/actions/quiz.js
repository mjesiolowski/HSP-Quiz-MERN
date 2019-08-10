export const addPoints = (points) => ({
  type: 'ADD_POINTS',
  points
})

export const addAnswer = () => ({
  type: 'ADD_ANSWER',
})

export const incrementSet = () => ({
  type: 'INCREMENT_SET',
})

export const incrementCompletedSteps = () => ({
  type: 'INCREMENT_STEPS',
})

export const resetSettings = () => ({
  type: 'RESET_SETTINGS',
})