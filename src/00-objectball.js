function gameObject() {

    let hP1 = ['Alan Anderson', '0', '16', '22', '12', '12', '3', '1', '1']; 
    let hP2 = ['Reggie Evans', '30', '14', '12', '12', '12', '12', '12', '7']; 
    let hP3 = ['Brook Lopez', '11', '17', '17', '19', '10', '3', '1', '15']; 
    let hP4 = ['Mason Plumlee','1', '19', '26', '12', '6', '3', '8', '5']; 
    let hP5 = ['Jason Terry','31', '15', '19', '2', '2', '4', '11', '1'];
    let hPlayers = [hP1, hP2, hP3, hP4, hP5];
    
    let aP1 = ['Jeff Adrien', '4', '18', '10', '1', '1', '2', '7', '2']; 
    let aP2 = ['Bismak Biyombo', '0', '16', '12', '4', '7', '7', '15', '10']; 
    let aP3 = ['DeSagna Diop', '2', '14', '24', '12', '12', '4', '5', '5']; 
    let aP4 = ['Ben Gordon', '8', '15', '33', '3', '2', '1', '1', '0']; 
    let aP5 = ['Brendan Haywood', '33', '15', '6', '12', '12', '22', '5', '12'];
    let aPlayers = [aP1, aP2, aP3, aP4, aP5]; 
    
    let pKeys = ['player','number', 'shoe', 'points', 'rebounds', 'assists', 'steals', 'blocks', 'slamDunks']
    
    const obj = {
        home:{
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {}
        },
        away:{
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {}
        }
    };
    
    function players(team, arr) {
        for (let i=0; i<arr.length; i++) {
            obj[team]['players'][arr[i][0]] = {};
            for (let j=1; j<arr[i].length; j++) {
                obj[team]['players'][arr[i][0]][pKeys[j]] = arr[i][j]
            }  
        }
    }

    players('home', hPlayers);
    players('away', aPlayers);
    
    return obj;
}

function returnValue(...keysArr) {
    let value = gameObject()[keysArr[0]]
    let i = 1;
    while (i<keysArr.length) {
        let key = keysArr[i];
        value = value[key];
        i++;
    }
    return value
}

function numPointsScored(playerName) {
    let obj = gameObject();
    const players = team => {
        let playersObj = obj[team]['players'];
        for (let key in playersObj) {
            if (key === playerName) {
                return playersObj[key]['points'];
            }
        }       
    }
    let point = players('home');
    if (point === undefined) {
        point = players('away')
    }
    return point;    
}

function shoeSize(playerName) {
    let obj = gameObject();
    const players = team => {
        let playersObj = obj[team]['players'];
        for (let key in playersObj) {
            if (key === playerName) {
                return playersObj[key]['shoe'];
            } 
        }       
    }
    let shoeSize = players('home');
    if (shoeSize === undefined) {
        shoeSize = players('away')
    }
    return shoeSize;    
}

function teamColors(teamName) {
    let obj = gameObject();
    let colors =[]
    for (let key in obj) {
        if (obj[key]['teamName'] === teamName) {
           colors = [...obj[key]['colors']] 
        }
    }
    return colors;    
}

function teamNames() {
    let obj = gameObject();
    let teamNames =[]
    for (let key in obj) {
        teamNames.push(obj[key]['teamName'])
    }
    return teamNames;    
}

function playerNumbers(teamName) {
    let obj = gameObject();
    let jerseyNumbers = [];
    for (let key in obj) {
        if (obj[key]['teamName'] === teamName) {
            let playersObj = obj[key]['players'];            
            for (let key in playersObj) {
                jerseyNumbers.push(playersObj[key]['number']);   
            }
        }
    }
    return jerseyNumbers;     
}

function playerStats(playerName) {
    let obj = gameObject();
    const players = team => {
        let playersObj = obj[team]['players'];
        for (let key in playersObj) {
            if (key === playerName) {
                return playersObj[key];
            } 
        }       
    }
    let playerStats = players('home');
    if (playerStats === undefined) {
        playerStats = players('away')
    }
    return playerStats;    
}

function bigShoeRebounds() {
    let obj = gameObject();
    let largestShoeSize = 0;
    let rebounds;
    const players = team => {
        let playersObj = obj[team]['players'];
        for (let key in playersObj) {
            if (playersObj[key]['shoe'] > largestShoeSize) {
                largestShoeSize = playersObj[key]['shoe'];
                rebounds = playersObj[key]['rebounds']
            } 
        }       
    }
    players('home');
    players('away');
    return rebounds;    
}

function mostPointsScored() {
    let obj = gameObject();
    let largestPoints = 0;
    let player;
    const players = team => {
        let playersObj = obj[team]['players'];
        for (let key in playersObj) {
            if (parseInt(playersObj[key]['points']) > largestPoints) {
                largestPoints = playersObj[key]['points'];                
                player = key;                
            } 
        }       
    }
    players('home');
    players('away');
    return player;    
}

function winningTeam() {
    let obj = gameObject();
    const players = team => {
        let playersObj = obj[team]['players'];
        let points = 0;
        for (let key in playersObj) {
            points += parseInt(playersObj[key]['points']);
        } 
        return points;      
    }
    if (players('home') > players('away')) {
        return 'home'
    } else {
        return 'away';
    }   
}

function playerWithLongestName() {
    let obj = gameObject();
    let longestName = 0;
    let player;
    const players = team => {
        let playersObj = obj[team]['players'];
        for (let key in playersObj) {
            if (key.length > longestName) {
                player = key;
            }
        }       
    }
    players('home');
    players('away');
    return player;    
}

function doesLongNameStealATon() {
    let obj = gameObject();
    let longestName = 0;
    let mostSteals = 0;
    let player;
    const players = team => {
        let playersObj = obj[team]['players'];
        for (let key in playersObj) {
            if (key.length > longestName) {
                player = key;
            }
            if (parseInt(playersObj[key]['steals']) > mostSteals) {
                mostSteals = parseInt(playersObj[key]['steals'])
            }
        }       
    }
    players('home');
    let hPlayer = player;
    players('away');
    if (hPlayer == player) {
        if (parseInt(obj['home']['players'][player]['steals']) == mostSteals) {
            return true;
        } 
    } else {
        if (parseInt(obj['away']['players'][player]['steals']) == mostSteals) {
            return true;
        } 
    }   
}

console.log(gameObject())
 
console.log(playerNumbers('Charlotte Hornets'))

console.log(shoeSize('Bismak Biyombo'))

console.log(doesLongNameStealATon())
