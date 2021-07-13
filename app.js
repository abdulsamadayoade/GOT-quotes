const randomQuoteBtn = document.querySelector('.random');

randomQuoteBtn.addEventListener('click', function (e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://game-of-thrones-quotes.herokuapp.com/v1/random', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            const quote = response.sentence;

            const output = document.querySelector('.output');
            output.innerHTML = quote;
            output.style.border = '1px solid #839496';
        }
    }

    xhr.send();

    e.preventDefault();
});