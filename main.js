//
//  <English>
//  PLEASE DO NOT EDIT OR DELETE FILES
//
//  <Russian>
//  ПРОСЬБА НЕ РЕДАКТИРОВАТЬ И НЕ УДАЛЯТЬ ФАЙЛЫ
//


// HTML Elements // 
let keyboard        = document.getElementsByClassName ('keyboard');
let info            = document.getElementById ('info');
let money           = document.getElementById ('money');
let costClickEl     = document.getElementById ('costClick');
let costSecEl       = document.getElementById ('costSec');
let lack            = document.getElementById ('lack');
let costAuto        = document.getElementById ('costAuto');
let company         = document.getElementById ('company');
let store           = document.getElementById ('store');
let completed       = document.getElementById ('completed');
let messPtNone      = document.getElementById ('message-pt-none');
let messPtYes       = document.getElementById ('message-pt-yes');
let nameProcess     = document.getElementById ('name-process');

let pt1             = document.getElementById ('pt-1');
let pt2             = document.getElementById ('pt-2');

let nOne            = document.getElementById ('n1');
let nTwo            = document.getElementById ('n2');

// variables //
let quantityMoney = 3000;
let numderJob = 0;
let lackValue = 0;
let costSec = 0;
let storeOC;
let namePt = '';

// arrays //
let costBtnKeyboard = 
    [1, 2, 3, 5, 10, 20, 100, 1000, 10000];

let costJobUp = 
    [0, 100, 200, 300, 400, 500, 600, 1000];

let companyMassiv = 
    ['company0', 'company1', 'company2', 'company3', 'company4', 'company5', 'company6', 'company7'];

//derivation of initial characteristics
money.innerHTML = quantityMoney;
costClickEl.innerHTML = + costBtnKeyboard [numderJob];
company.innerHTML = companyMassiv [numderJob];
lack.innerHTML = lackValue;

function btnKeyboard () {
    quantityMoney = quantityMoney + costBtnKeyboard [numderJob];
    money.innerHTML = quantityMoney;

};


function jobUp() {

    lackValue = costJobUp [numderJob] - quantityMoney;

    if (lackValue <= 0) {
        lack.innerHTML = '0';
    }
    if (lackValue > 0) {
        lack.innerHTML = lackValue;
    };

    if (quantityMoney < costJobUp[numderJob]) {
        console.log ('Нельзя повысить должность');
    }


    if (quantityMoney >= costJobUp[numderJob]) {
        numderJob = numderJob + 1;

        company.innerHTML = companyMassiv [numderJob];

        console.log (numderJob);

        costClick.innerHTML = costBtnKeyboard [numderJob];
    };

};

function storeOpen () {
    storeOC = store.classList.contains('store-open');
    if (storeOC == false) {
        store.classList.add ('store-open');
    }
    if (storeOC == true) {
        store.classList.remove ('store-open');
    };
};

setInterval (function () {
    money.innerHTML = quantityMoney;
    quantityMoney = quantityMoney + costSec;
    console.log (quantityMoney);
}, 1000);

function btnBuy (pt, name, time, costBuy, costProject) {

    if ((quantityMoney < costBuy) || (completed.classList.contains ('completed-width') == true)) {
        messPtNone.style.opacity = '100%';
        setTimeout (function () {
            messPtNone.style.transition = '300ms';
            messPtNone.style.opacity = '0%';
        }, 10000);
    }
    
    if ((quantityMoney >= costBuy) && (completed.classList.contains ('completed-width') == false)) {
        messPtNone.style.transition = '300ms';
        messPtNone.style.opacity = '0%';

        messPtYes.style.opacity = '0%';

        pt.classList.add ('no-project');
        timeOut = time * 1000;
        namePt = name.innerHTML;
        nameProcess.innerHTML = namePt;
        nameProcess.style.opacity = '100%';

        quantityMoney = quantityMoney - costBuy;

        completed.style.opacity = '100%';
        completed.style.transition = 'width ' + time + 's linear, opasity 0s';
        completed.classList.add ('completed-width');


        setTimeout (function () {
            completed.style.transition = 'width 0s';
            completed.classList.remove ('completed-width');
            completed.style.opacity = '0%';

            costSec = costSec + costProject;
            nameProcess.innerHTML = '';
            nameProcess.style.opacity = '0%';
            messPtYes.style.opacity = '100%';
        }, timeOut);
        setTimeout (function () {
            messPtYes.style.opacity = '0%';
        }, timeOut + 10000);
    };
};

function infoOpen () {
    infoClasses = info.classList.contains ('info-block-open');
    if (infoClasses == false) {
        info.classList.add ('info-block-open');
    }
    if (infoClasses == true) {
        info.classList.remove ('info-block-open');
    };
};