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

    findNearMatches(baseNode,name){
        let childrenNodes = baseNode.childrenNodes
        let childrenKeys  = Object.keys(childrenNodes)
        if(baseNode.terminationCount>0){
            console.log("near match found")
            console.log(name)
            return name
        }
        for( const childKey of childrenKeys){
            this.findNearMatches(childrenNodes[childKey],name+childKey)
        }
    }
    
    //method to allow searching for a particular string "q" in trie
    queryExact(q){ 
        let currentNode = this.root
        for(const character of q){
            if(Object.keys(currentNode.childrenNodes).includes(character)){
                currentNode =  currentNode.childrenNodes[character]
            }
            else{
                return null //match not found, ends query function here
            }
            //console.log(character)
        }
        
        return currentNode  //useful for other methods like query 
    }
    
    query(q){
        //search for the trie for given query first
        let baseNode = this.queryExact(q)
        
        if(!baseNode){  //checks first if an exact match even exists
            console.log(`${q} not found in trie`)
        }
        else{
            //then report exact matches first
            console.log(`${baseNode.terminationCount} exact matches of ${q} found in trie`)
            
            //then check children of currentNode to find near matches

            this.findNearMatches(baseNode,q)
            
        }
        
    }
    
    //method to insert string s in trie
    insert(s){
        let currentNode = this.root
        for(const character of s){
            //checks if child node from corresponding character already exists
            if(Object.keys(currentNode.childrenNodes).includes(character)){
                //child node already exists
                //console.log(`child node already exists for character ${character}`)
            }
            else{
                //child node doesn't exist so new one has to be created
                //console.log(`child node had to be created for character ${character}`)
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
t.query("MURUGAN V")

for(const x of data){
    if(x.startsWith("MURUGAN")){
        //console.log(x)
    }
}
//t.query("MURUGAN V")
// you can query for presence of any faculty name in records using t.query() here