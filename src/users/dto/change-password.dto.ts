export class ChangePasswordDto  {
    new_password: string 
    password: string
    username: string
    user: Record<string, unknown>
}