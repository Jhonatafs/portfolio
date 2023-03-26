//change theme
/*  --color-bg:#262626;
    --color-menu:#181818;
    --color-primary:#f8f8f8;
    --color-secondary:#77A656;  */

function changeTheme() {
    if(getComputedStyle(document.documentElement).getPropertyValue('--color-bg') == '#262626'){
        document.documentElement.style.setProperty('--color-bg', '#f8f8f8');
        document.documentElement.style.setProperty('--color-menu', '#77A656');
        document.documentElement.style.setProperty('--color-primary', '#2d2933');
        document.documentElement.style.setProperty('--color-secondary', '#181818');
    }else {
        document.documentElement.style.setProperty('--color-bg', '#262626');
        document.documentElement.style.setProperty('--color-menu', '#181818');
        document.documentElement.style.setProperty('--color-primary', '#f8f8f8');
        document.documentElement.style.setProperty('--color-secondary', '#77A656');
    }
}

function changeThemeBlog() {
    if(getComputedStyle(document.documentElement).getPropertyValue('--color-bg') == '#262626'){
        document.documentElement.style.setProperty('--color-bg', '#f8f8f8');
        document.documentElement.style.setProperty('--color-menu', '#7D7A67');
        document.documentElement.style.setProperty('--color-primary', '#2d2933');
        document.documentElement.style.setProperty('--color-secondary', '#181818');
    }else {
        document.documentElement.style.setProperty('--color-bg', '#262626');
        document.documentElement.style.setProperty('--color-menu', '#181818');
        document.documentElement.style.setProperty('--color-primary', '#f8f8f8');
        document.documentElement.style.setProperty('--color-secondary', '#7D7A67');
    }
}