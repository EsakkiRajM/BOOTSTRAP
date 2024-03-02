let output = document.getElementById("output");

let countDownTen = (callback) => {
    setTimeout(() => {
        //console.log("10");
        output.innerHTML = "10";
        callback();
    }, 1000);
}
let countDownNine = (callback) => {
    setTimeout(() => {
        output.innerHTML = "9";
        callback();
    }, 1000);
}
let countDownEight = (callback) => {
    setTimeout(() => {
        output.innerHTML = "8";
        callback();
    }, 1000);
}
let countDownSeven = (callback) => {
    setTimeout(() => {
        output.innerHTML = "7";
        callback();
    }, 1000);
}
let countDownSix = (callback) => {
    setTimeout(() => {
        output.innerHTML = "6";
        callback();
    }, 1000);
}
let countDownFive = (callback) => {
    setTimeout(() => {
        output.innerHTML = "5";
        callback();
    }, 1000);
}
let countDownFour = (callback) => {
    setTimeout(() => {
        output.innerHTML = "4";
        callback();
    }, 1000);
}
let countDownThree = (callback) => {
    setTimeout(() => {
        output.innerHTML = "3";
        callback();
    }, 1000);
}
let countDownTwo = (callback) => {
    setTimeout(() => {
        output.innerHTML = "2";
        callback();
    }, 1000);
}
let countDownOne = (callback) => {
    setTimeout(() => {
        output.innerHTML = "1";
        callback();
    }, 1000);
}
let countDownResult = (callback) => {
    setTimeout(() => {
        output.innerHTML = "Happy Independence Day";
        callback();
    }, 1000);
}



countDownTen(() => {
    countDownNine(() => {
        countDownEight(() => {
            countDownSeven(() => {
                countDownSix(() => {
                    countDownFive(() => {
                        countDownFour(() => {
                            countDownThree(() => {
                                countDownTwo(() => {
                                    countDownOne(() => {
                                        countDownResult(() => {
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});