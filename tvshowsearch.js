let inp = document.querySelector(".inp");
let btn = document.querySelector("button");
let spn = document.querySelector("#spn");
const searchApi = async (data) => {
    try {
        const config = { params: { q: inp.value }};
        const res = await axios.get(`https://api.tvmaze.com/search/shows?`,config);
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
