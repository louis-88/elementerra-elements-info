// ==UserScript==
// @name         Elementerra Elements Info
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add tier and prices next to element name on Elementerra website
// @author       louis88
// @match        https://play.elementerra.io/elements
// @downloadURL  https://raw.githubusercontent.com/louis-88/elementerra-elements-info/main/elementerra-elements-info.js
// @updateURL    https://raw.githubusercontent.com/louis-88/elementerra-elements-info/main/elementerra-elements-info.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Elements and their corresponding tiers
const elements = {
    "Fire": { "tier": "0", "amount": "10,000" },
    "Air": { "tier": "0", "amount": "10,000" },
    "Earth": { "tier": "0", "amount": "10,000" },
    "Water": { "tier": "0", "amount": "10,000" },
    "Wind": { "tier": "1", "amount": "40,000" },
    "Heat": { "tier": "1", "amount": "40,000" },
    "Lava": { "tier": "1", "amount": "40,000" },
    "Dust": { "tier": "1", "amount": "40,000" },
    "Pressure": { "tier": "1", "amount": "40,000" },
    "Smoke": { "tier": "1", "amount": "40,000" },
    "Mud": { "tier": "1", "amount": "40,000" },
    "Rain": { "tier": "1", "amount": "40,000" },
    "Energy": { "tier": "1", "amount": "40,000" },
    "Fog": { "tier": "1", "amount": "40,000" },
    "Life": { "tier": "1", "amount": "40,000" },
    "Steam": { "tier": "1", "amount": "40,000" },
    "Magnet": { "tier": "2", "amount": "130,000" },
    "Sand": { "tier": "2", "amount": "130,000" },
    "Sun": { "tier": "2", "amount": "130,000" },
    "Snow": { "tier": "2", "amount": "160,000" },
    "Swamp": { "tier": "2", "amount": "130,000" },
    "Stone": { "tier": "2", "amount": "130,000" },
    "Pond": { "tier": "2", "amount": "70,000" },
    "Mountain": { "tier": "2", "amount": "70,000" },
    "Frost": { "tier": "2", "amount": "130,000" },
    "Hot Springs": { "tier": "2", "amount": "130,000" },
    "Cloud": { "tier": "2", "amount": "130,000" },
    "Ocean": { "tier": "2", "amount": "70,000" },
    "Tornado": { "tier": "2", "amount": "160,000" },
    "Fossil": { "tier": "2", "amount": "130,000" },
    "Wave": { "tier": "2", "amount": "130,000" },
    "Oil": { "tier": "2", "amount": "130,000" },
    "Seed": { "tier": "2", "amount": "100,000" },
    "Metal": { "tier": "2", "amount": "130,000" },
    "Worm": { "tier": "2", "amount": "100,000" },
    "Ash": { "tier": "2", "amount": "160,000" },
    "Coal": { "tier": "2", "amount": "130,000" },
    "Time": { "tier": "2", "amount": "160,000" },
    "Clay": { "tier": "2", "amount": "130,000" },
    "Glass": { "tier": "2", "amount": "100,000" },
    "River": { "tier": "2", "amount": "130,000" },
    "Tree": { "tier": "3", "amount": "580,000" },
    "Coral": { "tier": "3", "amount": "190,000" },
    "Sky": { "tier": "3", "amount": "10,000" },
    "Solar Panel": { "tier": "3", "amount": "400,000" },
    "Paint": { "tier": "3", "amount": "10,000" },
    "Dam": { "tier": "3", "amount": "10,000" },
    "Furnace": { "tier": "3", "amount": "280,000" },
    "Sound": { "tier": "3", "amount": "10,000" },
    "Fire Extinguisher": { "tier": "3", "amount": "190,000" },
    "Alcohol": { "tier": "3", "amount": "10,000" },
    "Squid": { "tier": "3", "amount": "10,000" },
    "Plant": { "tier": "3", "amount": "430,000" },
    "Windmill": { "tier": "3", "amount": "10,000" },
    "Volcano": { "tier": "3", "amount": "430,000" },
    "Gasoline": { "tier": "3", "amount": "10,000" },
    "Desert": { "tier": "3", "amount": "430,000" },
    "Plastic": { "tier": "3", "amount": "340,000" },
    "Nail": { "tier": "3", "amount": "340,000" },
    "Gas": { "tier": "3", "amount": "10,000" },
    "Bottle": { "tier": "3", "amount": "160,000" },
    "Telescope": { "tier": "3", "amount": "430,000" },
    "Storm": { "tier": "3", "amount": "460,000" },
    "Apple": { "tier": "4", "amount": "940,000" },
    "Music": { "tier": "4", "amount": "10,000" },
    "Electricity": { "tier": "4", "amount": "10,000" },
    "Umbrella": { "tier": "4", "amount": "850,000" },
    "Ink": { "tier": "4", "amount": "10,000" },
    "Explosion": { "tier": "4", "amount": "10,000" },
    "Wood": { "tier": "4", "amount": "10,000" },
    "Blizzard": { "tier": "4", "amount": "10,000" },
    "Paper": { "tier": "4", "amount": "10,000" },
    "Dolphin": { "tier": "4", "amount": "10,000" },
    "Balloon": { "tier": "4", "amount": "10,000" },
    "Wire": { "tier": "4", "amount": "490,000" },
    "Sugar": { "tier": "4", "amount": "10,000" },
    "Island": { "tier": "4", "amount": "10,000" },
    "Cactus": { "tier": "4", "amount": "10,000" },
    "Meteor": { "tier": "4", "amount": "10,000" },
    "Bean": { "tier": "4", "amount": "10,000" },
    "Antenna": { "tier": "4", "amount": "10,000" },
    "Art": { "tier": "5", "amount": "10,000" },
    "Tequila": { "tier": "5", "amount": "10,000" },
    "Hail": { "tier": "5", "amount": "10,000" },
    "Rod": { "tier": "5", "amount": "10,000" },
    "Coffee": { "tier": "5", "amount": "10,000" },
    "Hammer": { "tier": "5", "amount": "10,000" },
    "Fireworks": { "tier": "5", "amount": "10,000" },
    "Blueprint": { "tier": "5", "amount": "10,000" },
    "Beach": { "tier": "5", "amount": "10,000" },
    "Lightning": { "tier": "5", "amount": "10,000" },
    "T Shirt": { "tier": "6", "amount": "10,000" },
    "Coin": { "tier": "6", "amount": "10,000" },
    "Ice Storm": { "tier": "6", "amount": "10,000" },
    "Party": { "tier": "6", "amount": "10,000" },
    "Fish": { "tier": "6", "amount": "10,000" },
    "Yacht": { "tier": "6", "amount": "10,000" },
    "Whale": { "tier": "7", "amount": "10,000" },
    "Ice": { "tier": "4", "amount": "10,000" },
    "Cloth": { "tier": "4", "amount": "10,000" }
};
    // Function to update the amount for an element
    function updateAmount(elementName, amount) {
        if (elements[elementName]) {
            elements[elementName].amount = amount;
            addTierToElement(); // Re-run to update the display
        }
    }

    // Function to add tier and amount to each element
    function addTierToElement() {
        const divs = document.querySelectorAll('div.sc-58065e1-5.gIHHsj:not(.tier-added)');
        divs.forEach(div => {
            let elementName = div.textContent.trim();
            if (elements[elementName]) {
                const infoDiv = document.createElement('div');
                infoDiv.textContent = ` T-${elements[elementName].tier} | ${elements[elementName].amount}`;
                infoDiv.style.display = 'contents';
                infoDiv.className = 'tier-info';
                div.appendChild(infoDiv);
                div.classList.add('tier-added');
            }
        });
    }

    // Observer to watch for changes in the DOM
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                addTierToElement();
            }
        });
    });
    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);

    // Initial execution
    addTierToElement();
})();
