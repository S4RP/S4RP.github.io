// Direct user to requested pages
function direct_home()
{
    location.href = 'templates/index';
}

function direct_bio()
{
    location.href = 'templates/bio';
}

function direct_lib()
{
    location.href = 'templates/library';
}

function direct_adv()
{
    location.href = 'templates/adventures';
}

//Google Search
function google_search()
{
    // Get the user answer
    let input = document.querySelector('#gsearch').value;
    location.href = 'https://www.google.com/search?q=' + input;
    target="_blank";
}

// Wait for DOM to load before selecting anything
document.addEventListener('DOMContentLoaded', function(){
    // Direct to home page
    document.querySelector('#homebut').addEventListener('click', direct_home);
    // Direct to bio page
    document.querySelector('#biobut').addEventListener('click', direct_bio);
    // Direct to library page
    document.querySelector('#libbut').addEventListener('click', direct_lib);
    // Direct to adventure page
    document.querySelector('#advbut').addEventListener('click', direct_adv);
    // Google Search
    document.querySelector('#googlesearch').addEventListener('submit', google_search);

    window.initMap = initMap;
})



