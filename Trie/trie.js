class Trie{
    constructor(){
        this.root = []
    }

    insert(word){
        let node = this.root
        for(let char of word){
            let index = char.charCodeAt(0)-'a'.charCodeAt(0)
            console.log("Index", index);
            if(!node[index]){
                node[index] = []
            }
            node = node[index] 
        }
        node.push(word)
    }

    delete(word){
        if(!this.search(word)) return false
        let node = this.root
        for(let char of word){
            let index = char.charCodeAt(0)-'a'.charCodeAt(0)
            node = node[index]
        }
        const wordIndex = node.indexOf(word)
        node.splice(wordIndex, 1)
        return true
    }

    search(word){
        let node = this.root
        for(let char of word){
            let index = char.charCodeAt(0)-'a'.charCodeAt(0)
            if(!node[index]){
                return false
            }
            node = node[index]
        }
        return node.includes(word)
    }

    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            let index = char.charCodeAt(0)-'a'.charCodeAt(0)
            if(!node[index]){
                return false
            }
            node = node[index]
        }
        return true
    }
}


const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"))
console.log(trie.search("app"));
console.log(trie.startsWith("app"))
trie.delete("apple");
console.log(trie.search("apple"));