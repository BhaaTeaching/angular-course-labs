const codes = document.querySelectorAll('.code')
console.log(codes);
codes[0].focus()

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && index===5) {
            alert('Your code successfully recieved');
        }
        if(e.key >= 0 && e.key <=9) {
            codes[index].value = '';
            console.log(index);
            if (index < 5) {
                setTimeout(() => codes[index + 1].focus(), 10)
            }
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[index - 1].focus(), 10)
        }
    })
})