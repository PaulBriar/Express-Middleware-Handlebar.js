const express = require('express');
const app = express();
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear();
});

// app.use( (req, res, next) => {
//     res.render("maintenance");
// });

// app.use((req, res, next) => {
//     let now = new Date().toString();
//     let log = `${now}: ${req.method} ${req.url}`;
//     console.log(log);
//     fs.appendFile('server.log', log + "\n", (err) => {
//         if(err) {
//             console.log(err);
//         }
//     })
//     console.log();
//     next();
// });

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("home", {
        title: "Home Page",
        welcome: "Welcome to the Home Page"
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help Page",
    });
});

app.get("/projects", (req, res) => {
    res.render("projects", {
        title: "My Portfolio Page"
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});