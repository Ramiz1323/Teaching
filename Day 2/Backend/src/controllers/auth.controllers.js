function login(req, res) {
    res.status(200).json({
        message: "Login route",
    })
}

function signup(req, res) {
    res.status(200).json({
        message: "Signup route",
    })
}

module.exports = { login,signup }