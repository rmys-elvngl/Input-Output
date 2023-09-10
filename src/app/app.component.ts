import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product = { name: 'Laptop', stock: 10 };

  onProductClick() {
    alert('Ürüne Tıklandı!');
  }
}

