

let button = document.querySelectorAll('button');
let about = document.getElementById('about');

button.forEach(function (button){
    button.addEventListener('click', function(e){
    document.querySelector('.active')?.classList.remove('active');
    button.classList.add('active');
    
    let content = document.querySelectorAll('.img-section')
      for( let i = 0; i < content.length; i++) {
            content[i].style.display = 'none';
        }    
        
        if (e.target.id === 'islamabad') {
            section1.style.display = 'flex';
        }
        if (e.target.id === 'lahore') {
            section2.style.display = 'flex';
        }
        if (e.target.id === 'karachi') {
            section3.style.display = 'flex';
        }
       
    })
})

document.getElementById('islamabad').click();