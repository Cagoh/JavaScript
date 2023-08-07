

// Animation function (currently empty, needs animation logic)
function animate() {
    // Make sure the canvas under is black for fade in and out transition
    c.save()
    c.globalAlpha = 1;
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width,canvas.height)
    c.restore()

    /*
    There are 4 game states: Main, GetReady, Playing, GameOver
    Main: the main menu of flappy bird
    GetReady: flappy bird wait to fly
    Playing: flappy bird is flying
    GameOver: flappy bird die 
    */
    switch (currentState) {
        case state.splash:
            c.globalAlpha = 1
            if (splashCount <= splashTimer) {
                c.drawImage(imageSplash, splashImg.position.x, splashImg.position.y, splashImg.width, splashImg.height, splash.position.x, splash.position.y, splash.width, splash.height)
                splashCount++
            }
            else {
                
                previousState = state.splash
                currentState = state.main
                c.globalAlpha = 0

            }
            break

        
        case state.main:
            if(!fadeInCompleted)
                fadeIn()


            if (previousState != currentState) {
                backgroundRandom = getRndInteger(0, 1)
                birdColour = getRndInteger(0,2)
                previousState = currentState
            }

            // randomised the background day or night
            if (backgroundRandom === 0)
                c.drawImage(image, backgroundDayImg.position.x, backgroundDayImg.position.y, backgroundDayImg.width, backgroundDayImg.height, backgroundDay.position.x, backgroundDay.position.y, backgroundDay.width, backgroundDay.height)
            else if (backgroundRandom === 1)
                c.drawImage(image, backgroundNightImg.position.x, backgroundNightImg.position.y, backgroundNightImg.width, backgroundNightImg.height, backgroundNight.position.x, backgroundNight.position.y, backgroundNight.width, backgroundNight.height)

            // draw flappybird
            c.drawImage(image, flappyBirdImg.position.x, flappyBirdImg.position.y, flappyBirdImg.width, flappyBirdImg.height, flappyBird.position.x, flappyBird.position.y, flappyBird.width, flappyBird.height)

            // draw flappy bird
            c.drawImage(image, birdImg[birdColour][flap].position.x, birdImg[birdColour][flap].position.y, birdImg[birdColour][flap].width, birdImg[birdColour][flap].height, birdMain.position.x, birdMain.position.y+birdY, birdMain.width, birdMain.height)

            
            // Animate its wing
            if (elapsedFrames % frameBuffer === 0)
                flap++
            if (flap>wing.down)
                flap = wing.up

            // Calculate the vertical position of the bird based on the sine wave
            birdY = amplitude * Math.sin(time);

            // Update the time for the next frame
            time += frequency;

            // draw rate
            if (!isLeftMouseDownOnRate)
                c.drawImage(image, rateImg.position.x, rateImg.position.y, rateImg.width, rateImg.height, rate.position.x, rate.position.y, rate.width, rate.height)
            else
                c.drawImage(image, rateImg.position.x, rateImg.position.y, rateImg.width, rateImg.height, rate.position.x+1, rate.position.y+1, rate.width, rate.height)

            // draw play
            if (!isLeftMouseDownOnPlay)
                c.drawImage(image, playImg.position.x, playImg.position.y, playImg.width, playImg.height, play.position.x, play.position.y, play.width, play.height)
            else
                c.drawImage(image, playImg.position.x, playImg.position.y, playImg.width, playImg.height, play.position.x+1, play.position.y+1, play.width, play.height)

            // draw leaderboard
            if (!isLeftMouseDownOnLeaderboard)
                c.drawImage(image, leaderBoardImg.position.x, leaderBoardImg.position.y, leaderBoardImg.width, leaderBoardImg.height, leaderBoard.position.x, leaderBoard.position.y, leaderBoard.width, leaderBoard.height)
            else
                c.drawImage(image, leaderBoardImg.position.x, leaderBoardImg.position.y, leaderBoardImg.width, leaderBoardImg.height, leaderBoard.position.x+1, leaderBoard.position.y+1, leaderBoard.width, leaderBoard.height)

            // I must draw 2 Ground image to make it the way that the Ground is moving
            // c.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            c.drawImage(image, groundImg.position.x, groundImg.position.y, groundImg.width, groundImg.height, ground.position.x, ground.position.y, ground.width, ground.height);
            c.drawImage(image, groundImg.position.x, groundImg.position.y, groundImg.width, groundImg.height, ground.position.x+groundImg.width-1, ground.position.y, ground.width, ground.height);
            
            // draw gears
            c.drawImage(image, gearsImg.position.x, gearsImg.position.y, gearsImg.width, gearsImg.height, canvas.width/2-gears.width/2, canvas.height/2+160, gears.width, gears.height);
            
            if (ground.position.x <= -ground.width)
                ground.position.x = 0
            
            // if the bird still in the air the ground will animate
            if (birdGetReady.position.y+birdGetReady.height <= canvas.height-ground.height) {
                birdGetReady.position.y += velocity
                ground.position.x -= 0.6
            }
            break
            
        // if the state is flappy bird getready or playing or gameover
        /*
        The reason I put the 3 states of the game together to ensure smooth animation without
        the need to transit from one states to another
        */
        case state.getReady:
        case state.playing:
        case state.gameOver:
            // play the fadeIn animation
            if(!fadeInCompleted)
                fadeIn()

            // draw background
            if (backgroundRandom === 0)
                c.drawImage(image, backgroundDayImg.position.x, backgroundDayImg.position.y, backgroundDayImg.width, backgroundDayImg.height, backgroundDay.position.x, backgroundDay.position.y, backgroundDay.width, backgroundDay.height)
            else if (backgroundRandom === 1)
                c.drawImage(image, backgroundNightImg.position.x, backgroundNightImg.position.y, backgroundNightImg.width, backgroundNightImg.height, backgroundNight.position.x, backgroundNight.position.y, backgroundNight.width, backgroundNight.height)

            // set the pipecolour, actually theres brown pipe in the image file, but I havent use it as the pipe don't have downward face
            // green === 0
            pipeColour = 0
 
            if (currentState === state.getReady) {
                // restart the score
                printNewScore = false
                score = 0

                // I must draw 2 Ground image to make it the way that the Ground is moving
                // c.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                ground.position.x -= 0.6

                c.drawImage(image, groundImg.position.x, groundImg.position.y, groundImg.width, groundImg.height, ground.position.x, ground.position.y, ground.width, ground.height);
                c.drawImage(image, groundImg.position.x, groundImg.position.y, groundImg.width, groundImg.height, ground.position.x+groundImg.width-1, ground.position.y, ground.width, ground.height);
                if (ground.position.x <= -ground.width)
                    ground.position.x = 0

                // draw get ready
                c.drawImage(image, getReadyImg.position.x, getReadyImg.position.y, getReadyImg.width, getReadyImg.height, getReady.position.x, getReady.position.y, getReady.width, getReady.height)

                // draw tap tap
                c.drawImage(image, tapTapImg.position.x, tapTapImg.position.y, tapTapImg.width, tapTapImg.height, tapTap.position.x, tapTap.position.y, tapTap.width, tapTap.height)

                // draw orange flappy bird
                c.drawImage(image, birdImg[birdColour][flap].position.x, birdImg[birdColour][flap].position.y, birdImg[birdColour][flap].width, birdImg[birdColour][flap].height, birdGetReady.position.x, birdGetReady.position.y+birdY+y, birdGetReady.width, birdGetReady.height)

                // animate its wings
                if (elapsedFrames % frameBuffer === 0)
                    flap++
                if (flap>wing.down)
                    flap = wing.up

                // Calculate the vertical position of the bird based on the sine wave
                birdY = amplitude * Math.sin(time);

                // Update the time for the next frame
                time += frequency


                // print score
                // check how many digits the score is
                let tempScore = score
                let scoreDigit = 1
                while (Math.floor(tempScore / 10) > 0) {
                    scoreDigit++
                    tempScore /= 10
                }

                // check whether its odd digits
                if (scoreDigit % 2 === 1) {
                    let rightAlign = canvas.width/2 - digitBigImg[0].width/2 + (Math.floor(scoreDigit/2))*digitBigImg[0].width
                    //let rightAlign = canvas.width/2 - digitBigImg[0].width/2
                    for (let ii=0; ii<scoreDigit; ii++) {
                        const digit = parseInt(score.toString().charAt(scoreDigit-ii-1)); // Convert character to integer
                        c.drawImage(image, digitBigImg[digit].position.x, digitBigImg[digit].position.y, digitBigImg[digit].width, digitBigImg[digit].height, rightAlign, canvas.height/2 - 190, digitBigImg[digit].width, digitBigImg[digit].height)
                        rightAlign -= digitBigImg[0].width
                    }
                } 
                // check whether its even digits
                else if (scoreDigit % 2 === 0) {
                    let tempScore = score
                    let rightAlign = canvas.width/2 + (Math.floor(scoreDigit/2)-1)*digitBigImg[0].width
                    for (let ii=0; ii<scoreDigit; ii++) {
                        const digit = parseInt(score.toString().charAt(scoreDigit-ii-1)); // Convert character to integer
                        c.drawImage(image, digitBigImg[digit].position.x, digitBigImg[digit].position.y, digitBigImg[digit].width, digitBigImg[digit].height, rightAlign, canvas.height/2 - 190, digitBigImg[digit].width, digitBigImg[digit].height)
                        rightAlign -= digitBigImg[0].width
                    }
                }
            } 
            // state playing
            else if (currentState === state.playing) {
                // draw upward pipe
                c.drawImage(image, pipImg[pipeColour].up.position.x, pipImg[pipeColour].up.position.y, pipImg[pipeColour].width, pipImg[pipeColour].height, pipe[0].position.x, pipe[0].position.y, pipImg[pipeColour].width, pipImg[pipeColour].height)
                c.drawImage(image, pipImg[pipeColour].up.position.x, pipImg[pipeColour].up.position.y, pipImg[pipeColour].width, pipImg[pipeColour].height, pipe[1].position.x, pipe[1].position.y, pipImg[pipeColour].width, pipImg[pipeColour].height)
                c.drawImage(image, pipImg[pipeColour].up.position.x, pipImg[pipeColour].up.position.y, pipImg[pipeColour].width, pipImg[pipeColour].height, pipe[2].position.x, pipe[2].position.y, pipImg[pipeColour].width, pipImg[pipeColour].height)

                // draw downward pipe
                c.drawImage(image, pipImg[pipeColour].down.position.x, pipImg[pipeColour].down.position.y, pipImg[pipeColour].width, pipImg[pipeColour].height, pipe[0].position.x, pipe[0].position.y-pipImg[pipeColour].height-pipeSpacingY, pipImg[pipeColour].width, pipImg[pipeColour].height)
                c.drawImage(image, pipImg[pipeColour].down.position.x, pipImg[pipeColour].down.position.y, pipImg[pipeColour].width, pipImg[pipeColour].height, pipe[1].position.x, pipe[1].position.y-pipImg[pipeColour].height-pipeSpacingY, pipImg[pipeColour].width, pipImg[pipeColour].height)
                c.drawImage(image, pipImg[pipeColour].down.position.x, pipImg[pipeColour].down.position.y, pipImg[pipeColour].width, pipImg[pipeColour].height, pipe[2].position.x, pipe[2].position.y-pipImg[pipeColour].height-pipeSpacingY, pipImg[pipeColour].width, pipImg[pipeColour].height)

                // Recycle the pipe if it move out of the canvas
                if (pipe[0].position.x < -pipImg[pipeColour].width) {
                    pipe[0].position.x += pipeSpacingX*3
                    pipe[0].position.y = getRndInteger(120,370)
                }
                    
                if (pipe[1].position.x < -pipImg[pipeColour].width) {
                    pipe[1].position.x += pipeSpacingX*3
                    pipe[1].position.y = getRndInteger(120,370)
                }
                    
                if (pipe[2].position.x < -pipImg[pipeColour].width) {
                    pipe[2].position.x += pipeSpacingX*3
                    pipe[2].position.y = getRndInteger(120,370)
                }
                    

                if (!birdDie && !birdHit) {
                    pipe[0].position.x -= 0.6
                    pipe[1].position.x -= 0.6
                    pipe[2].position.x -= 0.6
                }
                c.save();
              
                let centerX = birdGetReady.position.x + birdGetReady.width / 2;
                let centerY = birdGetReady.position.y + y + birdGetReady.height / 2;
              
                // is to shift the x and y axis to the middle of bird
                c.translate(centerX, centerY);
                c.rotate((Math.PI / 180) * rotation);

                //Draw the bird using its center as the rotation point
                c.drawImage(
                  image,
                  birdImg[birdColour][flap].position.x,
                  birdImg[birdColour][flap].position.y,
                  birdImg[birdColour][flap].width,
                  birdImg[birdColour][flap].height,
                  -birdGetReady.width / 2, // Position the image relative to the center (negative half-width)
                  -birdGetReady.height / 2, // Position the image relative to the center (negative half-height)
                  birdGetReady.width,
                  birdGetReady.height
                );
              
                c.restore();

                // I must draw 2 Ground image to make it the way that the Ground is moving
                // c.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                if (!birdDie) {
                    ground.position.x -= 0.6
                }
                c.drawImage(image, groundImg.position.x, groundImg.position.y, groundImg.width, groundImg.height, ground.position.x, ground.position.y, ground.width, ground.height);
                c.drawImage(image, groundImg.position.x, groundImg.position.y, groundImg.width, groundImg.height, ground.position.x+groundImg.width-1, ground.position.y, ground.width, ground.height);
                if (ground.position.x <= -ground.width)
                    ground.position.x = 0



                // check how many digits the score is
                let tempScore = score
                let scoreDigit = 1
                while (Math.floor(tempScore / 10) > 0) {
                    scoreDigit++
                    tempScore /= 10
                }
                // print score
                // check whether its odd digits
                if (scoreDigit % 2 === 1) {
                    let rightAlign = canvas.width/2 - digitBigImg[0].width/2 + (Math.floor(scoreDigit/2))*digitBigImg[0].width
                    //let rightAlign = canvas.width/2 - digitBigImg[0].width/2
                    for (let ii=0; ii<scoreDigit; ii++) {
                        const digit = parseInt(score.toString().charAt(scoreDigit-ii-1)); // Convert character to integer
                        c.drawImage(image, digitBigImg[digit].position.x, digitBigImg[digit].position.y, digitBigImg[digit].width, digitBigImg[digit].height, rightAlign, canvas.height/2 - 190, digitBigImg[digit].width, digitBigImg[digit].height)
                        rightAlign -= digitBigImg[0].width
                    }
                } // check whether its even digits
                else if (scoreDigit % 2 === 0) {
                    let tempScore = score
                    let rightAlign = canvas.width/2 + (Math.floor(scoreDigit/2)-1)*digitBigImg[0].width
                    for (let ii=0; ii<scoreDigit; ii++) {
                        const digit = parseInt(score.toString().charAt(scoreDigit-ii-1)); // Convert character to integer
                        c.drawImage(image, digitBigImg[digit].position.x, digitBigImg[digit].position.y, digitBigImg[digit].width, digitBigImg[digit].height, rightAlign, canvas.height/2 - 190, digitBigImg[digit].width, digitBigImg[digit].height)
                        rightAlign -= digitBigImg[0].width
                    }
                }

                // check collision
                for (let ii=0; ii<3; ii++) {
                    if (
                        
                        (
                            // Check for downward pipe
                            (centerY - birdGetReady.height/2 <= pipe[ii].position.y-pipeSpacingY &&
                            centerX + birdGetReady.width/2-6 >= pipe[ii].position.x &&
                            centerX - birdGetReady.width/2 <= pipe[ii].position.x + pipImg[0].width)
                            ||
                            // Check for upward pipe
                            (centerY + birdGetReady.height/2 >= pipe[ii].position.y &&
                            centerX + birdGetReady.width/2-6 >= pipe[ii].position.x &&
                            centerX - birdGetReady.width/2 <= pipe[ii].position.x + pipImg[0].width)
                        )
                    ) {
                        if (!birdHit) {
                            velocity = 0
                            hitAudio.play()
                            // Add a pause interval of 500 milliseconds (1 second) before playing dieAudio
                            setTimeout(function() {
                                dieAudio.play();
                            }, 500);
                        }
                            
                        birdHit = true
                    }

                    // Add a separate array to keep track of whether the bird has scored for each pipe
                    if (
                        // count score
                        centerY - birdGetReady.height/2 > pipe[ii].position.y-pipeSpacingY &&
                        centerY + birdGetReady.height/2 < pipe[ii].position.y &&
                        centerX + birdGetReady.width/2 - pipImg[0].width/2 >= pipe[ii].position.x &&
                        centerX - birdGetReady.width/2 <= pipe[ii].position.x + pipImg[0].width &&
                        !pipePassed[ii] && !birdHit
                    ) {
                        pipePassed[ii] = true
                        score++
                        pointAudio.play()
                    } else if 
                        (
                            centerX - birdGetReady.width/2 > pipe[ii].position.x + pipImg[0].width
                        ) {
                        pipePassed[ii] = false
                    }
                }

                // in charge of the rotation of bird
                if (velocity > 0) {
                    rotation += angular
                    angular += 0.05
                }
                else {
                    angular = 0
                }
                if (rotation > 90)
                    rotation = 90
                if (!birdDie && !birdHit) {
                    if (elapsedFrames % frameBuffer === 0)
                        flap++
                    
                    if (flap>wing.down)
                        flap = 0
                } else
                // after bird die or get hit, the wing will stay in the middle
                    flap = 1
                

                // Calculate the vertical position of the bird based on the sine wave
                birdY = amplitude * Math.sin(time)

                // Update the time for the next frame
                time += frequency
            
                // gravity applied while bird is still flying
                if (birdGetReady.position.y+y+birdGetReady.height < ground.position.y) {
                    velocity += 0.05
                    y += velocity
                }

                // if bird hit floor
                if (birdGetReady.position.y+y+birdGetReady.height >= ground.position.y) {
                    if (!birdDie) {
                        birdDie = true
                        if (!birdHit)
                            hitAudio.play()
                        // Add a pause interval of 500 milliseconds (1 second) before playing dieAudio
                        setTimeout(function() {
                            dieAudio.play();
                        }, 500);
                        setTimeout(function() {
                            previousState = currentState
                            currentState = state.gameOver
                            console.log("state.gameOver")
                            console.log(state.gameOver)
                        }, 500);

                    }
                }

            }
            // state gameover
            else if (currentState === state.gameOver) {

                // draw ground
                c.drawImage(image, groundImg.position.x, groundImg.position.y, groundImg.width, groundImg.height, ground.position.x, ground.position.y, ground.width, ground.height);
                c.drawImage(image, groundImg.position.x, groundImg.position.y, groundImg.width, groundImg.height, ground.position.x+groundImg.width-1, ground.position.y, ground.width, ground.height);

                // draw scoreboard
                c.drawImage(image, scoreBoardImg.position.x, scoreBoardImg.position.y, scoreBoardImg.width, scoreBoardImg.height, scoreBoard.position.x, scoreBoard.position.y, scoreBoard.width, scoreBoard.height);

                // draw gameover
                c.drawImage(image, gameOverImg.position.x, gameOverImg.position.y, gameOverImg.width, gameOverImg.height, gameOver.position.x, gameOver.position.y, gameOver.width, gameOver.height);

                // draw medal
                if (score >= 10 && score < 20)
                    c.drawImage(image, bronzeMedalImg.position.x, bronzeMedalImg.position.y, bronzeMedalImg.width, bronzeMedalImg.height, canvas.width/2-88, canvas.height/2-bronzeMedalImg.height/2+4, bronzeMedal.width, bronzeMedal.height)
                else if (score >= 20 && score < 30)
                    c.drawImage(image, silverMedalImg.position.x, silverMedalImg.position.y, silverMedalImg.width, silverMedalImg.height, canvas.width/2-88, canvas.height/2-silverMedalImg.height/2+4, silverMedal.width, silverMedal.height)
                else if (score >= 30 && score < 40)
                    c.drawImage(image, goldMedalImg.position.x, goldMedalImg.position.y, goldMedalImg.width, goldMedalImg.height, canvas.width/2-88, canvas.height/2-goldMedalImg.height/2+4, goldMedal.width, goldMedal.height)
                else if (score >= 40)
                c.drawImage(image, platMedalImg.position.x, platMedalImg.position.y, platMedalImg.width, platMedalImg.height, canvas.width/2-88, canvas.height/2-platMedalImg.height/2+4, platMedal.width, platMedal.height)
                
                // draw newscore and update highscore in cookies
                console.log("gameover score:", score)
                console.log("gameover highestScore:",highestScore)
                if (score > highestScore) {
                    printNewScore = true
                    highestScore = score
                    updateHighScore(highestScore)
                }
                if (printNewScore)
                    c.drawImage(image, newScoreImg.position.x, newScoreImg.position.y, newScoreImg.width, newScoreImg.height, canvas.width/2 + 21, canvas.height/2-3, newScore.width, newScore.height)
                    

                let tempScore = score
                let scoreDigit = 1
                while (Math.floor(tempScore / 10) > 0) {
                    scoreDigit++
                    tempScore /= 10
                }

                let rightAlign = canvas.width/2 + 76
                // draw current score
                for (let ii=0; ii<scoreDigit; ii++) {
                    let digit = parseInt(score.toString().charAt(scoreDigit-ii-1)); // Convert character to integer
                    c.drawImage(image, digitMedImg[digit].position.x, digitMedImg[digit].position.y, digitMedImg[digit].width, digitMedImg[digit].height, rightAlign, canvas.height/2-28, digitMedImg[digit].width, digitMedImg[digit].height)
                    rightAlign -= digitMedImg[digit].width
                }


                tempScore = highestScore
                scoreDigit = 1
                while (Math.floor(tempScore / 10) > 0) {
                    scoreDigit++
                    tempScore /= 10
                }

                rightAlign = canvas.width/2 + 76
                // draw best score
                for (let ii=0; ii<scoreDigit; ii++) {
                    let digit = parseInt(highestScore.toString().charAt(scoreDigit-ii-1)); // Convert character to integer
                    c.drawImage(image, digitMedImg[digit].position.x, digitMedImg[digit].position.y, digitMedImg[digit].width, digitMedImg[digit].height, rightAlign, canvas.height/2+14, digitMedImg[digit].width, digitMedImg[digit].height)
                    rightAlign -= digitMedImg[digit].width
                }

                // draw play
                if (!isLeftMouseDownOnPlay)
                    c.drawImage(image, playImg.position.x, playImg.position.y, playImg.width, playImg.height, play.position.x, play.position.y, play.width, play.height)
                else
                    c.drawImage(image, playImg.position.x, playImg.position.y, playImg.width, playImg.height, play.position.x+1, play.position.y+1, play.width, play.height)
                // draw leaderboard
                if (!isLeftMouseDownOnLeaderboard)
                    c.drawImage(image, leaderBoardImg.position.x, leaderBoardImg.position.y, leaderBoardImg.width, leaderBoardImg.height, leaderBoard.position.x, leaderBoard.position.y, leaderBoard.width, leaderBoard.height)
                else
                    c.drawImage(image, leaderBoardImg.position.x, leaderBoardImg.position.y, leaderBoardImg.width, leaderBoardImg.height, leaderBoard.position.x+1, leaderBoard.position.y+1, leaderBoard.width, leaderBoard.height)
                
                birdDie = false
                birdHit = false
                velocity = 0.05
                y = 0

                // reset the pipe position
                pipe[0].position.x = canvas.width
                pipe[1].position.x = canvas.width+pipeSpacingX
                pipe[2].position.x = canvas.width+pipeSpacingX*2

                pipe[0].position.y = getRndInteger(120,370)
                pipe[1].position.y = getRndInteger(120,370)
                pipe[2].position.y = getRndInteger(120,370)


            }
            break
        case state.playing:
            break
        case state.gameOver:

            break
        case state.test:
            break
        default:
            break
        
    }
    // Call requestAnimationFrame again to create the next animation frame
    elapsedFrames++
    window.requestAnimationFrame(animate)
    
}

function fadeOut() {
    let i = 0.01
    //c.save()
    if (c.globalAlpha > 0)
        c.globalAlpha -= i
    //c.restore()
    //window.requestAnimationFrame(fadeOut)
}

function fadeIn() {
    let i = 0.01
    //c.save()
    if (c.globalAlpha < 1) {
        c.globalAlpha += i
    } else {
       fadeInCompleted  = true
    }
        
    //c.restore()
}

// Function to set a cookie
function setCookie(cookieName, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = cookieName + "=" + value + expires + "; path=/";
}

// Function to get a cookie's value
function getCookie(cookieName) {
    var nameEQ = cookieName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

// Function to start the game
function startGame() {
    // Retrieve the high score from the cookie
    var highScore = getCookie("flappybird_highscore");
    
    // Display the high score in the game UI
    
    // Start the game loop
}

// Function to update the high score
function updateHighScore(newScore) {
    // Retrieve the current high score from the cookie
    var currentHighScore = parseInt(getCookie("flappybird_highscore")) || 0;
    
    // Update the high score if the new score is higher
    if (newScore > currentHighScore) {
        setCookie("flappybird_highscore", newScore, 365); // Store the high score for 1 year
    }
}



// Set a cookie with a name "username" and a value "John"
setCookie("username", "John", 365);

// Retrieve the value of the "username" cookie
let username = getCookie("username");

if (username) {
    console.log("Welcome back, " + username + "!");
} else {
    console.log("No username cookie found.");
    //setCookie(cookieName, value, days)
}


highestScore = getCookie("flappybird_highscore");
if (highestScore === null)
    highestScore = 0


console.log("highestScore", highestScore)

// Start the animation loop by calling animate for the first time
window.requestAnimationFrame(animate)
