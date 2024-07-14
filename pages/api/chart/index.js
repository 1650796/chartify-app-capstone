import { withIronSessionApiRoute } from "iron-session/next";
import sessionOptions from "../../config/session"
import db from '../../db'

export default withIronSessionApiRoute(
  async function handler(req, res) {
      if (!req.session.user) {
        return res.status(401).json({ error: "User Not Found" })
      }
      switch(req.method) {
        case 'POST' :
          try  {
          const chart = JSON.parse(req.body) 
          const createChart = await db.chart.add(req.session.user.id, chart);

          if(createChart === null) {
            req.session.destroy()
            return res.status(401).json({error: "User not found"})
          }

          return res.status(200).json(createChart)
          }
           catch (error) {
            return res.status(400).json({error: error.message})
          }


          /*case 'DELETE':
              
            try {
              const bodyParsed = await JSON.parse(req.body) 
              const bookDelete = await db.book.remove(req.session.user.id, bodyParsed.id);
              if (bookDelete === null) {
                req.session.destroy()
                return res.status(401).json({error: "User Not Found"})
              } 
              return res.status(200).json(bodyParsed);
            
            } catch (error) {
              return res.status(400).json({ error: error.message });
            }*/

            default: 
            return res.status(404).end()
        
      }
  },
  sessionOptions
)