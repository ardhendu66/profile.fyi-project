import mobile from "@/assets/mobile.png";
import laptop from "@/assets/laptop.png";
import watch from "@/assets/watch.png";
import frige from "@/assets/refrigerator.png";
import processor from "@/assets/intel.png";
import headphone from "@/assets/headphone.png";
import shoe from "@/assets/shoe.png";
import cloth from "@/assets/clothes2.png";
import keyboard from "@/assets/keyboard.png";
import mouse from "@/assets/mouse.png";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";

export const data = [
    {
        userId: 1,
        rating: 4,
        review: "Fabulous"
    },
    {
        userId: 2,
        rating: 5,
        review: "Excellent"
    },
    {
        userId: 3,
        rating: 2,
        review: "Excellent"
    },
    {
        userId: 4,
        rating: 5,
        review: "Excellent"
    },
    {
        userId: 5,
        rating: 1,
        review: "Excellent"
    },
]

export const bannerArray = [
    banner1.src, banner2.src,
]

export const categoriesImageSupplier = [{
    id: 1,
    category: "Smartphones",
    image_url: mobile.src,
}, {
    id: 2,
    category: "Laptops",
    image_url: laptop.src,
}, {
    id: 3,
    category: "Headphones",
    image_url: headphone.src,
}, {
    id: 4,
    category: "Shoe",
    image_url: shoe.src,
}, {
    id: 5,
    category: "Mouse",
    image_url: mouse.src,
}, {
    id: 6,
    category: "Keyboard",
    image_url: keyboard.src,
}, {
    id: 7,
    category: "Cloths",
    image_url: cloth.src,
}, {
    id: 8,
    category: "Processor",
    image_url: processor.src,
}, {
    id: 9,
    category: "Refrigerator",
    image_url: frige.src,
}, {
    id: 10,
    category: "Watches",
    image_url: watch.src,
}]