new Vue({
    el: '#game',
    data: {
        showb: false,
        shows: true,
        showla: false,
        showlfa: false,
        showlh: false,
        yPercent: 100,
        aPercent: 100,
        aclicked: false,
        width: 400,
        you: [{ a: 'You attack with 5', fa: 'You attack with 10', h: 'You heal with 8' }],
        alien: [{ a: 'Alien attacks back with 3', fa: 'Alien attacks back with 5', h: 'Alien attacks back with 3' }],
    },
    methods: {
        start: function () {
            this.shows = false;
            this.showb = true;
            this.aclicked = false;
        },
        attack: function () {
            if (this.aPercent > 0 && this.yPercent > 0 && this.aPercent <= 100 && this.yPercent <= 100) {
                var d= this.calculateDamage(3,10);
                this.aPercent -= 5;
                this.yPercent -=1;
                this.width -= d;
                this.aclicked = true;
                this.showla = true;
            }
            else if (this.aPercent == 0) {
                this.width = 0;
                alert('You win!');
                this.showb = false;
                this.shows = true;
                this.showla = false;
                this.showlfa = false;
                this.showlh = false;
                this.aPercent = 100;
                this.yPercent = 100;
                this.width = 400;
            }
            else {
                alert('You win!');
                this.showb = false;
                this.shows = true;
                this.showla = false;
                this.showlfa = false;
                this.showlh = false;
                this.aPercent = 100;
                this.yPercent = 100;
                this.width = 400;

            }
        },
        fAttack: function () {
            if (this.aPercent > 0 && this.yPercent > 0 && this.aPercent <= 100 && this.yPercent <= 100) {
                var d= this.calculateDamage(10,20);
                this.aPercent -=10;
                this.yPercent -=4;
                this.width -= d;
                this.aclicked = true;
                this.showlfa = true;
            }
            else if (this.aPercent == 0) {
                this.width = 0;
                alert('You win!');
                this.showb = false;
                this.shows = true;
                this.showla = false;
                this.showlfa = false;
                this.showlh = false;
                this.aPercent = 100;
                this.yPercent = 100;
                this.width = 400;
            }
            else {
                alert('You win!');
                this.showb = false;
                this.shows = true;
                this.showla = false;
                this.showlfa = false;
                this.showlh = false;
                this.aPercent = 100;
                this.yPercent = 100;
                this.width = 400;

            }
        },
        heal: function () {
            if (this.aPercent > 0 && this.yPercent > 0 && this.aPercent <=100 && this.yPercent <= 100) {
                var d= this.calculateDamage(5,18);
                this.aPercent += 2;
                this.yPercent += 5;
                this.width += d;
                this.showlh = true;
            }
            else if (this.aPercent == 0) {
                this.width = 0;
                alert('You win!');
                this.showb = false;
                this.shows = true;
                this.showla = false;
                this.showlfa = false;
                this.showlh = false;
                this.aPercent = 100;
                this.yPercent = 100;
                this.width = 400;
            }
            else if(this.aPercent >= 100 || this.yPercent >= 100){
                this.aclicked = false;

            }
            else {
                alert('You win!');
                this.showb = false;
                this.shows = true;
                this.showla = false;
                this.showlfa = false;
                this.showlh = false;
                this.aPercent = 100;
                this.yPercent = 100;
                this.width = 400;
            }
        },
        quit: function () {
            this.showb = false;
            this.shows = true;
            this.showla = false;
            this.showlfa = false;
            this.showlh = false;
            this.aclicked = false;
            this.aPercent = 100;
            this.yPercent = 100;
            this.width = 400;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
    }
},
    computed: {
        sty: function () {

            return {
                width: this.width + 'px'

            }


        },
        sty1: function () {
            if (this.yPercent < 100 && this.yPercent > 80) {
                return {

                    width: (this.width +10) + 'px'

                }
            }
            else if (this.yPercent < 80) {
                return {
                    width: (this.width + 20) + 'px'
                }
            }
            else {
                width: (this.width) + 'px'
            }
        }
    }
    

});