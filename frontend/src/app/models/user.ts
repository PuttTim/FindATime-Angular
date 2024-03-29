enum USER_TIER {
    FREE = 'free',
    PAID = 'paid'
}

interface User {
    _id: number
    username: string
    tier: USER_TIER
    profilePicture?: any
}

export { User, USER_TIER }
