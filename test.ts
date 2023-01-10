
import LoginPage from './pageObjects/loginPage';
import ProductPage from './pageObjects/productPage';



const { userVariables } = require('testcafe');

fixture `Sauce Labs Demo Site`
    .page (userVariables.url);


const loginPage = new LoginPage();
const productPage = new ProductPage();






test('Type text', async t => {
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');
});

test('login and purchase items', async t => {
    await loginPage.login(t);
    await productPage.checkProductPrice(t);
    await productPage.addProductsToCart(t, 2);
    await productPage.verifyCart(t);
    await productPage.clickCheckout(t);
    await productPage.fillCustomerInformation(t);
    await productPage.clickContinue(t);
    await productPage.clickFinish(t);
});