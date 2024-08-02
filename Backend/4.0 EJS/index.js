import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay(); // Retorna o dia da semana (0-6)
    if(day === 0 || day === 6){
        res.render('index.ejs', {
            dayType: "the weekend", 
            advice: "it's time to relax"
        });
    } else{
        res.render('index.ejs', {
            dayType: "a weekday", 
            advice: "it's time to work hard"
        });
    }
    
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});