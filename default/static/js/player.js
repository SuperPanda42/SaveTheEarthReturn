/*
* This object collects all the information for a player of the website.
* A player has a name, a score, a level, and an array of achievements.
*/
function Player(name){
    this.name = name;
    this.score = 0;
    this.level = 1;
    this.achievements = new Array();
/*
* Player classic getter setter
*/
    this.getPlayer = function(){
        return this.player;
    };
    this.setPlayer = function(player){
        this.name = player.name;
        this.score = player.getScore();
    };
/*
* Level management
*/
    this.getLevel = function(){
        return this.level;
    };
    this.setLevel = function(value){
        this.level = value;
    };
    this.addLevel = function(){
        this.level += 1;
    };
    this.addLevels = function(value){
        this.level += value;
    };
    this.removeLevel = function(){
        this.level -= 1;
    };
    this.removeLevels = function(value){
        this.level -= value;
    };
/*
* Scoring management
*/
    this.getScore = function(){
        return this.score;
    };
    this.setScore = function(value){
        this.score = value;
    };
    this.addPoint = function(){
        this.score += 1;
    };
    this.addPoints = function(number){
        this.score += number;
    };
    this.loosePoint = function(){
        this.score -= 1;
    };
    this.loosePoints = function(number){
        this.score -= number;
    };
    this.score = score;
/*
* Achievements management
*/
    this.addAchievement = function(achievement){
        this.achievements.push(achievement);
        this.score += achievement.getPoints();
    };
    this.removeAchievement = function(achievement){
        for (var i = 0; i < this.achievements.length ;i++){
            if(this.achievements[i].getName() == achievement.getName(){
                this.achievements.splice(i,1);
                this.score -= achievement.getPoints();
            }
        }
    };
    this.hasAchivement = function(achievement){
        for (var a in this.achievements){
            if(a.getName() == achievement.getName()){
                return true;
            }
        }
        return false;
    };
/*
* SortOf print
*/
    this.print = function(){
        return this.name + " is level " + this.level + " with "+ this.score.getScore() + " points ";
    };