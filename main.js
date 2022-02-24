const breakfastBtn = document.querySelector('.breakfast');

const itemOne = document.querySelector('.item-1');
const itemTwo = document.querySelector('.item-2');
const itemThree = document.querySelector('.item-3');
const itemFour = document.querySelector('.item-4');
const itemFive = document.querySelector('.item-5');
const itemSix = document.querySelector('.item-6');
const itemSeven = document.querySelector('.item-7');
const itemEight = document.querySelector('.item-8');



function breakfast (){
    breakfastBtn.addEventListener('click', ()=> {
        itemTwo.remove('item-2');
        itemThree.remove('item-3');
        itemFour.remove('item-4');
        itemFive.remove('item-5');
        itemSix.remove('item-6');
        itemSeven.remove('item-7');
    })
}
breakfast();