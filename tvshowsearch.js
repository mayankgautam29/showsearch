let inp = document.querySelector(".inp");
let btn = document.querySelector("button");
let spn = document.querySelector("#spn");
const searchApi = async (data) => {
    try {
        const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${data}`)
        for(let fr of res.data){
            const finaldata = "\n"+fr.show.name;
            spn.innerText += finaldata;
        }
        inp.value = '';
        makeImages(res.data);
    } catch (error) {
        
    }
}
btn.addEventListener('click', () => {
    searchApi(inp.value);
})
const makeImages = (shows) => {
    for(let result of shows){
        const image = document.createElement("img");
        image.src = result.show.image.medium;
        document.body.append(image);
    }
}