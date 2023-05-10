let time = '25-10-2017'
let timeStamp = (time.split('-').join(''))
let date = new Date(timeStamp * 1000)
if(!isNaN(date.getTime()) && date.getTime() > 0){
    console.log("Yes you are right The timestamp is " + timeStamp)
}


