class TrieNode{
    constructor(){
        this.children = new Array(26)
        this.wordCount = 0
    }
}


function insert(root, str){
    let curr = root
    for(let i=0; i<str.length; i++){
        if(curr.children[str[i]-'a'] == null){
            let newNode = new TrieNode()
            curr.children[str[i]-'a'] = newNode
        }
        curr = curr.children[str[i]-'a']
    }
    curr.wordCount++
}

    
const trie = new TrieNode()
insert(trie,"and")
insert(trie,"ant")
insert(trie,"dad")
insert(trie,"do")