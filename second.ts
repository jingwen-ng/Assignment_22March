import { question } from 'readline-sync'

function displayOptions(array){
    let i = 0
    while (i < 3) {
      console.log(i + '. ' + array[i].label + ', Price:' + array[i].price)
  
      // i += 1
      i = i + 1
    }
}

  
  function getPrice(option) {
    return parseInt(option.split('RM ')[1])
  }
  

console.log("choose your Resolution")
// const resolutionOption1 = '1920 X 1080 : RM300'
// const resolutionOption2 = '2560 X 1440 : RM600'
//const resolutionOption3 = '3280 X 1680 : RM900'

// const resolutionOptions = [
//     '1920 X 1080 : RM300',
//     '2560 X 1440 : RM600',
//     '3280 X 1680 : RM900',]
    const resolutionOptions = [
        {
          label: '1920 x 1080',
          price: 300,
        },
        {
          label: '2560 x 1440',
          price: 600,
        },
        {
          label: '3280 x 1680',
          price: 900,
        },
      ]

    //console.log('0 ' + resOption[0])
    displayOptions(resolutionOptions)
    let ansRes = question('Select resolution Options index\n')

//console.log(resolutionOptions[2])


console.log("choose your Video Card")
// const vdOptions = [
//     'NVDIA','AMD','Intel' 
//  ]
const vdOptions = [
    {
      label: 'NVDIA',
      price: 300,
    },
    {
      label: 'AMD',
      price: 600,
    },
    {
      label: 'Intel',
      price: 900,
    },
  ]

 displayOptions(vdOptions)
 let ansVD = question('Select Video Card Options index\n')

console.log("choose your Processor")
// const processorOptions = [
//     'i3: RM100','i5: RM200','i7: RM300' 
//  ]
const processorOptions = [
    {
      label: 'i3',
      price: 300,
    },
    {
      label: 'i5',
      price: 600,
    },
    {
      label: 'i7',
      price: 900,
    },
  ]
 displayOptions(processorOptions)
 let ansprocessor = question('Select Processor Options index\n')

console.log("choose your Hard Disk")
// const hddOptions = [
//    '128GB: RM100','256GB: RM200','1TB: RM300' 
// ]
const hddOptions = [
    {
      label: '128GB',
      price: 300,
    },
    {
      label: '256GB',
      price: 600,
    },
    {
      label: '1TB',
      price: 900,
    },
  ]

 displayOptions(hddOptions)
 let anshdd = question('Select HDD Options index\n')

 console.log('You Have Chosen the following options: ')
const prices = [
  resolutionOptions[ansRes].price,
  vdOptions[ansVD].price,
  processorOptions[ansprocessor].price,
  hddOptions[anshdd].price,
]

let totalPrice = 0

for (let i in prices) {
  totalPrice = totalPrice + prices[parseInt(i)]
}

// let i=0;
//   for (i=0;i<=prices[i];i++) {
//   totalPrice = totalPrice + prices[i]
//  i = i +0;
// }

console.log('Resolution: ' + resolutionOptions[ansRes].label)
console.log('Video Option: ' + vdOptions[ansVD].label)
console.log('Processor Option: ' + processorOptions[ansprocessor].label)
console.log('HDD Option: ' + hddOptions[anshdd].label)
console.log('Total Price: RM' + totalPrice)