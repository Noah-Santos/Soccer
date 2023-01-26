field.onclick = function(event){
    // window-relative field coordinates
    let fieldCoords = this.getBoundingClientRect();
    // the ball has position: absolute, the field: position: relative
    // so ball coordsinates are relative to thefield inner left-upper corner
    let ballCoordinates = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 - 10,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2 - 7,
    }

    // prevent corssing the top field boundary
    if(ballCoordinates.top < 0){ballCoordinates.top = 0;}
    // prevent crossing the left field boundary
    if(ballCoordinates.left < 0){ballCoordinates.left = 0;}
    // prevent crossing the bottom field boundary
    if(ballCoordinates.top + ball.clientHeight > field.clientHeight){
        ballCoordinates.top = field.clientHeight - ball.clientHeight
    }
    // prevent crossing the right field boundary
    if(ballCoordinates.left + ball.clientWidth > field.clientWidth){
        ballCoordinates.left = field.clientWidth - ball.clientWidth;
    }

    ball.style.left = ballCoordinates.left + "px";
    ball.style.top = ballCoordinates.top + "px";
}