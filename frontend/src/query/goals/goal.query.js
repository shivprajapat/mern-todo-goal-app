import axios from '../../axios'

export async function getGoals() {
    return await axios.get('/goals')
}
// export async function setGoal({ text }) {
//     return await axios.post('/goals', {
//         text
//     })
// }

// export async function updateGoal({ text, goalId }) {
//     return await axios.put('/goals/:id', {
//         text,
//         goalId
//     })
// }

// export async function deleteGoal({ text, goalId }) {
//     return await axios.delete('/goals/:id', {
//         text,
//         goalId
//     })
// }
