// Alias
require('module-alias/register')

// Environment
const mode = process.env.NODE_ENV || 'production'
const envFilePath = `./.env.${mode}`
require('dotenv').config({ path: envFilePath })

// Requires
const express = require('express')
const cors = require('cors')
const YAML = require('yamljs')
const session = require('express-session');
const swaggerUI = require('swagger-ui-express')
const { passport } = require('@/services/auth')
const bodyParser = require('body-parser')
const router = require('./routes')
const i18next = require('i18next')
const Back = require('i18next-fs-backend')
const i18middleware = require('i18next-http-middleware')

i18next
  .use(Back)
  .use(i18middleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: './lang/{{lng}}/translation.json',
    },
  })

// App
const app = express()

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.JWT_SECRET
}));

// Cors
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
)
// Middleware
app.use(bodyParser.json({limit: '50mb'}))
app.use(i18middleware.handle(i18next))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(__dirname));

// Passport
app.use(passport.initialize())

// swagger
const swaggerJsDocs = YAML.load('./api.yaml')
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

// api routes
app.use('/api', router)

app.listen(process.env.PORT_APP, async () => {
  console.log(
    `App has been started on ${process.env.HOST_APP}. Port: ${process.env.PORT_APP}`
  )
})
