document.addEventListener('DOMContentLoaded', () => {
    const all = document.getElementById('all');
    const all_value = document.getElementById('all_value');
    const display=document.getElementById('code');
    const btnCopy=document.getElementById('btnCopy');
    const container=document.querySelector('.container');

    const sizeRange=document.querySelector('#size');
    const sizeValue=document.querySelector('#size-value');


    function updateValue(){
        const radius=all.value;
        const size=sizeRange.value;
        all_value.innerHTML=radius+"px";
        sizeValue.innerHTML=size+"px";
        const code=`border-radius: ${radius}px;\nborder: ${size}px solid black;`;
        display.value=code;
        container.style.cssText=code;
    }

    all.addEventListener('mousemove',updateValue);
    all.addEventListener('change',updateValue);
    sizeRange.addEventListener('mousemove',updateValue);
    sizeRange.addEventListener('change',updateValue);
    btnCopy.addEventListener('click',()=>{
        document.getElementById('code').select();
        document.execCommand('copy');
        alert("Code Copied!");
    })


});