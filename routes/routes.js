var appRouter = (app) => {
    app.get("/", function(req, res) {
      res.status(200).send("Route racine en get");
    });
    app.get("/realisateur", (req, res) => {
      // send the list of all directors
      res.status(200).send("Route realisateur en get");
    });
    app.get("/realisateur/:nomRea", (req, res) => {
      // send all DVDs of a director
      const nomRealisateur = req.params.nomRea;
   
      if (nomRealisateur!=="") {
        res.status(200).send(`route realisateur pour ${nomRealisateur}`);
      } else {
        res.status(400).send({ message: 'route realisateur mais avec un nom vide' });
      }
    });
    app.get("/acteur", (req, res) => {
      // send all actors
      res.status(200).send("Route acteur en get");
    });
    app.get("/acteur/:nomAct", (req, res) => {
      // send all films of an actor
      const nomActeur = req.params.nomAct;
   
      if (nomActeur!=="") {
        res.status(200).send(`route acteur pour ${nomActeur}`);
      } else {
        res.status(400).send({ message: 'route acteur mais avec un nom vide' });
      }
    });
    
    app.post("/realisateur/:nomRea", (req, res) => {
      // add a director
      const nomRealisateur = req.params.nomRea;
   
      if (nomRealisateur!=="") {
        res.status(200).send(`route ajout realisateur pour ${nomRealisateur}`);
      } else {
        res.status(400).send({ message: 'route ajout realisateur mais avec un nom vide' });
      }
    });
    app.post("/acteur/:nomAct", (req, res) => {
      // add an actor
      const nomActeur = req.params.nomAct;
   
      if (nomActeur!=="") {
        res.status(200).send(`route ajout acteur pour ${nomActeur}`);
      } else {
        res.status(400).send({ message: 'route ajout acteur mais avec un nom vide' });
      }
    });
  }
  
  module.exports = appRouter;