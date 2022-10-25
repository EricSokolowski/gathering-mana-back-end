import { Router } from 'express'
import * as spellsCtrl from '../controllers/spells.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/search', checkAuth, spellsCtrl.search)

export { router }
