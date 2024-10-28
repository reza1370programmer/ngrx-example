export interface userState {
    users: userModel[]
    loading: boolean
}
export interface userModel {
    id?: string
    email: string
    firstName: string
    lastName: string
    avatar?: string
}