var banner = document.getElementById('banner');
var close = document.querySelector('.close');
var timer;

banner.addEventListener("mouseover", event => {
    timer = setTimeout(
        function expandBanner() {
            document.querySelector('.container_exp').classList.remove('hide');
            document.querySelector('.container').classList.add('hide');
            document.querySelector('.text_block').classList.add('animate');
            document.querySelector('.boxes_block').classList.add('animate');
            document.querySelector('.faded_exp').classList.add('animate');
            document.querySelector('.footer_wrapper').classList.add('animate');
        }, 3000);
});

close.addEventListener("click", event => {
        document.querySelector('.container_exp').classList.add('hide');
        document.querySelector('.container').classList.remove('hide');
});

