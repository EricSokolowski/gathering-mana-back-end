import { Router } from 'express'
import * as decksCtrl from '../controllers/deck.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

router.get('/', checkAuth, decksCtrl.index)

router.get('/:id', checkAuth, decksCtrl.show)

router.post('/', checkAuth, decksCtrl.create)

router.post('/:id/comments', checkAuth, decksCtrl.createComment)

router.put('/:id', checkAuth, decksCtrl.update)

router.delete('/:id', checkAuth, decksCtrl.delete)


export { router }