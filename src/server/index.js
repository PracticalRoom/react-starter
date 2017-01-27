import express from 'express'
import {join} from 'path'
import reactApp from './routes/react-app'
import {renderFile} from 'swig'

const app = express()

// Set view engine
app.engine('html', renderFile)
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'html')

app.use(express.static(join(__dirname, 'public')))

app.use('*', reactApp)

export default app
