var appRouter = (app) => {
    app.get("/", (req, res) => {
      console.log("Route racine en get")
      res.status(200).send("Route racine en get");
    })
    app.get("/realisateur", (req, res) => {
      console.log("Route realisateur en get")
      // send the list of all directors
      res.status(200).send("Route realisateur en get");
    })
    app.get("/realisateur/:nomRea", (req, res) => {
      // send all DVDs of a director
      const nomRealisateur = req.params.nomRea;
      if (nomRealisateur!=="") {
        console.log(`Route realisateur en get pour ${nomRealisateur}`)
        res.status(200).send(`route realisateur pour ${nomRealisateur}`);
      } else {
        res.status(400).send({ message: 'route realisateur mais avec un nom vide' });
      }
    })
    app.get("/acteur", (req, res) => {
      // send all actors
      res.status(200).send("Route acteur en get");
    })
    app.get("/acteur/:nomAct", (req, res) => {
      // send all films of an actor
      const nomActeur = req.params.nomAct;
   
      if (nomActeur!=="") {
        res.status(200).send(`route acteur pour ${nomActeur}`);
      } else {
        res.status(400).send({ message: 'route acteur mais avec un nom vide' });
      }
    })
    
    app.post("/dvd", (req, res) => {
      // add a dvd
      const dvd = req.body;
   
      if (dvd!==null) {
        res.status(200).send(`route ajout DVD pour ${dvd}`);
      } else {
        res.status(400).send({ message: 'route ajout realisateur mais avec un mauvais DVD' });
      }
    })

    app.patch("/dvd", (req, res) => {
      // add a dvd
      const dvd = req.body;
   
      if (dvd!==null) {
        res.status(200).send(`route ajout DVD pour ${dvd}`);
      } else {
        res.status(400).send({ message: 'route ajout realisateur mais avec un mauvais DVD' });
      }
    })

   }
  
  module.exports = appRouter;