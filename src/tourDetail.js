import data from "../data/tour.json" assert { type: "json" };
// console.log(data.tours);

const getId = window.localStorage.getItem("id");

const filterExistDetail = data.tours.filter(
    (item) => Number(item.id) !== Number(getId)
);
const randomArr = filterExistDetail.sort(() => 0.5 - Math.random());
const recommendArr = randomArr.slice(0, 4);

const showDetail = data.tours.find((tour) => Number(tour.id) === Number(getId));
const detail = (document.getElementById("detail").innerHTML = `
    <section>
        <p class="txt_title">${showDetail.title}</p>
        <p class="txt_subtitle">${showDetail.sub_title}</p>
    </section>
    <section>
                <div class="box">
                    <div class="grid_box">
                        
                        <div class="flex_between">
                            <div
                                class="swiper mainPic"
                                style="
                                    --swiper-navigation-color: #fff;
                                    --swiper-pagination-color: #fff;
                                "
                            >
                                <div class="swiper-wrapper">
                                    ${showDetail.images
                                        .map((img) => {
                                            return `<div class="swiper-slide">
                                        <img
                                            alt=""
                                            src="${img}"
                                        />
                                    </div>`;
                                        })
                                        .join("")}
                                </div>

                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                            <div class="category">
                                ${showDetail.category
                                    .map((cate) => `<div>${cate}</div>`)
                                    .join("")}
                            </div>
                        </div>
                     

                        <div thumbsSlider="" class="swiper thumpPic">
                        <div class="swiper-wrapper">
                        ${showDetail.images
                            .map((img) => {
                                return `<div class="swiper-slide">
                            <img
                                alt=""
                                src="${img}"
                            />
                        </div>`;
                            })
                            .join("")}
                    </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <p class="paragraph">
                    &emsp;&emsp;${showDetail.description}
                </p>
            </section>
            <section class="px-50">
                <p>. See location on map</p>
                <div>
                    <iframe
                        title="tour"
                        src="${showDetail.google_map}"
                        width="100%"
                        height="450"
                        style="border: 0; margin-top: 20px; border-radius: 10px"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
            <section class="px-50">
                <p>. Recommend tour</p>
                <div class="recmd_box">
                   ${recommendArr.map(recmd => {
                    return ` <a href="tourDetail.html" class='id' id='${recmd.id}'>
                    <div class="img_recmd">
                        <img
                            alt=""
                            src="${recmd.images[0]}"
                        />
                    </div>
                    <div>
                        <p>${recmd.title}</p>
                        <p>${recmd.sub_title}</p>
                    </div>
                </a>    `
                   }).join('')}              
                </div>
            </section>
`);

$(document).ready(function () {
    $(".id").click(function () {
        let value = $(this).attr("id");
        localStorage.setItem("id", value);
        console.log(value)
    });
});