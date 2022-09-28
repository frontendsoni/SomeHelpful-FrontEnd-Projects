let count = 0;

const value = document.getElementById('counter-value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function(btn){
    btn.addEventListener('click',function(event){
        const styles = event.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        } if (count < 0){
            value.style.color = 'red';
        } if (count === 0){
            value.style.color ='#222'
        }
        value.textContent = count;

    })
})