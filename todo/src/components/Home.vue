<template>
  <div class="container">
    <to-do-list
      @edit="editItem"
      @delete="deleteItem"
      @add="addItem"
      :items="items"
    ></to-do-list>
  </div>
</template>

<script>
import ToDoList from "./ToDoList.vue";

export default {
  name: "App",
  data() {
    return {
      items: [],
      totalItems: 0,
    };
  },
  components: {
    ToDoList,
  },
  methods: {
    addItem(title) {
      const id = (this.totalItems+1)
      this.items.push({
        id: id,
        title: title,
        link : this.$router.resolve({ 'name' : 'todo', 'params' : { 'id' : id } }).href
      });
      this.totalItems++
      
    },
    editItem(id, title) {
      this.items = this.items.map((item) => {
        if (item.id == id) {
          item.title = title;
          return item;
        }
        return item;
      });
    },
    deleteItem(id, title) {
      if(confirm("Are you sure you want to delete '"+title+"'"))
      {
        this.items = this.items.filter((item) => item.id !== id);
        this.totalItems--
      }
    },
  },
  mounted() {
    for (let i = 1; i <= 10; i++) {
      this.addItem("To do item " + i)
    }
  },
};
</script>
