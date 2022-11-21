getRotatingText();
document.querySelector('#rotate-text-input').oninput = getRotatingText;
function getRotatingText() {
    const textToSpans = document.querySelector('.circle');
    // console.log('change works');
    let adaptedText = "";
    let textForRotate = document.querySelector('#rotate-text-input').value + '-';
    console.log(textForRotate.length);
    let stringRotatingTextLenhth=textForRotate.length; 
    console.log(textForRotate);
    for (let i = 0; i < stringRotatingTextLenhth; i++) {
        if (textForRotate[i] === ' ') {
            adaptedText += `<span style="--i:${i + 1};transform: rotateY(calc(var(--i)*calc(360deg/${stringRotatingTextLenhth}))) translateZ(${200/30*stringRotatingTextLenhth}px)">-</span>`;
        } else {
            adaptedText += `<span style="--i:${i + 1};transform: rotateY(calc(var(--i)*calc(360deg/${stringRotatingTextLenhth}))) translateZ(${200/30*stringRotatingTextLenhth}px)">${textForRotate[i]}</span>`
        }
    }
    console.log(adaptedText);
    textToSpans.innerHTML = adaptedText;
}