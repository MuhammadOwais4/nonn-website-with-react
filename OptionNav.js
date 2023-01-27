
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import './OptionNav.css'
import { Laptop } from '@mui/icons-material';

function OptionNav() {
  const options = ["Electronic & Mobile", "Beauty & Fragrances", "Fashion", "Home & Kitchen", "Sports & Outdoors", "Toys & Games", "Baby Products", "Health & Nutrion", "Grocery", "Automotive", "Tools & Home Improvement", "Books", "Pet Supplies", "Stationery & Office Supplies", "Music,Movies & Tv Shows", "Mahali"];
const electronic =["Mobiles & Accessories","Laptops & Computers","Video Games" ,"Televisions","Home Appliances","Speakers","Headphones & Earphones","Power Banks","Wearable Devices","Camera , Photo & Video","Tablets & accessories"]
const Men = ["Men's Fashion", " Autumn/Winter","clothing","Footwear","Watches","Jewellery","Eyewear","ackpacks","Luggage","Kid's Fashion"]
const Woman = ["Women's Fashion","Autumn/Winter","Clothing","Footwear","Jewellery","Eyewear","Handbag","Kid's Fashion"]
const Home = ["Bedding","Bath","Home Decor","Kitchen & Dining","Home Appliances","Large Appliances","Tools & Home Improvement","Furniture","Home Storage & Organization"]
const Beauty= ["Nake"]
  return (
<div>
  <select>
{options.map((item,index) => { 
   return<option value={index} placeholder="electronic"> {item}</option>
})}
  </select>
  <select>
{electronic.map((item,index) => { 
   return<option value={index}> {item}</option>
})}
  </select>
</div>



  )
}
export default OptionNav;