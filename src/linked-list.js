const Node = require('./node');

class LinkedList {
    constructor() {
      this.data;
      this.next;
      this.prev;
      this._head;
      this._tail;
      this.length = 0;
    }

    append(data) {
      var current = {
        data: data,
        next: null,
        prev: null,
      }

      if (this.length == 0){
        this._head = this._tail = current;
        this._tail.next = this._head;
        this._head.prev = this._tail;
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
      if (this.length == 0) return true;
      else return false;
    }

    clear() {}

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

    reverse() {}

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
