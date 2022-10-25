const contactList = [
    {
        id: 1,
        name: "Eav Outdom",
        title: "Web developer",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1665665649/pr/photo_2022-10-13_19-53-53_aj2qen.jpg",
    },
    {
        id: 2,
        name: "Heng Menea",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 3,
        name: "Bronh Saran",
        title: "Technical Engineer",
        aba: "096 313 5780",
        image: "https://github.com/BronhSaran/Images/blob/main/pic2.jpg?raw=true",
    },
    {
        id: 4,
        name: "Kranh Channak",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 5,
        name: "Yan Theang",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 6,
        name: "Chhoeung Chhunvirak",
        title: "CEO of WORLD BANK",
        aba: "089 816 683",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 7,
        name: "Chey Kimseng",
        title: "CEO of WORLD BANK",
        aba: "500 567 345",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1655180443/cld-sample-5.jpg",
    },
    {
        id: 8,
        name: "Long Kakda",
        title: "Student of Rupp",
        aba: "",
        image: "https://res.cloudinary.com/dnnpulqtc/image/upload/v1666613316/pr/photo_2022-10-24_19-08-01_otpm27.jpg",
    },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

const list = contactList
    .map(
        (data) => `
    <div class="card swiper-slide">
        <div class="card_image">
        <img
            src="${data.image}"
            alt=""
        />
        </div>
        <div class="card_content">
        <h2 class="card_name">${data.name}</h2>
        <h4 class="card_title">${data.title}</h4>
        <p class="aba">${data.aba}</p>
        </div>
    </div>`
    )
    .join("");

swiperWrapper.innerHTML = list;
