import Syncano from 'syncano-server'


export default function run(ctx) {
  const {response} = Syncano(ctx)

  response.json({ msg: 'Hello World!' })
}

run({
  args: global.ARGS,
  meta: global.META,
  setResponse: global.setResponse,
  HttpResponse: global.HttpResponse
})
