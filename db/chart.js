import User from './models/user'
import dbConnect from './connection'
import normalize from './normalize'

export async function getAll(userId) {
    await dbConnect()
    const user = await User.findById(userId).lean()
    if(!user) return null
    return user.userCharts.map(chart => normalize(chart))
}

export async function add(userId, chart) {
    await dbConnect()
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { userCharts: chart } },
      { new: true }
    )
    if (!user) return null
    const addedChart = user.userCharts.find(cht => cht.chartId === chart.chartId)
    return normalize(addedChart)

  }



