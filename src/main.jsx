import { Outlet,useNavigate} from "react-router-dom";

let val;
let playerPairs=[];


export default function Main(props){

    const navigate=useNavigate();

    const save = () => {
        val=document.getElementById('np').value;
        console.log('the number of players are :' + val);
        for(let i=0;i<val;i++){
            for(let j=0;j<val;j++){
                if(i!==j)
                    playerPairs.push([i,j]);
            }
        }
    
        console.log(playerPairs.length)
        for(let i=0;i<playerPairs.length;i++){
            // for(let j=0;j<val;j++){
                // if(i!=j)
                    console.log(playerPairs[i][0] + " " + playerPairs[i][1]);
        }
        props.func(val,playerPairs)
        navigate('/game')
  // window.location.replace('./game.html');

    }
    return (
        <form>
            <div>
                <label htmlFor="numPlayers">Number Of Players</label>
                <input type="number" className="numPlayers" id="np" placeholder="Enter the number of players that will be playing the game"></input>
            </div>
            <div>
                {/* <!-- <label for="submit">Start Game</label> --> */}
                
                <button className="submit" type="button" onClick={save}>Start Game</button>
                
            </div>
            {/* <Outlet /> */}
        </form>
    )
}