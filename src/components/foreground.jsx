import React, { useRef } from 'react'
import Cards from './cards'

function foreground() {

    const ref = useRef(null)

    const data= [{
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit tonight.",
        filesize:"0.9mb",
        close: true,
        tag:{ isOpen: false, tagTitle:"Download now", tagColor:"blue"},
    },
    {
        desc:"Lorem jsidso is the for eme heheh amet consectetur adipisicing elit tonight.",
        filesize:"0.45mb",
        close: false,
        tag:{ isOpen: true, tagTitle:"Download now", tagColor:"blue"},
    },
    {
        desc:"tonight we gonna dance askcal kal anan .",
        filesize:"0.989mb",
        close: false,
        tag:{ isOpen: false, tagTitle:"Download now", tagColor:"red"},
    },
    {
        desc:"Lorem jsidso random says the important is the for stranger thinfgs.",
        filesize:"0.55mb",
        close: true,
        tag:{ isOpen: true, tagTitle:"Download now", tagColor:"green"},
    },
    {
        desc:"Lorem20hjan kaslal immi mi mime ",
        filesize:"0.95mb",
        close: true,
        tag:{ isOpen: true, tagTitle:"Download now", tagColor:"blue"},
    }]

  return (
<div ref={ref} className='w-full overflow-hidden  h-screen absolute z-[3] p-[5vh] flex-wrap flex gap-10'>
    {data.map((item, index) => (
        <Cards data={item} referance={ref} />

    ))}

</div>
  )
}

export default foreground