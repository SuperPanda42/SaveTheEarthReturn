/*
* This object collects all information about an Achievement.
* An achievement has a (unique) name and a value in points.
*/
function Achievement(name,points){
    this.name = name;
    this.points = points;
/*
* Name getter setter
*/
    this.getName = function(){
        return this.name;
    };
    this.setName = function(name){
        this.name = name;
    };
/*
* Points getter setter
*/
    this.getPoints = function(){
        return this.points;
    };
    this.setPoints = function(value){
        this.points = value;
    };
/*
* SortOf print
*/
    this.print = function(){
        return this.name + " awards " + this.points + " points";
    };
}