import {app} from '../index'
import request from 'supertest'

it('respond with list od users',async ()=>{
 await request(app)
              .get('/users')
              .send()
              .expect(400)

})