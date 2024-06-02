document.addEventListener('DOMContentLoaded', function() {
    const sortButton = document.getElementById('sortButton');
    const randomButton = document.getElementById('randomButton');
    const resultDiv = document.getElementById('result');

    // Sırala butonuna tıklandığında sayılar ekrana yazdırılacak
    sortButton.addEventListener('click', function() {

        for (let i = 1; i<=99; i++){
            const span = document.createElement('span');
            span.textContent = i;
            span.id = 'num' + i;
            span.style.marginRight = '5px';
            resultDiv.appendChild(span);

            // Her 10 sayıdan sonra bir alt satıra geçecek
            if (i % 10 === 0){
                resultDiv.appendChild(document.createElement('br'));
            }
        }

        // Butonların durumlarını değiştir.
        sortButton.disabled = true;
        randomButton.disabled = false;
    });

    randomButton.addEventListener('click', function() {
        // Rastgele bir sayı üretilecek
        const randomNum = Math.floor(Math.random() * 99) + 1;

        // Üretilen sayı kırmızı ve kalın yazılacak
        const span = document.getElementById('num' + randomNum);
        if (span){
            span.style.color = 'red';
            span.style.fontWeight = 'bold';
        }
    });

});
