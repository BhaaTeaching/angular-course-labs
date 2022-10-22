const codes = document.querySelectorAll('.code')
console.log(codes);
codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        console.log(e.key);
        if (e.key === 'Enter') {
            alert('Your code successfully recieved');
        }
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            console.log(idx);
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})