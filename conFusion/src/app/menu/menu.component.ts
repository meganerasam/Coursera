import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  //use this name to be used in the template file
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //Declare variables
  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }
}
