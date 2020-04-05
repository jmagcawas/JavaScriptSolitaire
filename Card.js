class Card{

    static foundationNumber = 4;
    static manueverNumber = 7;

    constructor(suites,rank,cardImage){
        this.suites = suites;
        this.rank = rank;
        this.faced = false;
        this.cardImage = cardImage;

    }

    static CreateDeck(){
        var deck = [];
        for(var suite in Suites){
            for(var rank in Ranks){
                deck.push(new Card(suite,rank));
            }
        }
    }

    static CreateWaste(){
       return [];
    }

    static CreateFoundation(){
        var foundation = [];
        for(var i = 0; i < this.foundationNumber; i++){
            foundation.push([]);
        }
        return foundation;
    }

    static CreateManuever(){
        var manuever = [];
        for(var i = 0; i < this.manueverNumber; i++){
            manuever.push([]);
        }
        return manuever;
    }

    static ShuffleDeck(){
        var currentIndex = deck.length;
        var temporaryValue;
        var randomIndex;

        // While there remain cards to shuffle...
        while (0 !== currrentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        }
        return deck;
    }

    static GetCard(deck){
        return deck.pop();
    }

    ToggleFace(){
        this.faced != this.faced;
    }

    // Compare(suite,rank){
        
    // }


}