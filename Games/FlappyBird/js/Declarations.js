// Select the canvas element from the DOM
const canvas = document.querySelector('canvas')
// Get the 2D rendering context of the canvas
const c = canvas.getContext('2d')


// Set the canvas size
canvas.width = 288
canvas.height = 512

// Set the border properties
const borderWidth = 5; // Adjust this value to control the border width
const borderColor = 'black'; // Adjust this value to set the border color

// random integer function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const backgroundDayImg = {
    position: {
        x: 0,
        y: 0,
    },
    width: 288,
    height: 512,
}
const backgroundDay = {
    position: {
        x: 0,
        y: 0
    },
    width: 288,
    height: 512,
}

const backgroundNightImg = {
    position: {
        x: 292,
        y: 0,
    },
    width: 288,
    height: 512,
}

const backgroundNight = {
    position: {
        x: 0,
        y: 0
    },
    width: 288,
    height: 512,
}

const groundImg = {
    position: {
        x: 584,
        y: 0,
    },
    width: 336,
    height: 112,
}

let ground = {
    position: {
        x: 0,
        y: 400
    },
    width: 336,
    height: 112
}

// const getReady = {
//     orangeBirdImg : [
//         {
//             position: {
//                 x: 6,
//                 y: 982,
//             },
//             width: 33,
//             height: 23,
//         },
//         {
//             position: {
//                 x: 62,
//                 y: 982,
//             },
//             // This also used for still animation like after colliding with object and die
//             width: 33,
//             height: 23,
//         },
//         {
//             position: {
//                 x: 119,
//                 y: 982,
//             },
//             width: 33,
//             height: 23,
//         }
//     ]
// }

const orangeBirdImg = [
    {
        position: {
            x: 6,
            y: 982,
        },
        width: 34,
        height: 24,
    },
    {
        position: {
            x: 62,
            y: 982,
        },
        // This also used for still animation like after colliding with object and die
        width: 34,
        height: 24,
    },
    {
        position: {
            x: 119,
            y: 982,
        },
        width: 34,
        height: 24,
    }
]

const blueBirdImg = [
    {
        position: {
            x: 174,
            y: 982,
        },
        width: 34,
        height: 24,
    },
    {
        position: {
            x: 230,
            y: 658,
        },
        // This also used for still animation like after colliding with object and die
        width: 34,
        height: 24,
    },
    {
        position: {
            x: 230,
            y: 710,
        },
        width: 34,
        height: 24,
    }
]

const redBirdImg = [
    {
        position: {
            x: 230,
            y: 762,
        },
        width: 34,
        height: 24,
    },
    {
        position: {
            x: 230,
            y: 814,
        },
        // This also used for still animation like after colliding with object and die
        width: 34,
        height: 24,
    },
    {
        position: {
            x: 230,
            y: 866,
        },
        width: 34,
        height: 24,
    }
]

const splashImg = {
    position: {
        x: 0,
        y: 0,
    },
    width: 640,
    height: 1136,
}

const splash = {
    position: {
        x: 0,
        y: 0,
    },
    width: 288,
    height: 512,
}

const birdImg = [
    [
        {
            position: {
                x: 6,
                y: 982,
            },
            width: 34,
            height: 24,
        },
        {
            position: {
                x: 62,
                y: 982,
            },
            // This also used for still animation like after colliding with object and die
            width: 34,
            height: 24,
        },
        {
            position: {
                x: 118,
                y: 982,
            },
            width: 34,
            height: 24,
        }
    ],
    [
        {
            position: {
                x: 174,
                y: 982,
            },
            width: 34,
            height: 24,
        },
        {
            position: {
                x: 230,
                y: 658,
            },
            // This also used for still animation like after colliding with object and die
            width: 34,
            height: 24,
        },
        {
            position: {
                x: 230,
                y: 710,
            },
            width: 34,
            height: 24,
        }
    ],
    [
        {
            position: {
                x: 230,
                y: 762,
            },
            width: 34,
            height: 24,
        },
        {
            position: {
                x: 230,
                y: 814,
            },
            // This also used for still animation like after colliding with object and die
            width: 34,
            height: 24,
        },
        {
            position: {
                x: 230,
                y: 866,
            },
            width: 34,
            height: 24,
        }
    ],
]

const flappyBirdImg = {
    position: {
        x: 702,
        y: 182,
    },
    width: 178, //880-702
    height: 48, //230-182
}

const flappyBird = {
    position: {
        x: canvas.width/2 - flappyBirdImg.width/2,
        y: canvas.height/2 - flappyBirdImg.height/2 - 80,
    },
    width: 178, //880-702
    height: 48, //230-182
}

const rateImg = {
    position: {
        x: 930,
        y: 2,
    },
    width: 62, //992-930
    height: 36, //38-2
}

const rate = {
    position: {
        x: canvas.width/2 - rateImg.width/2,
        y: canvas.height/2 - rateImg.height/2 + 40,
    },
    width: 62, //992-930
    height: 36, //38-2
}

const playImg = {
    position: {
        x: 708, 
        y: 236,
    },
    width: 104, //812-708
    height: 58, //294-236
}

const play = {
    position: {
        x: canvas.width/2 - playImg.width/2 - 65,
        y: canvas.height - 111 - playImg.height,
    },    
    width: 104, //812-708
    height: 58, //294-236
}

const leaderBoardImg = {
    position: {
        x: 828, 
        y: 236,
    },
    width: 104, //812-708
    height: 58, //294-236
}

const leaderBoard = {
    position: {
        x: canvas.width/2 - leaderBoardImg.width/2 + 65, 
        y: canvas.height - 111 - leaderBoardImg.height,
    },    
    width: 104, //812-708
    height: 58, //294-236
}

const copyrightImg = {
    position: {
        x: 884, 
        y: 182,
    },
    width: 226, //1010-884
    height: 14, //196-182
}

const copyright = {
    position: {
        x: canvas.width/2 - copyrightImg.width/2, 
        y: canvas.height + 100,
    },    
    width: 226, //1010-884
    height: 14, //196-182
}

//     copyright: {
//         coordinates: {
//             x: 884, 
//             y: 182,
//             width: 225, //1009-884
//             height: 13, //195-182
//         }
//     },



const birdMain = {
    position: {
        x: canvas.width/2 - birdImg[0][0].width/2,
        y: canvas.height/2 - birdImg[0][0].height/2 - 25,
        // x: 70,
        // y: 230,
    },
    width: 34,
    height: 24,
    orange: 0,
    blue: 1,
    red: 2,
}

const birdGetReady = {
    position: {
        x: 70,
        y: 230,
    },
    width: 34,
    height: 24,
    orange: 0,
    blue: 1,
    red: 2,
}

const tapTapImg = {
    position: {
        x: 584,
        y: 182,
    },
    width: 114,//698-584
    height: 98,//280-182
}

const tapTap = {
    position: {
        x: canvas.width/2 - tapTapImg.width/2,
        y: canvas.height/2 - tapTapImg.height/2,
    },
    width: 114,//698-584
    height: 98,//280-182
}

const getReadyImg = {
    position: {
        x: 590,
        y: 118,
    },
    width: 184,//774-590
    height: 50,//168-118
}

const getReady = {
    position: {
        x: canvas.width/2 - getReadyImg.width/2,
        y: canvas.height/2 - getReadyImg.height/2 - 100,
    },
    width: 184,//774-590
    height: 50,//168-118
}

const scoreBoardImg = {
    position: {
        x: 6,
        y: 518,
    },
    width: 226,
    height: 114,
}

const scoreBoard = {
    position: {
        x: canvas.width/2 - scoreBoardImg.width/2,
        y: 195,
    },
    width: 224,
    height: 114,
}

const gameOverImg = {
    position: {
        x: 790,
        y: 118,
    },
    width: 192,
    height: 42,
}

const gameOver = {
    position: {
        x: canvas.width/2 -gameOverImg.width/2,
        y: 135,
    },
    width: 192,
    height: 42,
}

//     gameover: {
//         coordinates: {
//             x: 790,
//             y: 118,
//             width: 191,//981-790
//             height: 41,//159-118
//         },

//     scoreboard: {
//         coordinates: {
//             x: 6,
//             y: 518,
//             width: 225,//231-6
//             height: 113,//631-518
//         },
//     },



//             x: 702, 
//             y: 182,
//             width: 177, //879-702
//             height: 47, //229-182

const state = {
    test: -1,
    splash: 0,
    main: 1,
    getReady: 2,
    playing: 3,
    gameOver: 4,
    
}

const greenPipeImg = {
    up: {
        position: {
            x: 168,
            y: 646,
        },
        width: 50,//218-168
        height: 320,//966-646
    },
    down: {
        position: {
            x: 114,
            y: 646,
        },
        width: 50,//184-164
        height: 320,//966-646
    }
    
}

const brownPipeImg = {
    up: {
        position: {
            x: 0,
            y: 646,
        },
        width: 50,//50-0
        height: 320,//966-646
    },
    down: {
        position: {
            x: 56,
            y: 646,
        },
        width: 50,//106-56
        height: 320,//966-646
    }
    
}

const pipImg = [
    {
        up: {
            position: {
                x: 168,
                y: 646,
            },
            // width: 52,//220-168
            // height: 320,//966-646
        },
        down: {
            position: {
                x: 112,
                y: 646,
            },
            // width: 50,//184-164
            // height: 320,//966-646
        },
        width: 52,
        height: 320,
    },
    {
        up: {
            position: {
                x: 0,
                y: 646,
            },
            // width: 50,//50-0
            // height: 320,//966-646
        },
        down: {
            position: {
                x: 56,
                y: 646,
            },
            // width: 50,//106-56
            // height: 320,//966-646
        },
        width: 52,
        height: 320,
    }
]

const bronzeMedalImg = {
    position: {
        x: 224,
        y: 954,
    },
    width: 44, //268-224
    height: 44, //998-954
}

const bronzeMedal = {
    position: {
        x: 224,
        y: 906,
    },
    width: 44, //268-224
    height: 44, //998-954
}

const silverMedalImg = {
    position: {
        x: 268,
        y: 950,
    },
    width: 44, //268-224
    height: 44, //998-954
}

const silverMedal = {
    position: {
        x: 268,
        y: 950,
    },
    width: 44, //268-224
    height: 44, //998-954
}

const goldMedalImg = {
    position: {
        x: 242,
        y: 564,
    },
    width: 44, //268-224
    height: 44, //998-954
}

const goldMedal = {
    position: {
        x: 242,
        y: 564,
    },
    width: 44, //268-224
    height: 44, //998-954
}

const platMedalImg = {
    position: {
        x: 242,
        y: 516,
    },
    width: 44, //268-224
    height: 44, //998-954
}

const platMedal = {
    position: {
        x: 242,
        y: 516,
    },
    width: 44, //268-224
    height: 44, //998-954
}

const newScoreImg = {
    position: {
        x: 224,
        y: 1002,
    },
    width: 32, //256-224
    height: 14, //1016-1002
}

const newScore = {
    position: {
        x: 224,
        y: 1002,
    },
    width: 32, //256-224
    height: 14, //1016-1002
}

const gearsImg = {
    position: {
        x: 884,
        y: 182,
    },
    width: 126, //1010
    height: 14, //196
}

const gears = {
    position: {
        x: 884,
        y: 182,
    },
    width: 126, //1010
    height: 14, //196
}

const digitBigImg = [
    {
        position: {
            x: 992,
            y: 120,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
    {
        position: {
            x: 272,
            y: 910,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
    {
        position: {
            x: 584,
            y: 320,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
    {
        position: {
            x: 612,
            y: 320,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
    {
        position: {
            x: 640,
            y: 320,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
    {
        position: {
            x: 668,
            y: 320,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
    {
        position: {
            x: 584,
            y: 368,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
    {
        position: {
            x: 612,
            y: 368,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
    {
        position: {
            x: 640,
            y: 368,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
    {
        position: {
            x: 668,
            y: 368,
        },
        width: 24, //1016-992
        height: 36, //156-120
    },
]

const digitMedImg = [
    {
        position: {
            x: 274,
            y: 612,
        },
        width: 14, //288-274
        height: 20, //632-612
    },
    {
        position: {
            x: 274,
            y: 954,
        },
        width: 14, //1016-992
        height: 20, //156-120
    },
    {
        position: {
            x: 274,
            y: 978,
        },
        width: 14, //1016-992
        height: 20, //156-120
    },
    {
        position: {
            x: 262,
            y: 1002,
        },
        width: 14, //1016-992
        height: 20, //156-120
    },
    {
        position: {
            x: 1004,
            y: 0,
        },
        width: 14, //1016-992
        height: 20, //156-120
    },
    {
        position: {
            x: 1004,
            y: 24,
        },
        width: 14, //1016-992
        height: 20, //156-120
    },
    {
        position: {
            x: 1010,
            y: 52,
        },
        width: 14, //1016-992
        height: 20, //156-120
    },
    {
        position: {
            x: 1010,
            y: 84,
        },
        width: 14, //1016-992
        height: 20, //156-120
    },
    {
        position: {
            x: 586,
            y: 484,
        },
        width: 14, //1016-992
        height: 20, //156-120
    },
    {
        position: {
            x: 622,
            y: 412,
        },
        width: 14, //1016-992
        height: 20, //156-120
    },
]

// get new image, all images in one image file
image = new Image()
image.src = './assets/gfx/atlas.png'

imageSplash = new Image()
imageSplash.src = './assets/gfx/splash.png'


let rotation = 0
let angular = 0
let degree = 0

let velocity = 0
let y = 0
let elapsedFrames = 0
let frameBuffer = 20

let flap = 0

const wing = {
    up: 0,
    middle: 1,
    down: 2,
}

// Floating animation parameters
let birdY
const amplitude = birdGetReady.height/6; // How much the bird moves up and down (adjust as needed)
const frequency = 0.06; // How fast the bird moves up and down (adjust as needed)
let time = 0;

let backgroundRandom
let birdColour
let pipeColour

let previousState = -999
let currentState = state.splash

// to check the mouse clicking on buttons to animate them
let isLeftMouseDown = false;
let isLeftMouseDownOnPlay = false
let isLeftMouseDownOnLeaderboard = false
let isLeftMouseDownOnRate = false
let isLeftMouseDownOnGetReady = false

let fadeInCompleted = false
let fadeOutCompleted = false

// set this to zero for fading in and out
c.globalAlpha = 0

let splashTimer = 200
let splashCount = 0

let flappyBirdReady = false

const pipeSpacingX = 158
const pipeSpacingY = 90
const spacing = 90

let birdDie = false
let birdHit = false

let pipe = [
    {
        position: {
            x: canvas.width,
            y: getRndInteger(120,370)
        }
    },
    {
        position: {
            x: canvas.width+pipeSpacingX,
            y: getRndInteger(120,370)
        }
    },
    {
        position: {
            x: canvas.width+pipeSpacingX*2,
            y: getRndInteger(120,370)
        }
    },
]


dieAudio = new Audio('./assets/sounds/sfx_die.ogg')
hitAudio = new Audio('./assets/sounds/sfx_hit.ogg')
pointAudio = new Audio('./assets/sounds/sfx_point.ogg')
swooshingAudio = new Audio('./assets/sounds/sfx_swooshing.ogg')
wingAudio = new Audio('./assets/sounds/sfx_wing.ogg')

let printNewScore = false
let highestScore = 0
let score = 0

let pipePassed = [false, false, false]