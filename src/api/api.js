module.exports.handler = (evt, ctx, done) => {
  done(null, {
    statusCode: 200, // or 401, or other
    headers: {},
    body: JSON.stringify({ message: 'hello!?!!' })
  })
}