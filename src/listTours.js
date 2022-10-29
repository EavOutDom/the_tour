import { testData } from "../data.js";

const listTour = document.querySelector("#list_tour");
const showHTML = testData
    .map(
        (data) =>
            `<a id='${data.id}' class='id' href='./tourDetail.html'>
            <div class="box_list">
            <div class="list_img">
                <img
                    alt=""
                    src="${data.img}"
                />
            </div>
            <div>
                <h3 class='list_name'>${data.name}</h3>
                <p class='list_desc'>${data.content}</p>
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
