import { Participant } from './participant'
import { User } from './user'

export interface Room {
    host: User
    id: string
    name: string
    description: string
    location: string
    dates: Date[]
    duration: number
    participants: Participant[]
}
