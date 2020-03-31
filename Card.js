class Card{
    constructor(suites,rank){
        this.suites = suites;
        this.rank = rank;
        this.faced = false;
        this.lastparent = null;
    }

    static CreateDeck(){
        var deck = [];
        for(var suite in Suites){
            for(var rank in Ranks){
                deck.push(new Card(suite,rank));
            }
        }
    }

    

}