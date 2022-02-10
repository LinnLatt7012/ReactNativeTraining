import React from 'react'
import { View, Text} from 'react-native'
import faker from 'faker'
import niceColors from 'nice-color-palettes'
faker.seed(1);

const colors =[
  ...niceColors[1].slice(1,niceColors[1].length),
  ...niceColors[55].slice(0,3),
]

const data=[
  {image:'https://image.flaticon.com/icons/png/256/435/435041.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435061.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435065.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435050.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435037.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435043.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435055.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435049.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435047.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435039.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435030.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435046.png'},
  {image:'https://image.flaticon.com/icons/png/256/435/435048.png'},
  
]

export const detailsIcons=[
  {color:'#9FD7F1',icon:'isv'},
  {color:'#F3B000',icon:'Trophy'},
  {color:'#F2988F',icon:'edit'},
]
export default data.map((item,index)=>({
  ...item,
  key:faker.datatype.uuid(),
  color:colors[index % colors.length],
  name:faker.name.findName(),
  jobTitle:faker.name.jobTitle(),
  categories:[...Array(3).keys()].map(()=>{
    return {
      kry: faker.datatype.uuid(),
      title:faker.name.jobType(),
      subcats:[...Array(3).keys()].map(faker.name.jobType),
    }
  })

}))