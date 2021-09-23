import {Component, OnInit} from '@angular/core';

class Product {
  id: number;
  name: string;
  price: number;
  img: string;
  status: boolean;

  constructor(id: number, name: string, img: string, price: number, status: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.status = status;
  }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id: number = 0;
  name: string = '';
  price: number = 0;
  img: string = '';
  status: boolean = true;

  list: Product[] = [];


  constructor() {
    this.list.push(new Product(1, 'SGK-Toán', 'https://cf.shopee.vn/file/4602175a2bcbea60cf188057fb2a47db', 10000, true));
    this.list.push(new Product(2, 'SGK-Văn', 'https://sachhoc.com/image/cache/catalog/LuyenThi/Lop10-12/Sach-giao-khoa-ngu-van-12-tap-1-500x554.jpg', 12000, true));
    this.list.push(new Product(3, 'SGK-Sử', 'https://lh3.googleusercontent.com/proxy/x-0CAGDYDs0t6-bWhs0ZkhNWQtbv2Ztfqu4cgYDobz7eTgXBUWtblcJv20RmQkgO16AhrUuOIIPd0g5lmnf93HuJtx7XukCDXZJkkQ', 5000, false));

  }

  ngOnInit(): void {
  }

  deleteProduct(id: any) {
    this.list = this.list.filter(lists => {
      return lists.id !== id;
    })
  }

  showEdit(id: number) {
    // console.log();
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.id = this.list[i].id;
        this.name = this.list[i].name;
        this.img = this.list[i].img;
        this.price = this.list[i].price;
        this.status = this.list[i].status;
        return;
      }
    }
  }


  createProduct() {
    this.list.push(new Product(this.id, this.name, this.img, this.price, this.status));
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.img = '';
  }

  submitEdit(id: number) {
    console.log(id);
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        console.log(typeof(this.status));
        this.list[i] = new Product(this.id, this.name, this.img, this.price, this.status);
        console.log(this.list[i]);
      }
    }
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.img = '';
    this.status = true;
  }
}
