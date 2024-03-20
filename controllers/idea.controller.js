const ideas = require("../models/ideas.model")

exports.getAllIdeas = (err,res,req)=>{

    res.status(200).send(ideas)
}
let idea_count = 3;

exports.getIdeaBasedOnId = (req,res)=>{

    idea_id = req.params.id;

    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id]);
    }else{
        res.status(400).send({
             message : "error 404, not found",
        })
    }
}
  
exports.createIdea = (req,res)=>{
    idea_object = req.body;
    idea_count++;
    idea_object["id"]=idea_count;
    ideas[idea_count]=idea_object;

    res.status(201).send(idea_object)
}

exports.updateIdea = (req,res)=>{
    idea_id = req.params.id;
    if(ideas[idea_id]){
        idea_obj = req.body;
        ideas[idea_obj]=idea_obj;
        res.status(200).send(idea_obj);
    }else{
        return res.status(404).send({
            message : "Idea does not exist."
        })
    }
}

exports.deleteIdea = (req,res)=>{
    idea_id = req.params.id;
    if(ideas[idea_id]){
        delete ideas[idea_id];
        res.status(200).send({
            message : "idea is deleted"
        });
    }else{
        return res.status(404).send({
            message : "Idea does not exist."
        })
    }
}