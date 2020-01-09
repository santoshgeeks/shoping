import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { SizeFilterPipe } from '../size-filter.pipe';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  size = [
    {value: 'sm', viewValue: 'sm'},
    {value: 'xl', viewValue: 'xl'},
    {value: 'XXl', viewValue: 'XXl'}
  ];
items=[
  {url:"../../assets/t-shirts/12.jpg",type:"Brown, Round Neck T-Shirt",price:10,Fractionprice:29,deliveryFree:true,size:"S",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/2.jpg",type:"Skuul",price:29,Fractionprice:30,deliveryFree:true,size:"M"},
  {url:"../../assets/t-shirts/14.jpg",type:"Dark Blue-Navy T-Shirt",price:49,Fractionprice:45,deliveryFree:true,size:"XS",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/5.jpg",type:"Gray Round neck T-Shirt",price:14,Fractionprice:19,deliveryFree:true,size:"XXL",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/16.jpg",type:"Yellow Round Neck T-Shirt",price:13,Fractionprice:45,deliveryFree:true,size:"L",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/7.jpg",type:"Wine Skul T-Shirt",price:10,Fractionprice:29,deliveryFree:true,size:"ML",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/16.jpg",type:"Yellow Round Neck T-Shirt",price:10,Fractionprice:10,deliveryFree:true,size:"XL",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/16.jpg",type:"Yellow Round Neck T-Shirt",price:14,Fractionprice:20,deliveryFree:true,size:"XXL",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/12.jpg",type:"Brown, Round Neck T-Shirt",price:14,Fractionprice:13,deliveryFree:true,size:"XXL",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/14.jpg",type:"Dark Blue-Navy T-Shirt",price:49,Fractionprice:70,deliveryFree:false,size:"M",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/12.jpg",type:"Brown, Round Neck T-Shirt",price:22,Fractionprice:18,deliveryFree:false,size:"S",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/15.jpg",type:"Black And White lining T-Shirt",price:18,Fractionprice:12,deliveryFree:true,size:"M",AddCartbuttonColor:"#ffc020"}, 
   {url:"../../assets/t-shirts/2.jpg",type:"Skuul",price:23,Fractionprice:45,deliveryFree:true,size:"ML",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/14.jpg",type:"Dark Blue-Navy T-Shirt",price:134,Fractionprice:19,deliveryFree:false,size:"XS",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/19.jpg",type:"Black Full Slive T-Shirt",price:13,Fractionprice:63,deliveryFree:true,size:"XL",AddCartbuttonColor:"#ffc020"},
  {url:"../../assets/t-shirts/16.jpg",type:"Yellow Round Neck T-Shirt",price:49,Fractionprice:18,deliveryFree:true,size:"S",AddCartbuttonColor:"#ffc020"},
]
length
isselected;
Addedlength
addedItem=[]
amount=0
unitPrice=0
sizeFilter ="";
AddCartbuttonColor: string = '#000000';
  constructor() { }

  focusFunction() {
    if(this.Addedlength>0){

      document.getElementById("myForm").style.display = "block";
    }
  }
  focusOutFunction() {
    if(this.Addedlength>0){
    document.getElementById("myForm").style.display = "none";
    }
  }

  addToCart(index,item){
    this.isselected=index;
    this.unitPrice=item.price+(item.Fractionprice/100)
    this.amount=this.amount+item.price+(item.Fractionprice/100)
    
    this.addedItem.push(item);
    this.Addedlength=this.addedItem.length
    console.log("add cart",this.addedItem);
    console.log(this.Addedlength);
    console.log(this.amount)
    // var amount=this.
    
   
  }
  removeItem(i){
      this.addedItem.splice(i, 1)
      this.Addedlength=this.addedItem.length
  }
  filterSize(size){
    this.isselected=size
    console.log(size);
    
    if(size){
      this.sizeFilter=size
    }
 
   
  }
  ngOnInit() {
    console.log(this.items);
    this.length=this.items.length
    
  }

}
