class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        const address = this.hashMethod(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key){
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    delete(key){
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    const deletedItem = currentBucket[i]
                    currentBucket.splice(i + 1)
                    return deletedItem
                }
            }
        }
    }

    getAllKeys(){
        let allKeys = []
        allKeys = this.data.flat().map(item => item[1])

        return allKeys
    }
}

const myHashTable = new HashTable(50);

console.log(myHashTable.set("Gabriel", 2003))
console.log(myHashTable.set("Daniela", 2002))
console.log(myHashTable.set("Alejandra", 2004))

console.log(myHashTable.get("Daniela"))
console.log(myHashTable.get("Gabriel"))

console.log(myHashTable.getAllKeys())