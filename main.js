const breakfastBtn = document.querySelector('.breakfast');
const lunchBtn = document.querySelector('.lunch');

const itemOne = document.querySelector('.item-1');
const itemTwo = document.querySelector('.item-2');
const itemThree = document.querySelector('.item-3');
const itemFour = document.querySelector('.item-4');
const itemFive = document.querySelector('.item-5');
const itemSix = document.querySelector('.item-6');
const itemSeven = document.querySelector('.item-7');
const itemEight = document.querySelector('.item-8');

const foodContainer = document.querySelector('.foods');




function breakfast (){
    breakfastBtn.addEventListener('click', ()=> {
        itemOne.remove('item-1');
        itemThree.remove('item-3');
        itemFour.remove('item-4');
        itemFive.remove('item-5');
        itemSeven.remove('item-7');
        itemEight.remove('item-8');

       
        

    })
}
breakfast();


