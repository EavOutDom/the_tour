import data from "../data/tour.json" assert { type: "json" };

const listTour = document.querySelector("#list_tour");
const showHTML = data.tour
    .map(
        (data) =>
            `<a id='${data.id}' class='id' href='./tourDetail.html'>
            <div class="box_list">
            <div class="list_img">
                <img
                    alt=""
                    src="${data.image[0]}"
                />
            </div>
            <div>
                <h3 class='list_name'>${data.title}</h3>
                <p class='list_desc'>${data.desc}</p>
            </div>
        </div>
        </a>`
    )
    .join("");

listTour.innerHTML = showHTML;

$(document).ready(function () {
    $(".id").click(function () {
        let value = $(this).attr("id");
        localStorage.setItem("id", value);
    });
});
