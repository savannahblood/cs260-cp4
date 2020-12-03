<template>
  <div>
    <section id='pricing'>
      <h2>Teachers</h2>
      <h3 id='team'>This is our team!</h3>
      <TeacherList :teachers="teachers" />
    </section>
  </div>
</template>

<script>
import TeacherList from "../components/TeacherList.vue"
export default {
  name: 'Teacher',
  components: {
    TeacherList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    teachers() {
      return this.$root.$data.teachers;
    }
  },
}
</script>

<style>
#team {
  margin: 0px !important;
  font-size: 35px !important;
}
</style>
