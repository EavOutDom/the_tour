import data from "../data/tour.json" assert { type: "json" };

const listTour = document.querySelector("#list_tour");
const showList = data.tours.map((tour) => {
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
}).join('');

listTour.innerHTML = showList;

$(document).ready(function () {
    $(".id").click(function () {
        let value = $(this).attr("id");
        localStorage.setItem("id", value);
    });
});


// import data from "../data/tour.json" assert { type: "json" };

// const listTour = document.querySelector("#list_tourx");
// const showHTML = data.tour
//     .map(
//         (data) =>
//             `<a id='${data.id}' class='id' href='./tourDetail.html'>
//             <div class="box_list">
//             <div class="list_img">
//                 <img
//                     alt=""
//                     src="${data.image[0]}"
//                 />
//             </div>
//             <div>
//                 <h3 class='list_name'>${data.title}</h3>
//                 <p class='list_desc'>${data.desc}</p>
//             </div>
//         </div>
//         </a>`
//     )
//     .join("");

// listTour.innerHTML = showHTML;


