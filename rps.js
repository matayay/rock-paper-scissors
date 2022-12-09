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

let human = 0;
let computer = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        round_win = playRound(button.className, getComputerChoice());

        if ( round_win.length == 4 )
        {
            console.log(round_win);
            console.log("Your score: " + human);
            console.log("Computer score: " + computer);
        }

        else if ( round_win[4] == 'L' )
        {
            computer += 1;
            console.log(round_win);
            console.log("Your score: " + human);
            console.log("Computer score: " + computer);
        }

        else if ( round_win[4] == 'W' )
        {
            human += 1;
            console.log(round_win);
            console.log("Your score: " + human);
            console.log("Computer score: " + computer);
        }

        if ( human === 5 || computer === 5 )
        {
            if ( human > computer )
            {
                console.log("You Win!");
                human = 0;
                computer = 0;
            }

            else if ( human < computer )
            {
                console.log("You lost!");
                human = 0;
                computer = 0;
            }

            else 
            {
                console.log("The game was a tie.");
                human = 0;
                computer = 0;
            }
        }
    });
});