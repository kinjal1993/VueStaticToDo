<template>
  <div id="my-div">
    <span v-bind:id="'count-' + count" v-once>{{ count }}</span>
    <span v-html="rawHtml"></span>
    <p v-if="countDisplay">{{ countDisplayText }}</p>
    <p v-else>{{ countDisplayText }}</p>
    <a
      v-on:click.prevent="toggleCountDisplay()"
      target="_blank"
      v-bind:href="url"
      >Link</a
    >
    <div>Short hands</div>
    <a @click.prevent="toggleCountDisplay()" target="_blank" :href="url"
      >short hand for v-bind and v-on</a
    >
    <span>Dynamic binding of attr</span>
    <input v-model="text" />
    <span>{{ textCount }}</span>
    <div
      class="static"
      :class="{ active: countDisplay, 'other-class': countDisplay }"
    >
      classes
    </div>
    <div class="static" :class="{ classObject }">class object</div>
    <div class="static" :class="[count, textCount]">class array</div>
    <div :style="[styleObject]">Style Object</div>
    <div :style="[style1, style2]">Style Array</div>
    <div v-show="show">Show</div>
    <ul>
      <li
        v-is="'play-ground-inner'"
        @change-text="giveAlert('child button clicked')"
        v-for="item in items"
        :key="item.id"
        v-bind="item"
      >
        Just a placeholder
      </li>
    </ul>
    <component
      title="Conditional component"
      id="456"
      :is="currentTabComponent"
    ></component>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ index + ". " + item.title }}
      </li>
    </ul>
    <ul>
      <li v-for="item in items" :key="item.id">
        <ul>
          <li v-for="(value, name, index) in item" :key="value">
            {{ index + ". " + name + " : " + value }}
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li v-for="n in 10" :key="n">
        {{ n }}
      </li>
    </ul>
    <button @click="count += 1">Add 1</button>
    <p>The button above has been clicked {{ count }} times.</p>
    <button @click="bevent1('hi', $event), bevent2('hello', $event)">
      Button invoking two events
    </button>
    <input
      ref="input"
      v-model.trim="edit"
      @keyup.enter.exact="giveAlert('Enter key pressed')"
      @keyup.alt.enter="giveAlert('alt enter key pressed')"
    />{{ edit }}
    <input type="checkbox" value="one" v-model="checkboxes" />
    <input type="checkbox" value="two" v-model="checkboxes" />
    <input type="checkbox" value="three" v-model="checkboxes" />
    <br />
    <input type="radio" value="one" v-model="radio" />
    <input type="radio" value="two" v-model="radio" />
    <input type="radio" value="three" v-model="radio" />
    <select v-model="selected">
      <option v-for="item in items" :key="item.id" :value="item.id">
        {{ item.title }}
      </option>
    </select>
    <input v-model.number="number1" type="number" />
  </div>
</template>


<script>
import PlayGroundInner from "./PlayGroundInner";
export default {
  name: "play-ground",
  components: {
    PlayGroundInner,
  },
  data() {
    return {
      customText: 1,
      currentTabComponent: "",
      number1: 20,
      selected: "1",
      radio: "two",
      checkboxes: ["one"],
      edit: "Key up events",
      items: [
        { id: 1, title: "item 1" },
        { id: 2, title: "item 2" },
        { id: 3, title: "item 3" },
      ],
      show: false,
      count: 1,
      textCount: 0,
      text: "",
      url: "https://www.google.co.in",
      countDisplay: true,
      rawHtml: '<span style = "color : red">fvlkjdfvlkjdf</span>',
      classObject: {
        active: true,
        "other-class": false,
      },
      styleObject: {
        color: "blue",
        fontSize: "15px",
      },
      style1: {
        color: "yellow",
        fontSize: "18px",
      },
      style2: {
        margin: "15px",
      },
    };
  },
  watch: {
    text() {
      this.textCount = this.text.length;
    },
  },
  computed: {
    countDisplayText() {
      return this.countDisplay ? "if" : "else";
    },
  },
  mounted() {
    this.count = 2;
    this.postfontSize = 2;
    this.countDisplay = false;
    this.$refs.input.focus();
  },
  methods: {
    toggleCountDisplay() {
      this.currentTabComponent = this.countDisplay ? "play-ground-inner" : "";
      this.show = !this.show;
      return (this.countDisplay = !this.countDisplay);
    },
    bevent1(msg, event) {
      alert(msg);
      event.preventDefault();
    },
    bevent2(msg, event) {
      alert(msg);
      event.preventDefault();
    },
    giveAlert(msg) {
      alert(msg);
    },
  },
};
</script>