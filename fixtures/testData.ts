import { test as base, expect } from '@playwright/test';
import {env} from '../utils/env'
import { constants } from 'fs/promises';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductSortingPage } from '../pages/ProductSortingPage';



export interface CheckoutUser{
    firstName: string;
    lastName: string;
    postalCode: string;
}

type TestFixtures = {
    loginPage: LoginPage
    inventoryPage: InventoryPage
    cartPage: CartPage
    checkoutPage: CheckoutPage
    checkoutUser: CheckoutUser
    productSortingPage: ProductSortingPage

};



export const  test = base.extend<TestFixtures>({

    loginPage: async({page},use)=>{
        await use(new LoginPage(page))
    },

    inventoryPage: async({page},use)=>{
        await use(new InventoryPage(page))
    },

    cartPage: async({page},use)=>{
        await use(new CartPage(page))
    },

    checkoutPage: async({page},use)=>{
        await use(new CheckoutPage(page))
    },

    checkoutUser: async({}, use)=> {
        {
            await use({firstName: 'Andrew',
            lastName: 'Doe',
            postalCode: '17741'
        });
            
        }
    },
    productSortingPage: async({page}, use)=> {
        await use(new ProductSortingPage(page))
    }

});


export{expect} from '@playwright/test';
