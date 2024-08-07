import { withIronSessionApiRoute } from "iron-session/next";
import sessionOptions from "../../config/session"
import db from '../../db'

export default withIronSessionApiRoute(
  async function handler(req, res) {
      if (!req.session.user) {
        return res.status(401).json({ error: "You are not authorized to access this page." })
      }

      switch(req.method) {
        case 'POST' :
          try  {
            const chart = req.body
            console.log(req.session)
            const createChart = await db.chart.create(req.session.user._id, chart);
            console.log(createChart);

            return res.status(200).json("Chart created successfully.")

          } catch (error) {
            return res.status(400).json({error: error.message})
          }

        case 'DELETE':
          try {
            const deleteChart = await db.chart.remove(req.session.user.id, req.body.id)
            console.log(deleteChart);

            return res.status(200).json("Chart deleted successfully.")
            
          } catch (err) {
            return res.status(400).json({ error: err.message })
          }

        default: 
          return res.status(404).end()
      }
    },
  sessionOptions
)