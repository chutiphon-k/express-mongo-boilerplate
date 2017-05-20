import { Router } from 'express'

import { Bear } from 'models'
// import { UserController } from 'controllers'

const router = Router()

router.route('/bears')
	.get((req, res) => {
		let bear = new Bear()
		bear.name = 'eieiza'
		bear.save((err) => {
			if (err) {
				res.send(err)
			}
			res.json({ message: 'Bear created' })
		})
	})

// router.route('/users')
// 	.get(UserController.getUsers)
// 	.post(UserController.postUser)

// router.route('/users/:id')
// 	.get(UserController.getUserById)
// 	.patch(UserController.patchUserById)
// 	.delete(UserController.deleteUserById)

export default router
