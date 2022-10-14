import { testData } from "./data.js";

const ddd = document.querySelector("#df");
const showHTML = testData
    .map(
        (dd, index) =>
            `<a id='${dd.id}' class='sss' style='display: block;' href='./tourDetail.html'>${dd.name}</a>`
    )
    .join("");

ddd.innerHTML = showHTML;

$(document).ready(function () {
    $(".sss").click(function () {
        let value = $(this).attr("id");
        localStorage.setItem("id", value);
    });
});
