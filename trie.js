//list containing data in linear fashion
const data = require("./facultyNames")

class trieNode{
    constructor(){
        this.terminationCount = 0; //marks the number of strings that end at a particular node
        this.childrenNodes = {} //stores the children of each trieNode
    }
}

class trie {
    constructor(){
        this.root = new trieNode()
    }
    
    //method to allow searching for a particular string "q" in trie
    query(q){ 
        let currentNode = this.root
        for(const character of q){
            if(Object.keys(currentNode.childrenNodes).includes(character)){
                currentNode =  currentNode.childrenNodes[character]
            }
            else{
                console.log(`${q} not found in trie`)
                return //ends query function here
            }
            //console.log(character)
        }
        
        console.log(`${currentNode.terminationCount} instances of ${q} found in trie`)
    }
    
    //method to insert string s in trie
    insert(s){
        let currentNode = this.root
        for(const character of s){
            //checks if child node from corresponding character already exists
            if(Object.keys(currentNode.childrenNodes).includes(character)){
                //child node already exists
                console.log(`child node already exists`)
            }
            else{
                //child node doesn't exist so new one has to be created
                console.log(`child node had to be created for character ${character}`)
                currentNode.childrenNodes[character] = new trieNode()
            }
            
            //assigning current node to the next child node for the string s
            currentNode = currentNode.childrenNodes[character]
        }
        
        //increasing termination count for last child node where string ends
        currentNode.terminationCount += 1;
    }

    insertMultiple(data){
        for(const string of data){
            this.insert(string)
        }
    }
}


t= new trie()
t.insertMultiple(data)


console.log(JSON.stringify(t.root.childrenNodes))
