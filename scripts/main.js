const infoItemsVariable = document.getElementById("infoItems").children.length;

function hideItems(elClass) {
    for (let i = 0; i <infoItemsVariable; i++) {
        document.getElementsByTagName("ul")[0].className = "items-info-map visibilityHidden";
    } // if needs to set classes for every element: instead of [0] must be [i].
    elClass.className = "items-info-map visibilityVisible"
}

function showItems(elClass) {
    for (let i = 0; i <infoItemsVariable; i++) {
        document.getElementsByTagName("ul")[0].className = "items-info-map visibilityVisible";
    }
    elClass.className = "items-info-map visibilityHidden"
}

// working space : ---------------------------------------------------------- : \/
// on click element with id "BtnClick" changing content inside of element with id infoItems
const BtnTestClick = document.getElementById("BtnClick");
const infoItemsTest = document.getElementById("infoItems");
const mapFrameTest = document.getElementById("mapFrame");

let wrapperTextElem = `
<b></b>
            <ul class="items-info-map" >
                <li class="item-info-map">
                    test1
                </li>
                <li class="item-info-map" id="lolTest">
                    test2
                </li>
                <li class="item-info-map">
                    test3
                </li>
                <li class="item-info-map">
                    test4
                </li>
            </ul>
<b></b>

`


BtnTestClick.onclick = function () {
    infoItemsTest.innerHTML = wrapperTextElem
    // mapFrameTest.src = "https://maps.visicom.ua/iframe/uk/585:329/?c/32.07089:49.41829:17/";

};




// working space : ---------------------------------------------------------- : /\

// -=-================ test. makes every item with class "span-btn" like an button, and clickable,
// on click changing content
//
// let elements = document.getElementsByClassName("span-btn");
//
// let myFunction = function() {
//     infoItems.innerHTML = `
//     <div>
//         <span class="testClass">s223</span>
//         <span>21314</span>
//         <div class="test2">ne
//             <div>
//                 test final
//             </div>
//         </div>
//     </div>
//     `
// };
//
// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }