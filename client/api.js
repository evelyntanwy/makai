import request from 'superagent'

export function fetchGreetings () {
  return request
    .get('/api/v1/hello')
    .then((response) => {
      return response.body
    })
}
