import logo from './logo.svg';
import './App.css';
import Task from './task';
import "bootstrap/dist/css/bootstrap.min.css"
import userEvent from '@testing-library/user-event';

function App() {
  let price=[
{
  title: "FREE",
  month: 0,
  features:[
  {
    name: "single user",
    boju: true,
    icontype: "fa fa-check"
  },
  {
    name: "5Gb storage",
    boju: true,
    icontype: "fa fa-check"
  },
  {
    name: "unlimated Public Projectsr",
    boju: true,
    icontype: "fa fa-check"
  },
  {
    name: "community Access",
    boju: true,
    icontype: "fa fa-check"
  },
  {
    name: "unlimated Private  projects",
    boju: false,
    icontype: "fa fa-times"
  },
  {
    name: "Dedicated phone support",
    boju: false,
    icontype: "fa fa-times"
  },
  {
    name: "Free Subdomin",
    boju: false,
    icontype: "fa fa-times"
  },
  {
    name: "Monthly Status Reports",
    boju: false,
    icontype: "fa fa-times"
  }
  ]
},
{
  title: "Plus",
  month: 9,
  features:[
    {
      name: "5 Users",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "50Gb storage",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "unlimated Public Projectsr",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "community Access",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "unlimated Private  projects",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "Dedicated phone support",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "Free Subdomin",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "Monthly Status Reports",
      boju: false,
      icontype: "fa fa-times"
    }
    ]
},
{
  title: "PRO",
  month: 49,
  features:[
    {
      name: "unlimted user",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "150Gb storage",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "unlimated Public Projectsr",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "community Access",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "unlimated Private  projects",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "Dedicated phone support",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "Free Subdomin",
      boju: true,
      icontype: "fa fa-check"
    },
    {
      name: "Monthly Status Reports",
      boju: true,
      icontype: "fa fa-check"
    }
    ]
}

  ]
  return (
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
     { price.map((card)=>{
        return <Task data={card}></Task>
     
   }   )

     }
    
    </div>
    </div>
    </section>
  )
}

export default App;
