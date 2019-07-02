function select(element, all){
    if(all != undefined){
        return document.querySelectorAll(element)
    }
    return document.querySelector(element)
}

let insert = select('head');
let style = document.createElement('style');
insert.appendChild(style);

let width = window.innerWidth;

//variables

let template_grid_columns = undefined;
let grid_template_rows = undefined;
let grid = undefined;
let type = undefined;
let font_base = undefined;
let nav_align = undefined;
let height = undefined;

    if(width > 1600){

        height = "100vh";
        font_base = "18px";
        nav_align = "center";
        template_grid_columns = "1fr 1fr 1fr 1fr";
        grid_template_rows = "0.5fr 3.3fr 0.2fr";
        grid = "head head head head " +"\" \""+ " aside main main main" +"\" \""+ " footer footer footer footer ";
    }
    if(width < 1600 && width > 800){

        height = "100vh";
        font_base = '15px';
        nav_align = "center";
        template_grid_columns = "1fr 1fr 1fr 1fr";
        grid_template_rows = "0.3fr 1.75fr 1.75fr 0.2fr";
        grid = "head head head head " +"\" \""+ " main main main main" +"\" \""+ " aside aside aside aside " +"\" \""+ " footer footer footer footer ";
    }
    if(width <= 800){

        height = "auto";
        nav_align = "center";
        font_base = '12px';
        template_grid_columns = "1fr 1fr 1fr 1fr";
        grid_template_rows = "auto auto auto auto";
        grid = "head head head head " +"\" \""+ " aside aside aside aside" +"\" \""+ " main main main main " +"\" \""+ " footer footer footer footer ";
    }

    style.innerHTML = 
    `
    body{
        margin: 0;
        font-size: `+ font_base +`;
        color: whitesmoke;
        font-family: sans-serif;
    }
    .container{

        display: grid;
        height: `+ height +`;
        grid-template-columns: `+ template_grid_columns +`;
        grid-template-rows: `+ grid_template_rows +`;
        grid-template-areas: 

        "`+ grid +`";
    }
    header{
        grid-area: head;
        background-color: black;
    }
    nav{
        display: flex;
        justify-content: `+ nav_align +`;
        align-content: `+ nav_align +`;
    }
    main{
        grid-area: main;
        background-color: black;
        padding: 40px 20px;
        text-align: justify;
    }
    aside{
        grid-area: aside;
        background-color: black;
        padding: 40px 20px;
        text-align: justify;
    }
    footer{
        grid-area: footer;
        background-color: black;
        padding: 10px;
        display : flex;
        justify-content: center;
        align-content: center;
    }

    `
console.log(insert)
