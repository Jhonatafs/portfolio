var index = 0;

function checkTheme(){
    if(document.cookie === 'themeDark=1'){
        themeDark();
    } else if(document.cookie === 'themeDark=0'){
        themeLite();
    }
} window.onload = checkTheme();


function changeTheme() {
    if(getComputedStyle(document.documentElement).getPropertyValue('--body-background') == '#363636'){
        themeLite();
        this.index = 0;
        cookieTheme();
    }else {
        themeDark();
        this.index = 1;
        cookieTheme();
    }
}

function themeLite(){
    document.getElementById('lux').classList.remove('fa-solid');
    document.getElementById('lux').classList.add('fa-regular');
    document.documentElement.style.setProperty('--body-background', '#C2C0A6');
    document.documentElement.style.setProperty('--color-lux', '#363636');
    document.documentElement.style.setProperty('--color-text','#000');
    
}
function themeDark(){
    document.getElementById('lux').classList.remove('fa-regular');
    document.getElementById('lux').classList.add('fa-solid');
    document.documentElement.style.setProperty('--body-background', '#363636');
    document.documentElement.style.setProperty('--color-lux', '#C2C0A6');
    document.documentElement.style.setProperty('--color-text','#f1f1f1');
}

function cookieTheme(){
    document.cookie = 'themeDark=' + this.index + '; Expires=Wed, 21 Oct 3000 00:00:00 GMT; path=/';
}