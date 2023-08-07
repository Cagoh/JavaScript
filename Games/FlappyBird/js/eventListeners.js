window.addEventListener('keydown', (event) => {
    console.log(event)
    switch (event.key) {
        case ' ':
            // Spacebar key was pressed
            if (currentState === state.test || currentState === state.getReady || currentState === state.playing) {
                if (!birdDie && !birdHit && birdGetReady.position.y > birdGetReady.height/2) {
                    velocity = -2
                    rotation = -25
                    //wingAudio.stop()
                    wingAudio.currentTime = 0
                    wingAudio.play() 
                }
                    
                console.log("spacebar pressed!")
            }

            if (currentState === state.getReady) {
                //velocity = -3
                previousState = currentState
                currentState = state.playing

            }
            


    }
})

window.addEventListener("click", (event) => {
  // Mouse click event occurred
  // Add your code here to handle the mouse click
    //console.log(event)

    // if (currentState === state.getReady) {
    //     previousState = currentState
    //     currentState = state.playing
    // }

    // if (currentState === state.playing) {
    //     //fadeInCompleted = false
    //     //flappyBirdReady = true
    //     velocity = -3
    // }
        //velocity = -3
    //console.log("left-mouse clicked!")
    //y += velocity
    
});


canvas.addEventListener('click', (event) => {
    //console.log(event)
    //console.log("canvas clicked!")

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log("click: x",x)
    console.log("click: y",y)

    // check whether the mouse pointer at the play button
    if (x >= play.position.x && x <= play.position.x+play.width && y >= play.position.y && y <= play.position.y+play.height)
        console.log("play button clicked!")

    // check whether the mouse pointer at the leaderboard button
    if (x >= leaderBoard.position.x && x <= leaderBoard.position.x+leaderBoard.width && y >= leaderBoard.position.y && y <= leaderBoard.position.y+leaderBoard.height)
        console.log("leaderboard button clicked!")
    
    // check whether the mouse pointer at the rate button
    if (x >= rate.position.x && x <= rate.position.x+rate.width && y >= rate.position.y && y <= rate.position.y+rate.height)
        console.log("leaderboard button clicked!")


})


// let isLeftMouseDown = false;

// Event listener for mouse down (when the left mouse button is pressed)
canvas.addEventListener('mousedown', (event) => {
    // Check if the left mouse button is being pressed (button code 0 corresponds to the left mouse button)

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log("mousedown: x",x)
    console.log("mousedown: y",y)

    if (event.button === 0) {
        isLeftMouseDown = true;

        // check whether the mouse pointer at the play button
        if (x >= play.position.x && x <= play.position.x+play.width && y >= play.position.y && y <= play.position.y+play.height) {
            console.log("play button mousedown!")
            isLeftMouseDownOnPlay = true
        }

        // check whether the mouse pointer at the leaderboard button
        if (x >= leaderBoard.position.x && x <= leaderBoard.position.x+leaderBoard.width && y >= leaderBoard.position.y && y <= leaderBoard.position.y+leaderBoard.height) {
            console.log("leaderboard button mousedown!")
            isLeftMouseDownOnLeaderboard = true
        }

        // check whether the mouse pointer at the rate button
        if (x >= rate.position.x && x <= rate.position.x+rate.width && y >= rate.position.y && y <= rate.position.y+rate.height) {
            console.log("rate button mousedown!")
            isLeftMouseDownOnRate = true
        }
            
    }

    // check at getReady and playing state
    // if (currentState === state.getReady) {
    //     previousState = currentState
    //     currentState = state.playing
    //     velocity -= 6
    // }
    
    // if (currentState === state.playing) {
    //     velocity -= 6
    // }


});

// Event listener for mouse up (when the left mouse button is released)
canvas.addEventListener('mouseup', (event) => {
    // Check if the left mouse button is being released (button code 0 corresponds to the left mouse button)

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log("mouseup: x",x)
    console.log("mouseup: y",y)

    if (event.button === 0) {
        if (isLeftMouseDownOnPlay) {
            // check mouse on play button
            if (x >= play.position.x && x <= play.position.x+play.width && y >= play.position.y && y <= play.position.y+play.height && (currentState === state.main || currentState === state.gameOver)) {
                //fadeTransition()
                //currentState = state.getReady
                c.globalAlpha = 0
                previousState = currentState
                currentState = state.getReady
                //fadeInCompleted = false
                //flappyBirdReady = true
                birdDie = false
                birdHit = false
            }
        }
        isLeftMouseDownOnPlay = false
        isLeftMouseDownOnLeaderboard = false
        isLeftMouseDown = false;
        isLeftMouseDownOnRate = false
    }
});









// window.addEventListener("mousedown", (event) => {
//     if (event.button === 0) {
//       // Left mouse button was clicked
//       // Add your code here to handle the left mouse button click
//     }
//     if (event.button === 1) {
//         // Middle mouse button was clicked
//         // Add your code here to handle the middle mouse button click
//     }
//     if (event.button === 2) {
//         // Right mouse button was clicked
//         // Add your code here to handle the right mouse button click
//     }
// });





// const play = {
//     position: {
//         x: canvas.width/2 - playImg.width/2 - 65,
//         y: canvas.height - 111 - playImg.height,
//     },    
//     width: 104, //812-708
//     height: 58, //294-236
// }