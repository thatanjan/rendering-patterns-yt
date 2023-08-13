import express from 'express'
import axios from 'axios'
import ejs from 'ejs'

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts',
		)
		const data = response.data

		res.render('index', { posts: data })
	} catch (error) {
		console.error('Error:', error)
		res.status(500).send('An error occurred')
	}
})

app.get('/post/:id', async (req, res) => {
	const postId = req.params.id

	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${postId}`,
		)
		const data = response.data

		res.render('post', { post: data })
	} catch (error) {
		console.error('Error:', error)
		res.status(500).send('An error occurred')
	}
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
