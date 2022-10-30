import { Router } from 'express'
import * as cardsCtrl from '../controllers/cards.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/search', checkAuth, cardsCtrl.search)

export { router }
