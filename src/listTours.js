import data from "../data/tour.json" assert { type: "json" };
import items from "../data/heroSlice.json" assert { type: "json" };

const listTour = document.querySelector("#list_tour");
const showList = data.tours
    .map((tour) => {
        return `<a href="tourDetail.html" id='${tour.id}' class='id'>
        <div class="box_list">
            <div class="list_img">
            <img
                alt=""
                src="${tour.images[0]}"
            />
        </div>
        <div class="ellipse">
            <h3>${tour.title}</h3>
            <p>${tour.sub_title}</p>
        </div>
    </div>
</a>`;
    })
    .join("");

listTour.innerHTML = showList;

$(document).ready(function () {
    $(".id").click(function () {
        let value = $(this).attr("id");
        localStorage.setItem("id", value);
    });
});

const swiperWrapper = document.getElementById("swr");
const slide = items.hero
    .map((item) => {
        return `<div class="swiper-slide">
        <div class="hero_img">
        <img
            src="${item.image}"
            alt=""
        />
        <h1>
            ${item.head_1}
        </h1>
        <p>
            ${item.head_2}
        </p>
    </div>
</div>`;
    })
    .join("");

swiperWrapper.innerHTML = slide;
