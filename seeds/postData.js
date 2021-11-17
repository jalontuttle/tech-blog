const { Post } = require('../models');
const postData = [
    {
        post_title: 'Why MVC is so important',
        post_body: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        user_id: 1
    },
    {
        post_title: 'Authentification vs. Authorization',
        post_body: 'There is a difference between authentification and authorization. Authentification mean confirming your own identity, whereas authorization means being allowed access to the system.',
        user_id: 1
    },
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;