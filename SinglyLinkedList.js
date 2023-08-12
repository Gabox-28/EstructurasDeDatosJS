let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next : null
        }

        this.tail = this.head
        this.length = 1
    }

    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++

        return this
    }

    prepend(value){
        const newNode  = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++

        return this
    }

    setMiddleNode(value){
        let newNode = new Node(value)
        let middle
        if(this.length % 2 === 0){
            middle = (this.length / 2) - 1
        }else{
            middle = Math.floor(this.length / 2)
        }

        let tempHead = this.returnNode(middle - 1, this.head.next)
        newNode.next = this.returnNode(middle, this.head.next)
        tempHead.next = newNode
        this.length++

        return this

    }

    deleteMiddleNode(position){
        let tempHead = this.returnNode(position - 1, this.head.next)
        tempHead.next = this.returnNode(position + 1, this.head.next)
        this.length--

        return this
    }

    returnNode(position, node){
        if (typeof node.next === 'object'){
            if (position !== 0) {
                return this.returnNode(position - 1, node.next)
            } else {
                return node
            }
        }
    }


}

let myLinkedList = new MySinglyLinkedList(1)

console.log(myLinkedList)
console.log(myLinkedList.append(2))
console.log(myLinkedList.append(3))
console.log(myLinkedList.append(4))

console.log(myLinkedList.setMiddleNode(66))
console.log(myLinkedList)
console.log(myLinkedList.deleteMiddleNode(2))