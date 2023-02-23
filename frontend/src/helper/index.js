let nav
export function navigationTo(link) {
    nav(link)
}

export function removeToken() {
    localStorage.clear('')
    sessionStorage.clear('')
}
