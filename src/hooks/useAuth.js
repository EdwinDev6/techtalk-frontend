

const useAuth = (auth) => {
    if (auth) {
        localStorage.setItem("auth", auth)
    }
    else {
        return localStorage.getItem("auth")
    }
}

export default useAuth