const arr = [
    {
        dp: "https://images.unsplash.com/photo-1634715281818-ce65b4dbc99f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        story: "https://images.unsplash.com/photo-1634715400668-2be61c363042?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1598137203988-80de6392fc1a?q=80&w=2651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        story: "https://images.unsplash.com/photo-1614613932498-aa391502906e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1676713583065-fc469d07be33?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        story : "https://images.unsplash.com/photo-1677077170838-6fc0ef7c7203?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1721206625310-5fe6854961d8?q=80&w=2858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        story: "https://images.unsplash.com/photo-1721206625205-cc430d8aca9b?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

const storiya = document.querySelector("#storiya")

let clutter = ""

// arr.forEach(function(elem, idx){
//     clutter += `<div class="story">
//                 <img id = "${idx}" src="${elem.dp}" alt="">
//             </div>`
// })


arr.map(function(elem, idx){
    clutter += `<div class="story">
                <img id = "${idx}" src="${elem.dp}" alt="">
            </div>`
})

storiya.innerHTML = clutter

storiya.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
    },3000)

})
