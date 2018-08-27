import { ShoppingCart } from './shopping-cart';

export class Order { 
  datePlaced: number; 
  items: any[];
  shippingFee: number = 0;
  sumPrice: number = 0;

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
    this.datePlaced = new Date().getTime();

    this.items = shoppingCart.items.map(i => {
      return {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }
      
    });
    for(let item of this.items){
      this.sumPrice += item.totalPrice;
    }
    this.sumPrice += this.shippingFee;    
  }
}