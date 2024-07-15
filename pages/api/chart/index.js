import { withIronSessionApiRoute } from "iron-session/next";
import sessionOptions from "../../../config/session"
import db from '../../../db'

export default withIronSessionApiRoute(
  async function handler(req, res) {
      if (!req.session.user) {
        return res.status(401).json({ error: "Authorization error" })
      }
      switch(req.method) {
        case 'POST' :
          try  {
          const createChart = JSON.parse(req.body) 
          const createdChart = await db.chart.add(req.session.user.id, createChart);

          if(createdChart === null) {
            req.session.destroy()
            return res.status(401).json({error: "Authorization error"})
          }

          return res.status(200).json(createChart)
          }
           catch (error) {
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