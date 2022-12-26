import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';
import { Product, products } from 'src/app/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined
  products = products

  constructor(private route: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit(): void {
    // getting the productId from the current route url
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'))
    this.product = this.products.find((product) => product.id === productIdFromRoute)
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    window.alert('Your product has been added to the Cart!')
  }

}
