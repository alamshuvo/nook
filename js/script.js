const data = [
    {
        "img": "../assets/img/popular/1.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "sofa"
    },
    {
        "img": "../assets/img/popular/2.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "chair"
    },
    {
        "img": "../assets/img/popular/2.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "sofa"
    },
    {
        "img": "../assets/img/popular/3.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "table"
    },
    {
        "img": "../assets/img/popular/1.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "accessories"
    },
    {
        "img": "../assets/img/popular/3.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "sofa"
    },
    {
        "img": "../assets/img/popular/1.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "sofa"
    },
    {
        "img": "../assets/img/popular/3.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "chair"
    },
    {
        "img": "../assets/img/popular/2.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "table"
    },
    {
        "img": "../assets/img/popular/1.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "accessories"
    },
    {
        "img": "../assets/img/popular/1.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "sofa"
    },
    {
        "img": "../assets/img/popular/2.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "sofa"
    },
    {
        "img": "../assets/img/popular/2.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "chair"
    },
    {
        "img": "../assets/img/popular/3.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "table"
    },
    {
        "img": "../assets/img/popular/1.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "accessories"
    },
    {
        "img": "../assets/img/popular/3.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "sofa"
    },
    {
        "img": "../assets/img/popular/1.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "sofa"
    },
    {
        "img": "../assets/img/popular/3.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "chair"
    },
    {
        "img": "../assets/img/popular/2.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "table"
    },
    {
        "img": "../assets/img/popular/1.png",
        "title": "Vintage Single Sofa 2024",
        "price": "Tk 18500",
        "categories": "accessories"
    }
];
const seeAll=document.getElementById("seeAllCollection")
function target(category) {
     
    // Find the active tab content container
    const activeTabContent = document.querySelector(".tab-content.active-tab");
    
    if (activeTabContent) {
        // Get the target-div inside the active tab content container
        const targetDiv = activeTabContent.querySelector(".target-div");

        // Clear existing content before rendering new items
      
        targetDiv.innerHTML = ""; 

        const filterData = data.filter(item => item.categories === category);

        filterData.map((item) => {
            // Create main div for each item
            const div = document.createElement("div");
            div.classList.add("collection-item");

            // Create and set up the image
            const img = document.createElement("img");
            img.src = item.img;
            img.alt = item.title;

            // Create a parent div for the text
            const textContainer = document.createElement("div");
            textContainer.classList.add("text-container");

            // Create title paragraph
            const textA = document.createElement("p");
            textA.textContent = item.title;
            textA.classList.add("ptag");
            textContainer.appendChild(textA);

            // Create price paragraph
            const textB = document.createElement("p");
            textB.textContent = item.price;
            textB.classList.add("ptaga");
            textContainer.appendChild(textB);

            // Append elements to the main div
            div.appendChild(img);
            div.appendChild(textContainer);

            // Append the div to the target container
            targetDiv.appendChild(div);
        });
    }

    
    if (category=="all") {
    
        
         // Get the target-div inside the active tab content container
         const targetDiv = activeTabContent.querySelector(".target-div");

         // Clear existing content before rendering new items
       
         targetDiv.innerHTML = ""; 
 
        //  const filterData = data.filter(item => item.categories === category);
 
         data.map((item) => {
            
             // Create main div for each item
             const div = document.createElement("div");
             div.classList.add("collection-item");
 
             // Create and set up the image
             const img = document.createElement("img");
             img.src = item.img;
             img.alt = item.title;
 
             // Create a parent div for the text
             const textContainer = document.createElement("div");
             textContainer.classList.add("text-container");
 
             // Create title paragraph
             const textA = document.createElement("p");
             textA.textContent = item.title;
             textA.classList.add("ptag");
             textContainer.appendChild(textA);
 
             // Create price paragraph
             const textB = document.createElement("p");
             textB.textContent = item.price;
             textB.classList.add("ptaga");
             textContainer.appendChild(textB);
 
             // Append elements to the main div
             div.appendChild(img);
             div.appendChild(textContainer);
 
             // Append the div to the target container
             targetDiv.appendChild(div);
           seeAll.classList.add("seeAllHide")
         });
        
    }
}
document.getElementById('love').addEventListener('click', function() {
    const svg = this.querySelector('svg');
    svg.classList.toggle('clicked');
});

function switchTab(tabName) {
    seeAll.classList.remove("seeAllHide")
    // Get all tab content and tab buttons
    console.log(tabName);

    
    const tabContents = document.querySelectorAll(".tab-content");
    const tabButtons = document.querySelectorAll(".tab-button");

    // Hide all tab contents and remove active styles from all buttons
    tabContents.forEach(content => content.classList.remove("active-tab"));
    tabButtons.forEach(button => button.classList.remove("active-button"));

    // Display the correct tab and apply active style
    document.getElementById(tabName).classList.add("active-tab");
    const tabIndex = Array.from(tabButtons).findIndex(button => button.textContent.toLowerCase() === tabName);
    console.log(tabIndex);
    
    if (tabIndex >= 0) tabButtons[tabIndex].classList.add("active-button");

    // Call target function with the current tab's category
    target(tabName);
}

// Initialize with 'sofa' tab active on page load
switchTab("sofa");



  