const validityCriteria = {
    name: {
        required: true,
        minLength: 2,
        maxLength: 20
    },
    surname: {
        required: true,
        minLength: 2,
        maxLength: 30
    },
    email: {
        required: true,
        email: true
    },
    phone: {
        phone: true,
        maxLength: 13,
        minLength: 10,
    }
};

export default validityCriteria;