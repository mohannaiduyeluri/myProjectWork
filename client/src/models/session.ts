import router from "../router";
import * as users from "../models/user"
import { reactive } from "vue";


const session = reactive({
    user: null as users.User | null,
})

export async function Login(userId: string, password: string) {
    const user = users.usersList.find(u => u.userId === userId);
    if (!user) {
        throw { message: "Invalid User" };
    }
    if(user.password !== password) {
        throw { message: "Password Incorrect" };
    }
    session.user = user;
    router.push('/');
}
export function Logout() {
    session.user = null;
    router.push('/login');
}
    
export default session;