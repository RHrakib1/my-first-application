// export default function Halal({task, isDone}){
//     return(
//         <li>task :{task}</li>
//     )
// }



// example 1 : conditionnal 

// export default function Halal({task, isDone}){
//     if(isDone === true){
//         return <li>finished: {task}</li>
//     }
//     else{
//         return <li>more work : {task}</li>
//     }
// }


// example 2:
// export default function Halal({ task, isDone }) {
//      if (isDone) {
//        return <li>finished : {task}</li>
//     }
   
//     return <li>many work : {task}</li>
// }




// example 3
// export default function Halal({task, isDone}){
//     return(
//         <li>{isDone ? 'finisheddd' : 'work onnn' } :{task}</li>
//     )
// }



// example 4 :conditionnal rendaren ----> && jodi hoi tahole "&&"aita if er moto kaj kore 
// export default function Halal({task, isDone}){
//     return(
//         <li>{task} {isDone && ':done'}</li>
//     )
// }




// example 5 :jodi  na hoi tahole || hbe "||" else er moto kaj kore
export default function Halal({task, isDone}){
    return(
        <li>{task} {isDone || ':done'}</li>
    )
}

