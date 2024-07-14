import User from './models/user'
import dbConnect from './connection'
import normalize from './normalize'

export async function getAll(userId) {
    await dbConnect()
    const user = await User.findById(userId).lean()
    if(!user) return null
    return user.userCharts.map(chart => normalize(chart))
}



