function checkScroll(element, fraction) {
    var rect = element.getBoundingClientRect();
    var y = rect.top,
        window_height = window.innerHeight;
    var visible = -1;

    if (y <= window_height && y > 0) visible = Math.abs(y - window_height) / window_height;

    if (visible > fraction) return true;
    else return false;
}

function checkScrollBlocks(elements, fraction) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var visible = checkScroll(element, fraction);
        if (visible && element.classList.contains("is-visible") == false) {
            element.classList.add("is-visible");

            var videos = element.querySelectorAll('video');
            Array.from(videos).forEach((video_el) => {
                if (video_el) {
                    var video_src = video_el.getAttribute("data-src");
                    if (video_src) video_el.setAttribute("src", video_src);
                }
            });

            var imgs = element.querySelectorAll('img');
            Array.from(imgs).forEach((img_el) => {
                if (img_el) {
                    var img_src = img_el.getAttribute("data-src");
                    if (img_src) img_el.setAttribute("src", img_src);
                }
            });
        }
    }
}

var blocks = document.getElementsByClassName("section");

window.addEventListener('scroll', function () {checkScrollBlocks(blocks, 0.5)}, false);
window.addEventListener('resize', function () {checkScrollBlocks(blocks, 0.5)}, false);


/*=====================================Windown===================================*/

! function (e, t) {
    var i = t.documentElement;
    t.body;

    function n() {
        var t = i.clientWidth,
            n = t >= 1226 ? t / 10 : 122.6;
        i.style.fontSize = n + "px", e.rootFontSize = n, e.oriRootFontSize = 256
    }
    if (e.addEventListener("resize", (function () {
            n()
        }), !1), e.addEventListener("pageshow", (function (e) {
            e.persisted && n()
        }), !1), n(), e.devicePixelRatio && e.devicePixelRatio >= 2) {
        var o = t.createElement("div"),
            d = t.createElement("body");
        o.style.border = "0.5px solid transparent", d.appendChild(o), i.appendChild(d), 1 === o.offsetHeight && i.classList.add("hairlines"), i.removeChild(d)
    }
}(window, document)

/*===================================Slick=====================================*/

$(function (){
    $('.galeria').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        fade: true,
     });
})