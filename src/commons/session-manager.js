class SessionManager {
    setSession(session) {
        this.session = session;

        window.localStorage.setItem('userId', this.session.userId);
        window.localStorage.setItem('username', this.session.username);
    }

    getSession() {
        // First check local storage.
        this.session = this.session || {
            userId: window.localStorage.getItem('userId'),
            username: window.localStorage.getItem('username')
        }
        return this.session;
    }

    isLoggedIn() {
        return this.getSession() && this.getSession().userId;
    }

    logout() {
        window.localStorage.clear();
    }
}

const sessionManager = new SessionManager();
export default sessionManager;