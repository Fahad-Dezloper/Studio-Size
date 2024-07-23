function navbarAnim() {
    var lis = document.querySelectorAll("#nav li");
    
    lis.forEach(function(li) {
        li.addEventListener("mousemove", function(e) {
            // console.log(e.target);
            var div = li.querySelector("div");
            // console.log(div);
            div.style.width = "100%";
        });
        li.addEventListener("mouseleave", function(e) {
            // console.log(e.target);
            var div = li.querySelector("div");
            // console.log(div);
            div.style.width = "0%";
        });
    })
}

function heroAnime() {
    const anime = document.querySelector('.anime');
        const words = ["branding", "strategy", "packaging", "motion", "naming", "branding"];
        const timeline = gsap.timeline({ repeat: -1 });

        function wrapLetters(word) {
            anime.innerHTML = '';
            for (let char of word) {
                const span = document.createElement('span');
                span.textContent = char;
                anime.appendChild(span);
            }
            return anime.querySelectorAll('span');
        }

        function animateWord(word) {
            const chars = wrapLetters(word);
            gsap.from(chars, {
                y: 150,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out",
            });
        }

        words.forEach((word, index) => {
            timeline.call(animateWord, [word], index * 2);
        });


}

function page2Cur() {
    // script.js
var vidpage = document.querySelector('#page2Vid');
var vidcrsr = document.querySelector('#vidcrsr');

// Function to update cursor position
function updateCursorPosition(e) {
    // Get the bounding rectangle of the video element
    var rect = vidpage.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    gsap.to("#vidcrsr", {
        left: x - vidcrsr.offsetWidth / 2, // Center the cursor
        top: y - vidcrsr.offsetHeight / 2, // Center the cursor
        opacity: 1,
        duration: 0.2
    });

    vidpage.play();
}

// Show the custom cursor when mouse moves over the video
vidpage.addEventListener('mousemove', updateCursorPosition);

// Hide the custom cursor when the mouse leaves the video
vidpage.addEventListener('mouseleave', function() {
    gsap.to("#vidcrsr", {
        opacity: 0,
        duration: 0.2
    });

    vidpage.pause();
});
}

function page3(){
            var p3 = document.querySelector("#page3");
        var page3Crsr = document.querySelector("#page3Crsr");

        function updatePage3crsr(e){
            var rect = p3.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;

            gsap.to("#page3Crsr", {
                left: x - page3Crsr.offsetWidth / 2 + 60,
                top: y - page3Crsr.offsetHeight / 2 - 20,
                opacity: 1,
                duration: 0.2
            });
        }

        p3.addEventListener("mousemove", updatePage3crsr);

        p3.addEventListener("mouseleave", function() {
            gsap.to("#page3Crsr", {
                opacity: 0,
                duration: 0.2
            });
        });


        p3Elem = document.querySelectorAll("#page3-elemCont")

        p3Elem.forEach(function(p3Elem) {
        p3Elem.addEventListener("mousemove", function(e) {
            var img = p3Elem.querySelector("img");
            var vid = p3Elem.querySelector("video");

            img.style.opacity = 0;
        });
        p3Elem.addEventListener("mouseleave", function(e) {
            var img = p3Elem.querySelector("img");
            var vid = p3Elem.querySelector("video");

            img.style.opacity = 1;
        });

        });




        // draggables

        document.addEventListener('DOMContentLoaded', (event) => {
            const draggableContainer = document.getElementById('draggable-container');
            const draggableContent = document.getElementById('draggable-content');

            let isDown = false;
            let startX;
            let scrollLeft;

            draggableContainer.addEventListener('mousedown', (e) => {
                isDown = true;
                draggableContainer.style.cursor = 'grabbing';
                startX = e.pageX - draggableContainer.offsetLeft;
                scrollLeft = draggableContent.scrollLeft;
            });

            draggableContainer.addEventListener('mouseleave', () => {
                isDown = false;
                draggableContainer.style.cursor = 'grab';
            });

            draggableContainer.addEventListener('mouseup', () => {
                isDown = false;
                draggableContainer.style.cursor = 'grab';
            });

            draggableContainer.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - draggableContainer.offsetLeft;
                const walk = (x - startX); // Adjust the scroll speed here
                draggableContent.scrollLeft = scrollLeft - walk;
            });
        });
}

function page5Anime() {
    
var p5 = document.querySelectorAll("#itemsCont div");

p5.forEach(function(elem) {
    elem.addEventListener("mouseover", function(e) {
        var h1 = elem.querySelector("h1");
        var vid = elem.querySelector("video");

        gsap.to(h1, {
            x: 60,
            duration: 0.25
        })

        gsap.to(vid, {
            opacity: 1,
            duration: 0.5
        })
        h1.style.color = "white";
    });
    elem.addEventListener("mouseleave", function(e) {
        var h1 = elem.querySelector("h1");
        var vid = elem.querySelector("video");

        gsap.to(h1, {
            x: 0,
            duration: 0.25
        })

        gsap.to(vid, {
            opacity: 0,
            duration: 0.5
        })
        h1.style.color = "#676767";
    });
});
}

function footer() {
    var uls = document.querySelectorAll("#common");
    // var lis = document.querySelectorAll("#common");

    uls.forEach(function(elems) {
        elems.addEventListener("mousemove", function(e) {
            var vids = elems.querySelector("video");
            
            gsap.to(vids, {
                opacity: 1,
                duration: 0.3
            });
        });
        elems.addEventListener("mouseleave", function(e) {
            var vids = elems.querySelector("video");

            gsap.to(vids, {
                opacity: 0,
            });
        });
    })
}

function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

navbarAnim();

heroAnime();

page2Cur();

page3();

page5Anime();

footer();

locomotiveAnimation();