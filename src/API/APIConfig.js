export const APIConfig = {
    BASE_URL: 'https://tamkeen-dev.com/api',
    ENDPOINTS:{
        AUTH:{
            AUTH_LOGIN: '/user/login?_format=json',
            AUTH_REGISTRATION: '/user/registerpass?_format=json',
            AUTH_LOGOUT: (TOKEN)=>`/user/logout?_format=json&token=${TOKEN}`,
            DELETE_USER: (USER_ID)=>`/user/${USER_ID}?_format=json`,
        },
        USER:{
            CURRENT_PROFILE: (USER_ID)=>`/user/${USER_ID}?_format=json`,
            USER_LIST: '/users-list?_format=json',
            EDIT_USER: (USER_ID)=>`/user/${USER_ID}?_format=json`,
            USER_PICTURE: '/file/upload/user/user/user_picture?_format=json'
        },
        BLOG: {
            CREATE_BLOG: '/node?_format=json',
            BLOG_LIST: '/blogs-api',
            CURRENT_USER_ARTICLES: '/blogs-api-current-user',
            ARTICLE_BY_ID: (ARTICLE_ID)=>`/node/${ARTICLE_ID}?_format=json`,
            ARTICLE_DETAILS: (ARTICLE_ID)=>ARTICLE_BY_ID(ARTICLE_ID),
            UPDATE_ARTICLE: (ARTICLE_ID)=>ARTICLE_BY_ID(ARTICLE_ID),
            DELETE_ARTICLE: (ARTICLE_ID)=>ARTICLE_BY_ID(ARTICLE_ID)
        },
        IMAGE_UPLOAD: '/file/upload/node/blog/field_image?_format=json',
        IMAGES_UPLOAD: '/file/upload/node/blog/field_gallery?_format=json',
        CATEGORIES:{
            TAGS: '/terms/tags',
            CATEGORIES: '/terms/category',
            FAQ_CATEGORIES: '/terms/faq-category',
            HOW_DID_YOU_FIND_US: '/terms/hear'
        },
        TESTIMONIAL: '/testimonials',
        FAQ: '/faq-list',
        GET_CSRF_TOKEN: '/session/token'
    }
}