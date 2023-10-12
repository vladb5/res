const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, UserInfo} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
    }

    class UserController {
        async registration(req, res, next){
            const {email, password, role} = req.body
            if (!email || !password){
                return next(ApiError.badRequest('Некоректный email или password'))
            }

            const candidate = await User.findOne({where: {email}})
            if (candidate){
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email: email, password: hashPassword, role: role})
            await UserInfo.create({userId: user.id})

            const token = generateJwt(user.id, user.email, user.role)

            return res.json({token})
        }

        async check(req, res){
            const token = generateJwt(req.user.id, req.user.email, req.user.role)

            return res.json({token})
        }
    }

    module.exports = new UserController()