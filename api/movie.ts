import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const { API_KEY, API_REQUEST_ADDRESS } = process.env
export default async function (req: VercelRequest, res: VercelResponse) {
  const { data } = await axios.get(API_REQUEST_ADDRESS as string, {
    params: { apiKey: API_KEY, ...req.query }
  })
  res.status(200).json(data)
}
