export class Participant {
    public _id?: string;
    public age?: number;
    public gender?: string;
    public ip?: string;
    public isComplete?: boolean; 
    public isCorrect?: boolean;
    public mturkCode?: string;
    public name?: string;
    public payoff?: number;
    public endowment?: number[];
    public opponentNumber?: number[];
    public proportion?: number[];
    public reactionTime?: number[];
    public returned?: number[];
    
    constructor (
        name?: string,
        age?: number,
        gender?: string,
        isComplete?: boolean
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isComplete = isComplete;
    }

}


