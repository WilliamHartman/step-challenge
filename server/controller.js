module.exports = {
    getSteps: (req, res) => {
        const db = req.app.get('db')
        console.log('In getSteps')

        db.get_steps()
            .then(steps => {
                res.status(200).send(steps)

            })
    }
}