import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'ShopEase | Home' },
  { path: 'products', component: Products, title: 'ShopEase | Shop' },
  { path: 'products/:id', component: ProductDetail, title: 'ShopEase | Product' },
  { path: 'cart', component: Cart, title: 'ShopEase | Cart' },
  { path: 'contact', component: Contact, title: 'ShopEase | Contact' },
  { path: '**', redirectTo: '' }
];