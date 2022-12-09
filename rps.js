function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    let prob = Math.floor(Math.random() * 3);

    return choices[prob];
}

function playRound( player_select, computer_select )
{
    let round_winner;

    if ( player_select == "rock" )
    {
        if ( computer_select == "paper" )
        {
            round_winner = "You Lose! Paper beats Rock";
        }

        else if ( computer_select == "scissors" )
        {
            round_winner = "You Win! Rock beats Scissors";
        }

        else
        {
            round_winner = "Tie!";
        }
    }

    else if ( player_select == "paper" )
    {
        if ( computer_select == "paper" )
        {
            round_winner = "Tie!";
        }

        else if ( computer_select == "scissors" )
        {
            round_winner = "You Lose! Scissors beats Paper";
        }

        else
        {
            round_winner = "You Win! Paper beats Rock";
        }
    }

    else if ( player_select == "scissors" )
    {
        if ( computer_select == "paper" )
        {
            round_winner = "You Win! Scissors beats Paper";
        }

        else if ( computer_select == "scissors" )
        {
            round_winner = "Tie!";
        }

        else
        {
            round_winner = "You Lose! Rock beats Scissors";
        }
    }

    return round_winner;
}


// Main Program

const starting_message = document.querySelector('.start');
const message = document.createElement('h1');
message.textContent = "You vs the Computer. First to five rounds wins!";
starting_message.appendChild(message);

let human = 0;
let computer = 0;
let repeat = true;
let start = true;

const buttons = document.querySelectorAll('button');

const round = document.querySelector('.round');
const round_result = document.createElement('h2');
const game_result = document.createElement('h1');

const score = document.querySelector('.score');
const player = document.createElement('h3');
const ai = document.createElement('h3');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        round_win = playRound(button.className, getComputerChoice());

        if ( start === true )
        {
            starting_message.removeChild(message);
            start = false;
        }

        if ( repeat === false )
        {
            round.removeChild(game_result);
            repeat = true;
        }

        if ( round_win.length == 4 )
        {
            round_result.textContent = round_win;
            player.textContent = "Your score: " + human;
            ai.textContent = "Computer score: " + computer;

            score.appendChild(player);
            score.appendChild(ai);
            round.appendChild(round_result);
        }

        else if ( round_win[4] == 'L' )
        {
            computer += 1;

            round_result.textContent = round_win;
            player.textContent = "Your score: " + human;
            ai.textContent = "Computer score: " + computer;

            score.appendChild(player);
            score.appendChild(ai);
            round.appendChild(round_result);
        }

        else if ( round_win[4] == 'W' )
        {
            human += 1;

            round_result.textContent = round_win;
            player.textContent = "Your score: " + human;
            ai.textContent = "Computer score: " + computer;

            score.appendChild(player);
            score.appendChild(ai);
            round.appendChild(round_result);
        }

        if ( human === 5 || computer === 5 )
        {
            score.removeChild(player);
            score.removeChild(ai);
            round.removeChild(round_result);

            if ( human > computer )
            {
                game_result.textContent = "You Win!";
                round.appendChild(game_result);

                human = 0;
                computer = 0;
            }

            else if ( human < computer )
            {
                game_result.textContent = "You lost!";
                round.appendChild(game_result);

                human = 0;
                computer = 0;
            }

            else 
            {
                game_result.textContent = "The game was a tie.";
                round.appendChild(game_result);

                human = 0;
                computer = 0;
            }

            repeat = false;
        }
    });
});