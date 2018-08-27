import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css']
})
export class AdminOrderDetailComponent implements OnInit {
  order$;
  id: string;
  constructor(private route: ActivatedRoute, private orderService: OrderService) {
   
   }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.order$ = await this.orderService.getOrderById(this.id);
    
  }

}
