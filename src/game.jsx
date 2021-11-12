import { useEffect, useState } from "react";

export default function Game(props){
    let val=props.val
    // useEffect(() => {
    //     if(props.val!==val)
    //         val=props.val
    // })
    let [ppcs,setPpc]=useState([])
    // let ppc=[]
    // for(let i=0;i<props.playerPairs.length;i++)
    //   ppc.push(props.playerPairs[i]);
    let [playerPairs,setPlayerPairs]=useState(props.playerPairs)
    let [num,setNum]=useState(props.val)
    // let [copy,setCopy]=useState(ppc);
    let [player1,setPlayer1]=useState(-1);
    let [player2,setPlayer2]=useState(-1);
    const getNext= () =>{
        console.log('value of val: ' + props.val + " " + num)
        let val1= Math.floor((Math.random())*(playerPairs.length));
        console.log(val1);
        console.log(props.value);
        // let val1=0;
        // for(let i=0;i<props.playerPairs.length;i++){
        //     // for(let j=0;j<val;j++){
        //         // if(i!=j)
        //             console.log(props.playerPairs[i][0] + " " + props.playerPairs[i][1]);
        // }
        // console.log(props.playerPairs[0][0]);
        // console.log(props.playerPairs[val1][0])
        setPlayer1(playerPairs[val1][0]);
        setPlayer2(playerPairs[val1][1]);
        // setPpc([...ppc, [player1 , player2] ]);
        // ppc=[...ppc, [ playerPairs[val1][0] , playerPairs[val1][1] ] ];
        ppcs.push([ playerPairs[val1][0] , playerPairs[val1][1] ])
        // setPpc([...ppcs, [ playerPairs[val1][0] , playerPairs[val1][1] ] ])
        console.log(ppcs);
        // console.log(copy)
        if(playerPairs.length===1){
            console.log("runs " + props.val)
            // playerPairs=[]
            // props.renew();
            // setCopy(ppc)
            // setPlayerPairs(props.playerPairs)
            // ppc=[];
            // for(let i=0;i<props.value;i++){
            //     for(let j=0;j<props.value;j++){
            //         if(i!==j)
            //             ppc.push([i,j]);
            //     }
            // }
            setPlayerPairs(ppcs);
            // ppc=[]
            setPpc([]);
        }
        else
            playerPairs.splice(val1,1);
    }

    return (
        
        <p>
            {/* Number of Turns Left : {playerPairs.length} */}
            <br />
            {player2!==player1 && 
                <p> {player1} will ask question from {player2} </p>
            }
            <div>
                <button type="button" onClick={getNext}>Get Next Turn</button>
            </div>
        </p>
    )
}