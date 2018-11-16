/**
 * Created by Administrator on 2018/8/29.
 */
window.onload = function(){
    var tits1 = document.querySelectorAll('.point a');
    var conts1 = document.querySelectorAll('.banner img');
    var index = 0;
    var ba = document.querySelectorAll('.banner')[0];

    var tits2 = document.querySelectorAll('.dian li');
    var conts2 = document.querySelectorAll('.dong ul li');

    var tits3 = document.querySelectorAll('.topx a');
    var conts3 = document.querySelectorAll('.wapper ul');
    console.log(tits3);
    console.log(conts3);


    function right() {
        index++;
        if (index > conts1.length - 1) {
            index = 0;
        }
        for (var j = 0; j < conts1.length; j++) {
            conts1[j].classList.remove('now');
            tits1[j].classList.remove('now');
        }
        conts1[index].classList.add('now');
        tits1[index].classList.add('now');
    }
    timer = setInterval(right, 1500);
    ba.onmouseover = function () {
        clearInterval(timer);
    };
    ba.onmouseout = function () {
        timer = setInterval(right, 1500);
    }

    function tab(tits, conts, ev) {
        for (let i = 0; i < tits.length; i++) {
            tits[i][ev] = function () {
                for (var j = 0; j < conts.length; j++) {
                    tits[j].classList.remove('now');
                    conts[j].classList.remove('now');
                }
                conts[i].classList.add('now');
                tits[i].classList.add('now');
            }
        }
    }
    tab(tits1, conts1, 'onclick');
    tab(tits2, conts2, 'onmouseover');
    tab(tits3, conts3, 'onclick');
};

