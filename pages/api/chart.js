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
            console.log(createChart)

            return res.status(200).json("Chart created successfully.")

          } catch (error) {
            return res.status(400).json({error: error.message})
          }


          /*case 'DELETE':
              
            try {
              const deleteChart = await JSON.parse(req.body) 
              const deletedChart = await db.book.remove(req.session.user.id, bodyParsed.id);
              if (deletedChart === null) {
                req.session.destroy()
                return res.status(401).json({error: "Authorization error"})
              } 
              return res.status(200).json(deleteChart);
            
            } catch (error) {
              return res.status(400).json({ error: error.message });
            }*/

        default: 
          return res.status(404).end()
      }
    },
  sessionOptions
)