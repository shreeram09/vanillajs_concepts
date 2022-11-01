/**
 * event bubbling and cpaturing
 * stop propagation, immediate propagation and prevent default
 */
//div parent of button child

//event bubbling, event will be propogated from child to parent element
//html<-body<-div<-button
var div = document.querySelector('div');
div.addEventListener('click',()=>{
    console.log('just clicked...')
},true)//true flag for event capturing

//event capturing is reverse of bubbling
var button = document.querySelector('button');

//stopping event propagation
button.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('button')
})

//stopping event propagation immediately
//incase multiple event listeners applied 
button.addEventListener('click',(e)=>{
    e.stopImmediatePropagation();
    console.log('button1')
})

//prevent event default
//default nature of element must be stopped
var a = document.querySelector('a')
a.addEventListener('click',e=>{
    e.preventDefault()
    console.log('a tag')
})