import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order$;
  id: string;
  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  async ngOnInit() {
    if (this.id) this.order$ = await this.orderService.getOrderById(this.id);
  
  }

}
