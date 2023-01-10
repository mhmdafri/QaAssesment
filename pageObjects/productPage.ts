import { Selector } from 'testcafe';
import  {faker} from '@faker-js/faker';


export default class ProductPage {
    public productPrice: Selector;
    public addToCartButton: Selector;
    public cartIcon: Selector;
    public checkoutButton: Selector;
    public firstNameInput: Selector;
    public lastNameInput: Selector;
    public zipCodeInput: Selector;
    public continueButton: Selector;
    public finishButton: Selector;


    constructor() {
        this.productPrice = Selector('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.pricebar > div');
        this.addToCartButton = Selector('.btn_primary.btn_inventory');
        this.cartIcon = Selector('#shopping_cart_container');
        this.checkoutButton = Selector('#checkout');
        this.firstNameInput = Selector('#first-name');
        this.lastNameInput = Selector('#last-name');
        this.zipCodeInput = Selector('#postal-code');
        this.continueButton = Selector('#continue');
        this.finishButton = Selector('#finish');
    }

    async checkProductPrice(t: TestController) {
        await t.expect(this.productPrice.innerText).eql('$49.99');
    }

    async addProductsToCart(t: TestController, quantity: number) {
        for (let i = 0; i < quantity; i++) {
            await t.click(this.addToCartButton);
        }
    }

    async verifyCart(t: TestController) {
        await t.click(this.cartIcon);
        await t.expect(Selector('.cart_item').count).eql(2);
    }

    async clickCheckout(t: TestController) {
        await t.click(this.checkoutButton);
    }

    async fillCustomerInformation(t: TestController) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const zipCode = faker.address.zipCode();

        await t
            .typeText(this.firstNameInput, firstName)
            .typeText(this.lastNameInput, lastName)
            .typeText(this.zipCodeInput, zipCode)
            
    }
    async clickContinue(t: TestController) {
        await t.click(this.continueButton);
    }
    async clickFinish(t: TestController) {
        await t.click(this.finishButton);
    }
   
}