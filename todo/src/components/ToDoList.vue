<template>
  <div id="main">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">New Item</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <input
            @keyup="setAddingItem()"
            class="form-control"
            v-model.trim="newItemText"
          />
        </div>
        <button
          @click.prevent="$emit('add', newItemText), resetAddItem()"
          type="button"
          class="btn btn-warning btn-sm"
          :disabled="addDisabled"
        >
          Add
        </button>
      </div>
    </div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">To Do List</h3>
      </div>
      <table class="table">
        <tbody>
          <tr width="100%" v-for="item in items" :key="item.id">
            <th width="5%" scope="row">{{ item.id }}</th>
            <td width="75%">
              <span v-if="checkUpdatingItemId(item.id)">
                <input class="form-control" v-model.trim="updatingItemText" />
              </span>
              <span v-else>
                {{ item.title }}
              </span>
            </td>
            <td width="20%">
              <span v-if="checkUpdatingItemId(item.id)">
                <button
                  @click.prevent="
                    $emit('edit', item.id, updatingItemText),
                      clearUpdatingItem()
                  "
                  type="button"
                  class="btn btn-success btn-sm"
                >
                  Update
                </button>
                <button
                  @click.prevent="clearUpdatingItem()"
                  type="button"
                  class="btn btn-default btn-sm"
                >
                  Cancel
                </button>
              </span>
              <span v-else>
                <div class="btn-group" role="group">
                  <button
                    @click.prevent="setUpdatingItem(item.id, item.title)"
                    type="button"
                    class="btn btn-success btn-sm"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                  <button
                    @click.prevent="$emit('delete', item.id, item.title)"
                    type="button"
                    class="btn btn-danger btn-sm"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: ["items"],
  data() {
    return {
      updatingItemText: "",
      updatingItemId: "0",
      addDisabled: true,
      newItemText: "",
    };
  },
  methods: {
    checkUpdatingItemId(id) {
      return this.updatingItemId === id;
    },
    setUpdatingItem(id, text) {
      this.updatingItemText = text;
      this.updatingItemId = id;
    },
    clearUpdatingItem() {
      this.updatingItemText = "";
      this.updatingItemId = "0";
    },
    resetAddItem() {
      this.addDisabled = true;
      this.newItemText = "";
    },
    setAddingItem() {
      if (this.newItemText.length > 0) {
        this.addDisabled = false;
      } else {
        this.addDisabled = true;
      }
    },
  },
};
</script>