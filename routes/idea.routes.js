const idea_controller = require("../controllers/idea.controller");

module.exports = (app)=>{

    app.get("/IDEA_APP/api/v1/ideas",idea_controller.getAllIdeas)
    app.get("/IDEA_APP/api/v1/ideas/:id",idea_controller.getIdeaBasedOnId)
    app.post("/IDEA_APP/api/v1/ideas",idea_controller.createIdea)
    app.put("/IDEA_APP/api/v1/ideas/:id",idea_controller.updateIdea)
    app.delete("/IDEA_APP/api/v1/ideas/:id",idea_controller.deleteIdea)
}
