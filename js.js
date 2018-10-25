// get sibling for element
function getAllSiblings(dom, query) {
    var doms = dom.parentElement.querySelectorAll(query);
    return [].slice.call(doms).filter( d => d != dom);
}

function move(event){
    event.classList.remove('ro')
    event.firstElementChild.style.display = 'block'
    event.lastElementChild.style.display = 'block'
    var leftOffset = event.offsetLeft;
    var topOffset = event.offsetTop;
    var winWidth  = window.innerWidth;
    var winHeight  = window.innerHeight;
    event.style.zIndex = '+150';
    event.classList.add('re');
    event.clientWidth = event.clientWidth * 2;
    event.firstChild.classList = 'so';
    event.animate([
        { transform: `translateX(${(leftOffset)}px) translateY(${(topOffset)}px)` },
        { transform: `translateX(${(winWidth / 2) - (event.clientWidth * 2 / 2) }px) translateY(${(winHeight / 2) - (event.clientHeight / 2) }px)` }   
        ], {
            fill: 'forwards',
            easing: 'steps(100, end)',
            duration:  500,
        });

    if (event.classList.contains('re')) {
        event.firstElementChild.setAttribute('onclick', 'moveBack(this)')
        event.setAttribute('onclick', '')

    }
    if (event.classList.contains('ro')) {
        event.firstElementChild.setAttribute('onclick', 'moveBack(this)')
    }
    var elements = getAllSiblings(event, '.div1')
    for (const element of elements) {
        if (element.classList.contains('re')) {
               element.style.zIndex = '1'; 
               element.classList.remove('re')
               element.firstElementChild.style.display = 'none';
               element.lastElementChild.style.display = 'none';
               element.animate(
                   [
                       { transform: `translateX(0px) translateY(0px)` },

                       { transform: `translateX(0px) translateY(0px)` }

                   ], {
                       fill: 'forwards',
                       easing: 'steps(100, end)',
                       duration:  200
                   });
                   element.setAttribute('onclick',  'move(this)')
        }
   }
}
function getAll(dom, query) {
    var doms = dom.parentElement.querySelectorAll(query);
    return [].slice.call(doms).filter( d => d );
}

function moveBack(event){
    var myDiv = event.parentElement;
    myDiv.firstElementChild.style.display = 'none';
    myDiv.lastElementChild.style.display = 'none';
    var t = [] = getAll(myDiv, '.div1');
    for (const e of t) {
           e.style.zIndex = '1'; 
           e.animate( 
               [
                   { transform: `translateX(0px) translateY(0px)` },

                   { transform: `translateX(0px) translateY(0px)` }

               ], {
                   fill: 'forwards',
                   easing: 'steps(100, end)',
                   duration:  200
               });
               e.classList = 'div1'
               e.style.zIndex = '1'; 
   }
   myDiv.classList.remove('re')
   myDiv.classList = 'div1  back'
   myDiv.style.zIndex = '1'; 
   myDiv.animate(
       [
           { transform: `translateX(0px) translateY(0px)` },

           { transform: `translateX(0px) translateY(0px)` }

       ], {
           fill: 'forwards',
           easing: 'steps(100, end)',
           duration:  200
       });
       setTimeout(() => {
        myDiv.setAttribute('onclick',  'move(this)')

       }, 300);
}
 