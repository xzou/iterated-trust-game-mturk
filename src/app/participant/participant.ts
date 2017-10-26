export class Participant {
    public _id?: string;
    public name?: string;
    public age?: number;
    public gender?: string;
    public ip?: string;
    public mturkCode?: string;
    public payoff?: number;
    public opponentNumber?: number[];
    public endowment?: number[];
    public returned?: number[];
    public reactionTime?: number[];
    public proportion?: number[];
    
    constructor (
        name?: string,
        age?: number,
        gender?: string,
        ip?: string,
        mturkCode?: string
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.ip = ip;
        this.mturkCode = mturkCode;
    }

}


