const Node = require('./node');

class LinkedList {
    constructor() {
      this.data;
      this._head;
      this._tail;
      this.length = 0;
    }

    append(data) {
      var current = new Node(data);
      if (this.length === 0){
        this._head = this._tail = current;
      }
      else {
        this._tail.next = current;
        current.prev = this._tail;
        this._tail = current;
      }
      this.length++;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
      var current = this._head;
      var tmpIndex = 0;
      while (index != tmpIndex) {
        current = current.next;
        tmpIndex++;
      }
      return current.data;
    }

    insertAt(index, data) {
      var current = this._head;
      var tmpIndex = 0;
      while (index != tmpIndex) {
        current = current.next;
        tmpIndex++;
      }
      current.data = data;
    }

    isEmpty() {
      if (this.length === 0) return true;
      else return false;
    }

    clear() {
      if(this.length){
        var current = this._head;
        while (this.length != 1) {
          current = this._head.next;
          this._head = current;
          this.length--;
        }
        this.length--;
        this._head.data = null;
        this._tail.data = null;
      }
    }

    deleteAt(index) {
      var current = this._head;
      var tmpIndex = 0;
      while (index != tmpIndex)
      {
        current = current.next;
        tmpIndex++;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
      this.length--;
    }

    reverse() {
      var condition;
      if (this.length % 2 === 0) condition = (this.length - 1) / 2;
      else condition = Math.floor((this.length - 1) / 2)

      var currentH = this._head;
      var currentT = this._tail;

      for (var i = 0; i < condition; i++) {
        var tmp = this.at(i);
        currentH.data = currentT.data;
        currentT.data = tmp;
        currentH = currentH.next
        currentT = currentT.prev;
      }
    }

    indexOf(data) {
      var index = 0;
      var current = this._head;
      while (data != current.data){
        current = current.next;
        index++;
        if (index === this.length) return -1;
      }
      return index;
    }
}

module.exports = LinkedList;
