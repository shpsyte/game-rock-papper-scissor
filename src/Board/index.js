import React, { Component } from 'react'
import './styles.css'
import rock from '../assets/rock.png'
import papper from '../assets/papper.png'
import scissors from '../assets/scissors.png'
 

class Board extends Component {
  constructor(props){
     super(props)

    this.state = {ties: 0,  
                  playerScore: 0, 
                  computerScore: 0, 
                  arrayOfImg: ['rock','scissor','papper'], 
                  computerChoice: '', 
                  userChoice: '',
                  playerTotalWins: 0,
                  computerTotalWins: 0
                  };
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleClickedImg = this.handleClickedImg.bind(this);
  }
  
   componentDidMount() {
      document.querySelector("#rock-pc").classList.add('hide');
      document.querySelector("#papper-pc").classList.add('hide');
      document.querySelector("#scissor-pc").classList.add('hide');

      document.querySelector(".player-0-panel").classList.remove('winner')
      document.querySelector(".player-1-panel").classList.remove('winner')
      
      document.querySelector(".player-0-panel").classList.remove('active')
      document.querySelector(".player-1-panel").classList.remove('active')

   }

  hidePicure() {

    document.querySelector("#rock-pc").classList.remove('show');
    document.querySelector("#papper-pc").classList.remove('show');
    document.querySelector("#scissor-pc").classList.remove('show');

    document.querySelector("#rock-pc").classList.add('hide');
    document.querySelector("#papper-pc").classList.add('hide');
    document.querySelector("#scissor-pc").classList.add('hide');

    document.querySelector(".player-0-panel").classList.remove('winner')
    document.querySelector(".player-1-panel").classList.remove('winner')
    
    document.querySelector(".player-0-panel").classList.remove('active')
    document.querySelector(".player-1-panel").classList.remove('active')
  }

  handleNewGame () {
    this.setState({ties:0, playerScore: 0, computerScore: 0, computerChoice: '', userChoice: '',playerTotalWins: 0, computerTotalWins:0 });
    this.hidePicure();

  }

  handleClickedImg (e) {
    const {arrayOfImg} = this.state;
    const computerChoice = arrayOfImg[Math.floor(Math.random() * arrayOfImg.length)]; 
    const userChoice = (e.target).id;
    let { playerScore, computerScore, ties, playerTotalWins, computerTotalWins } = this.state;
    this.hidePicure();
    document.querySelector(`#${computerChoice}-pc`).classList.add('show');
   

    // //rock=0, paper=1, scissors=2
    if (userChoice === computerChoice){
        ties++;
        this.setState({ties })
    } else
    {
        
      
      let userWon = true;
        if (userChoice==='rock') 
          computerChoice==='scissor'? userWon = true : userWon = false
        else if (userChoice==='papper') 
          computerChoice==='rock'? userWon = true : userWon = false
        else   if (userChoice==='scissor') 
          computerChoice==='papper'? userWon = true : userWon = false
        
        if (userWon)
        {
          playerScore++
          document.querySelector(".player-0-panel").classList.add('active')
          document.querySelector(".player-1-panel").classList.remove('active')
          
        } else {
          computerScore++
          document.querySelector(".player-1-panel").classList.add('active')
          document.querySelector(".player-0-panel").classList.remove('active')
        }
        

        
        if (playerScore >= 5 || computerScore >= 5) {
            this.setState({playerScore: 0, computerScore: 0, computerChoice: '', userChoice: ''});
            
            
            if (playerScore >= 5)  
                playerTotalWins++;
            
            
            if (computerScore >= 5)  
                computerTotalWins++;
             

            this.setState({playerTotalWins, computerTotalWins, ties: 0  })

        } else{
          this.setState({playerScore, computerScore, computerChoice , userChoice, ties: 0 })
        }
    }

  } 

  render(){
    return (
      <div className="wrapper clearfix">
        <div className="player-0-panel">
            <div className="player-name" id="name-0">Player</div>
            <div className="player-score" id="score-0">{this.state.playerScore}</div>
            <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score" id="current-0">{ this.state.playerTotalWins}</div>
            </div>
        </div>
      
        <div className="player-1-panel">
             
            <div className="player-name" id="name-1">Computer</div>
            <div className="player-score" id="score-1">{this.state.computerScore}</div>
            <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score" id="current-1">{ this.state.computerTotalWins}</div>
            </div>
        </div>
      <h1>{this.state.pickpUpRandomIndex}</h1>

      {this.state.ties >0 && 
      <h2 className="tie">This game tied!!</h2>
      }

      <img src={rock} alt="Rock" className="img-computer" id="rock-pc" />
      <img src={papper} alt="Papper" className="img-computer" id="papper-pc" />
      <img src={scissors} alt="scissors" className="img-computer" id="scissor-pc" />

      <button className="btn-new" onClick={this.handleNewGame} >New game</button>

      <div className="img-user">
        <img onClick={(e) => this.handleClickedImg(e)} src={rock} alt="Rock" className="rickScissorPapper" id="rock" />
        <img onClick={(e) => this.handleClickedImg(e)} src={papper} alt="Papper" className="rickScissorPapper" id="papper" />
        <img onClick={(e) => this.handleClickedImg(e)} src={scissors} alt="scissors" className="rickScissorPapper" id="scissor" />
      </div>

    </div>
    )
  }

}


export default Board