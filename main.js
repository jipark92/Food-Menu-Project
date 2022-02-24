const breakfastBtn = document.querySelector('.breakfast');
const lunchBtn = document.querySelector('.lunch');
const dinnerBtn = document.querySelector('.dinner');
const dessertBtn = document.querySelector('.dessert');
const showAllBtn = document.querySelector('.all');

const itemOne = document.querySelector('.item-1');
const itemTwo = document.querySelector('.item-2');
const itemThree = document.querySelector('.item-3');
const itemFour = document.querySelector('.item-4');
const itemFive = document.querySelector('.item-5');
const itemSix = document.querySelector('.item-6');
const itemSeven = document.querySelector('.item-7');
const itemEight = document.querySelector('.item-8');

const foodContainer = document.querySelector('.foods');

function showAll (){
    showAllBtn.addEventListener('click', ()=> {
        itemOne.style.visibility ="visible";
        itemTwo.style.visibility ="visible";
        itemThree.style.visibility ="visible";
        itemFour.style.visibility ="visible";
        itemFive.style.visibility ="visible";
        itemSix.style.visibility ="visible";
        itemSeven.style.visibility = "visible";
        itemEight.style.visibility = "visible";
    })
}
showAll();



function breakfast (){
    breakfastBtn.addEventListener('click', ()=> {
        itemTwo.style.visibility ="hidden";
        itemThree.style.visibility ="hidden";
        itemFour.style.visibility ="hidden";
        itemFive.style.visibility ="hidden";
        itemSeven.style.visibility ="hidden";
        itemEight.style.visibility ="hidden";

        itemOne.style.visibility = "visible";
        itemSix.style.visibility = "visible";
    })
}
breakfast();


function lunch (){
    lunchBtn.addEventListener('click', ()=> {
        itemOne.style.visibility ="hidden";
        itemTwo.style.visibility ="hidden";
        itemFour.style.visibility ="hidden";
        itemFive.style.visibility ="hidden";
        itemSix.style.visibility ="hidden";
        itemSeven.style.visibility ="hidden";

        itemThree.style.visibility = "visible"
        itemEight.style.visibility = "visible"
    })
}
lunch();


function dinner (){
    dinnerBtn.addEventListener('click', ()=> {
        itemOne.style.visibility ="hidden";
        itemTwo.style.visibility ="hidden";
        itemThree.style.visibility ="hidden";
        itemSix.style.visibility ="hidden";
        itemSeven.style.visibility ="hidden";
        itemEight.style.visibility ="hidden";

        itemFour.style.visibility = "visible"
        itemFive.style.visibility = "visible"
    })
}
dinner();



function dessert (){
    dessertBtn.addEventListener('click', ()=> {
        itemOne.style.visibility ="hidden";
        itemThree.style.visibility ="hidden";
        itemFour.style.visibility ="hidden";
        itemFive.style.visibility ="hidden";
        itemSix.style.visibility ="hidden";
        itemEight.style.visibility ="hidden";

        itemSeven.style.visibility = "visible"
        itemTwo.style.visibility = "visible"
    })
}
dessert();