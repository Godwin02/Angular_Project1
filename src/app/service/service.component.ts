import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[//list of properties
    {name:"Munnar",price:3500,day:3,night:2,persons:2},
    {name:"Thekkady",price:4000,day:3,night:2,persons:3},
    {name:"Kodai",price:5500,day:3,night:2,persons:5},
    {name:"Kanyakumari",price:7500,day:3,night:2,persons:7},
    {name:"Maharashtra",price:350,day:3,night:2,persons:6},
    
    ]

packages=[
  {name:'Munnar',image:'https://static.toiimg.com/thumb/msid-85515152,width-748,height-499,resizemode=4,imgsize-344180/.jpg',price:'3400'},
{name: 'Goa', image: 'https://www.ravenouslegs.com/uploads/4/2/3/4/42340821/published/portuguese-heritage-colony-fontainhas-goa-thumbnail.jpg?1702114256', price: '5000'},
{name: 'Manali', image: 'https://i.ytimg.com/vi/7NKk41YVWyA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDNPJFJDXtCyVjPDtzARd1lcUe_4Q', price: '4500'},
{name: 'Shimla', image: 'https://i.ytimg.com/vi/pxeS2j6L1mE/sddefault.jpg', price: '3800'},
{name: 'Darjeeling', image: 'https://siliguritourism.com/wp-content/uploads/2024/01/Darjeeling-West-Bengal-1024x576.jpg', price: '4200'},
{name: 'Leh-Ladakh', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2oFETgoTxlOvFAekWbQBhCKNrqjvQJRniog&s', price: '6000'},
{name: 'Kerala Backwaters', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXQXDh7Wp72gvhC2SYjeCDnpNB6Sd8KCKPw&s', price: '3700'},
{name: 'Rishikesh', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYZUplGWutMohDwfKNnnJfLGRCt4KTWXaJQ&s', price: '3200'},
{name: 'Udaipur', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZcU3rF7KQVVD4nL9PZMgTLzJ549hcnoFNg&s', price: '4800'},
{name: 'Jaipur', image: 'https://i.ytimg.com/vi/cU6F3dffo2Y/maxresdefault.jpg', price: '4000'}

]
}
