const userEmail = "utest202101@gmail.com";
const userPassword = "Test1234";

const emailField = "[name='email']";
const passwordField = "[name='password']";
const loginBtn = "text='Sign In'";
const userAvatar = "[data-cy='userAvatar']";
const logoutTitle = "text='Log out'";
exports.username = userName = "[data-cy='userAvatar']";


exports.UserDashboardPage = class UserDashboardPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async fillEmailField() {
        await this.page.locator(emailField).fill(userEmail);
    }

    async fillPasswordField() {
        await this.page.locator(passwordField).fill(userPassword);
    }

    async clickOnLoginBtn(){
        await this.page.click(loginBtn);
    }

    async clickOnUserAvatar(){
        await this.page.click(userAvatar);
    }

    async clickOnLogout(){
        await this.page.click(logoutTitle);
    }

}
