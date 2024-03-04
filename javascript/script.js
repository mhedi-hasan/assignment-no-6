const loadRetro3=async()=>{
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
  const data = await res.json();
  const retros3 = data.posts;
  console.log(retros3);
  displayretros3(retros3);
}

const displayretros3 = (retros3) => {
  const retroContainer3 = document.getElementById("retro-container");
  retroContainer3.textContent=''
  retros3.forEach((retro3) => {
    console.log(retro3);
    // step:2- create a div
    const retroCard3 = document.createElement("div");
    retroCard3.classList = ` `;
    // step:3- create innerHTML
    retroCard3.innerHTML = `
<section class="flex flex-col lg:flex-row bg-[#F3F3F5] mt-4 rounded-xl py-8">

<div class="relative">
<div><figure><img src="${retro3.image}" class="ml-6 rounded-xl w-[80%] h-[10%] lg:w-24 lg:h-24" alt="Album"/></figure></div>
<div><p class="absolute text-red-700 ml-[100px] -mt-[100px]"><i class="fa-solid fa-circle"></i></p></div>
</div>    
    <div class="flex w-[100%] flex-col px-12">
        <div class="flex  gap-5 text-[18px] font-normal mulish-font opacity-75 pb-[2px]">
            <p>#:${retro3.category}</p>
            <p>Another: ${retro3.author.name}</p>
        </div>
        <div>
        <h2 class="text-[20px] font-bold ">${retro3.title}</h2>
        <h2 class="mb-3 mt-1 text-[18px]">${retro3.description}</h2>
        <hr class="border-dotted  opacity-45 w-full border-black border-[1px]">
        <div class="flex justify-between">
        <div class="flex gap-7 opacity-75 mulish-font text-[17px] pt-5">
        <h3><i class="fa-regular pr-1 fa-message"></i>  ${retro3.comment_count}</h3>
        <h3><i class="fa-regular pr-1 fa-clock"></i> ${retro3.posted_time}</h3>
        <h3><i class="fa-regular pr-1 fa-eye"></i> ${retro3.view_count}</h3>
        </div>
        <div class="flex">
        <h4 onclick="allBtn()" class="message h-10 flex mt-3 cursor-pointer hover:bg-[#195b45] justify-center  w-10 bg-[#3CC497] rounded-full text-center text-white items-center"><i class="fa-solid fa-envelope-open"></i></i></h4>
        </div>
        </div>
        </div>
    </div>
    </section>
        `;
    // step:4- append chile
    retroContainer3.appendChild(retroCard3);
  });
  
};

loadRetro3()

// -----------
const loadRetro = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
  const data = await res.json();
  const retros = data.posts;
  //   console.log(data.posts);
  displayretros(retros);
};

const displayretros = (retros) => {
  const retroContainer = document.getElementById("retro-container");
  retroContainer.textContent=''
  retros=retros.slice(0,6);
  retros.forEach((retro) => {
  
    console.log(retro);
    // step:2- create a div
    const retroCard = document.createElement("div");
    retroCard.classList = ` `;
    // step:3- create innerHTML
    retroCard.innerHTML = `
<section  class="flex bg-[#F3F3F5] mt-4 rounded-xl py-8">
    <div class="relative">
    <div><figure><img src="${retro.image}" class="ml-6 rounded-xl w-24 h-24" alt="Album"/></figure></div>
    <div><p class="absolute ml-[100px] -mt-[100px]"><i class="fa-solid fa-circle"></i></p></div>
    </div>

    <div class="flex w-[100%] flex-col px-12">
        <div class="flex  gap-5 text-[18px] font-normal mulish-font opacity-75 pb-[2px]">
            <p>#:${retro.category}</p>
            <p>Another: ${retro.author.name}</p>
        </div>
        <div>
        <h2 class="text-[20px] font-bold ">${retro.title}</h2>
        <h2 class="mb-3 mt-1 text-[18px]">${retro.description}</h2>
        <hr class="border-dotted  opacity-45 w-full border-black border-[1px]">
        <div class="flex justify-between">
        <div class="flex gap-7 opacity-75 mulish-font text-[17px] pt-5">
        <h3><i class="fa-regular pr-1 fa-message"></i>  ${retro.comment_count}</h3>
        <h3><i class="fa-regular pr-1 fa-clock"></i> ${retro.posted_time}</h3>
        <h3><i class="fa-regular pr-1 fa-eye"></i> ${retro.view_count}</h3>
        </div>
        <div class="flex">
        <h4 onclick="allBtn('${retro.title.replace(/'/g,'@')}')" class="message h-10 flex mt-3 cursor-pointer hover:bg-[#195b45] justify-center  w-10 bg-[#3CC497] rounded-full text-center text-white items-center"><i class="fa-solid fa-envelope-open"></i></i></h4>
        </div>
        </div>
        </div>
    </div>
    </section>
        `;
    // step:4- append child
    retroContainer.appendChild(retroCard);
  });
  //hide loading spinner
  toggleLoadingSpinner(false)
};

loadRetro();

// btn click function
let count=0;
function allBtn(title){
  console.log(title)
  const appendContainer=document.getElementById('append-container');
  count=count+1;
  console.log(count);
  document.getElementById('zero').innerText=count;
  const titleMark=document.createElement('span');
  titleMark.classList=`flex mt-4 px-5 py-6 rounded-xl bg-base-100 shadow-xl`;
  titleMark.innerHTML=`
  <p class="text-[19px] font-bold inner-font">${title}</p>
  <h3><i class="fa-regular pr-1 fa-eye"></i></h3>
  `;
  appendContainer.appendChild(titleMark);
}

// latest-posts-section-start-here 

const loadRetro2 = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const data = await res.json();
  const retros2=data;
    // console.log(retros2);
    displayRetros2(retros2);
};

const displayRetros2 = retros2 =>{
  // step:1-
  const retroContainer2 = document.getElementById("retro-container2");
  // console.log(retros2);
  retros2.forEach(retros1 =>{
    console.log(retros1);
    // step:2- create a div
    const retroCard2=document.createElement('div');
    retroCard2.classList=`w-80 py-6 px-5 rounded-3xl bg-base-100 shadow-xl`;
    // step:3- set inner html
    retroCard2.innerHTML=`
    <figure><img class="rounded-2xl" src="${retros1.cover_image}" alt="Shoes" /></figure>
    <div class="">
    <span class="flex text-[20px] mt-3 opacity-80 gap-3 py-3"><i class="fa-regular fa-calendar"></i>
    <h2 class="text-[17px] opacity-85">${retros1.author.posted_date ||'No publish date'}</h2></span>
      <p class="text-[19px] font-bold inner-font">${retros1.title}</p>
      <p class="mulish-font opacity-85 py-2">${retros1.description}</p>
    </div>
    <div class="flex gap-4">
    <div>
    <img class="h-16 w-16 rounded-full" src="${retros1.profile_image}" alt="">
    </div>
    <div>
    <h1 class="text-[17px] font-bold inner-font">${retros1.author.name}</h1>
    <p class="mulish-font opacity-75">${retros1.author.designation || "Unknown"}</p>
    </div>
    </div>
    `;
    // step:4- append child
    retroContainer2.appendChild(retroCard2);
  });
}

// handle search
const handleSearch =()=>{
  toggleLoadingSpinner(true)
  const searchField=document.getElementById('search-field');
  const searchText= searchField.value;
  console.log(searchText);
  loadRetro(searchText);
}
// loading-spinner
const toggleLoadingSpinner=(isLoading)=>{
  const loadingSpinner=document.getElementById('loading-spinner')
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }else{
    loadingSpinner.classList.add('hidden')
  }
}

loadRetro2()