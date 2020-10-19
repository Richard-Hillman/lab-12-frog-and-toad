export const USER = 'USER';

export function saveUser(user) {
    const stringedUser = JSON.stringify(user);

    localStorage.setItem(USER, stringedUser);
}

export function getUser() {
    const stringedUser = localStorage.getItem(USER);
    return JSON.parse(stringedUser);
}