//change theme
/*  --color-bg:#262626;
    --color-menu:#181818;
    --color-primary:#f8f8f8;
    --color-secondary:#77A656;  */

var index = 0;

function checkTheme(){
    if(document.cookie === 'themeDark=1'){
        themeDark();
    } else if(document.cookie === 'themeDark=0'){
        themeLite();
    }
} window.onload = checkTheme();


function changeTheme() {
    if(getComputedStyle(document.documentElement).getPropertyValue('--color-bg') == '#262626'){
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
    document.documentElement.style.setProperty('--color-bg', '#f8f8f8');
    document.documentElement.style.setProperty('--color-menu', '#77A656');
    document.documentElement.style.setProperty('--color-primary', '#2d2933');
    document.documentElement.style.setProperty('--color-secondary', '#181818');
    
}
function themeDark(){
    document.documentElement.style.setProperty('--color-bg', '#262626');
    document.documentElement.style.setProperty('--color-menu', '#181818');
    document.documentElement.style.setProperty('--color-primary', '#f8f8f8');
    document.documentElement.style.setProperty('--color-secondary', '#7D7A67');
}

function cookieTheme(){
    document.cookie = 'themeDark=' + this.index + '; Expires=Wed, 21 Oct 3000 00:00:00 GMT;';
}