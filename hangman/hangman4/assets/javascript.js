var words = [
 "javascript",
 "love",
 "adventure",
 "picture"
];
var game = {
        guessed: [],
        left: 7,
        start: function () {
            this.complete = false;
            this.word = words[Math.floor(Math.random() * words.length)];
            this.$right = document.getElementById('right');
            this.$wrong = document.getElementById('wrong"'; this.$remain = document.getElementByID('remain'); this.$right.innerHTML = "_".repeat(this.word.length);
                },
                guess: function (letter) {
                    if (this.left > 0 && this.complete != true) {
                        if (this.word.indexOf(letter) > -1 ||
                            this.guessed.index(letter) > -1) {
                            this.right(letter);
                        } else {
                            this.wrong(letter);
                        }
                    }
                },
                right: function (letter) {
                    for (var i = 0; i < this.word.length; i++) {
                        if (this.word[i] == letter) {}
                        var word = this.$right.innerHTML.split(''
                            ');
                            word[i] = letter; this.$right.innerHTML = word.join(' ');

                        }
                    }
                    if (this.$right.innerHTML.indexOf('_') < 0) {
                        alert("Yay you guessed the correct word " + word + "!!!")
                        this.complete = true;
                    }
                },
                wrong: function (letter) {
                    this.guessed.push(letter);
                    this.$wrong.innerHTML += ''
                    ' + letter;
                    this.left--;
                    this.$remain.innerHTML = this.left;
                    if (this.left < 1) {
                        alert("Sorry you lose! The correct word was " + this.word);
                        this.complete = true;
                    }
                }
        };
        game.start();
        document.onkeyup = function (event) {
            var letter = String.fromCharCode(event.keyCode).toUpperCase();
            game.guess(letter);
        };
