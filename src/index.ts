import { Hono } from 'hono'

type Bindings = {
  ANDROID_LINK: string
  IOS_LINK: string
  WEB_LINK: string
}

const app = new Hono<{Bindings: Bindings}>()

app.get('/', (c) => {
  const userAgent = (c.req.header()['user-agent'] as string).toLowerCase();
  if (userAgent.includes('android')) {
    return c.redirect(c.env.ANDROID_LINK);
  } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
    return c.redirect(c.env.IOS_LINK);
  } else {
    return c.redirect(c.env.WEB_LINK);
  }
})

export default app
