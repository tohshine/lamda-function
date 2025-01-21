import serverless,{Handler} from 'serverless-http'
import {app} from '../../src'

const _handler = serverless(app, { provider: 'aws' })

export const handler: Handler = async (event, context) => {
  return _handler(event, context)
}