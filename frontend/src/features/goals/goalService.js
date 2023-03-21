import axios from 'axios'

const API_URL = 'http://localhost:8000/api/goals/'

// Create Goal
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL, goalData, config)
    return response.data
}

// Show All Goals
const getGoals = async () => {
}

// Delete Goal
const deleteGoal = async () => {
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
}

export default goalService