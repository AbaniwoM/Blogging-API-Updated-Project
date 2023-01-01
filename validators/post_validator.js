const Joi = require('joi');

const PostAddSchema = Joi.object({
    title: Joi.string()
            .min(5)
            .max(255)
            .trim()
            .required(),
    description: Joi.string()
                .min(5)
                .max(500)
                .optional()
                .trim(),
    author: Joi.string()
            .min(5)
            .max(20)
            .optional()
            .trim(),
    body: Joi.string()  
          .min(10) 
          .required()
          .trim(), 
    year: Joi.number()
          .integer()
          .required()
          .min(2022),
    createAt: Joi.date()
          .default(Date.now),
    lastUpdateAt: Joi.date()
          .default(Date.now),
});

const PostUpdateSchema = Joi.object({
    title: Joi.string()
            .min(5)
            .max(255)
            .trim(),
    description: Joi.string()
                .min(5)
                .max(500)
                .trim(),
    author: Joi.string()
            .min(5)
            .max(20)
            .trim(),
    body: Joi.string()  
          .min(10) 
          .trim(), 
    year: Joi.number()
          .integer()
          .min(2022),
});

async function AddPostValidationMW(req, res, next) {
    const postPayLoad = req.body

    try {
       await PostAddSchema.validateAsync(postPayLoad)
       next()
    } catch (error) {
       next({
            message: error.details[0].message,
            status: 400
       })
    }
}

async function UpdatePostValidationMW(req, res, next) {
    const postPayLoad = req.body

    try {
       await PostUpdateSchema.validateAsync(postPayLoad)
       next()
    } catch (error) {
       next({
            message: error.details[0].message,
            status: 400
       })
    }
}

module.exports = {
    AddPostValidationMW,
    UpdatePostValidationMW
}
