<template>
  <nav-bar />
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
import NavBar from "./components/NavBar.vue";
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "App",
  data() {
    return {
      items: [],
      totalItems: 10,
    };
  },
  components: {
    NavBar,
    ToDoList,
  },
  methods: {
    addItem(title) {
      this.items.push({
        id: (this.totalItems+1),
        title: title,
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
    for (let i = 1; i <= this.totalItems; i++) {
      this.items.push({
        id: i,
        title: "To do item " + i,
      });
    }
  },
};
</script>
