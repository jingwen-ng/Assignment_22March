function displayOptions(array){
    let i = 0
    while(i<3){
       console.log(i + '.' + resolutionOptions[i])
       // i +=1
       i = i + 1 
    }
}

console.log("choose your Resolution")
// const resolutionOption1 = '1920 X 1080 : RM300'
// const resolutionOption2 = '2560 X 1440 : RM600'
//const resolutionOption3 = '3280 X 1680 : RM900'

const resolutionOptions = [
    '1920 X 1080 : RM300',
    '2560 X 1440 : RM600',
    '3280 X 1680 : RM900',]


    //console.log('0 ' + resOption[0])
    displayOptions(resolutionOptions)


console.log(resolutionOptions[2])

let ansRes = question('Select resolution')

console.log("choose your Video Card")
const vdOptions = [
    'NVDIA','AMD','Intel' 
 ]

 displayOptions(vdOptions)

console.log("choose your Processor")
const processorOptions = [
    'i3: RM100','i5: RM200','i7: RM300' 
 ]

 displayOptions(processorOptions)

console.log("choose your Hard Disk")
const hddOptions = [
   '128GB: RM100','256GB: RM200','1TB: RM300' 
]

 displayOptions(hddOptions)