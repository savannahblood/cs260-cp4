<template>
<div class="wrapper">
  <div class="teachers">
    <div class="teacher" v-for="teacher in teachers" :key="teacher.id">
      <div class="image">
        <img :src="teacher.image">
      </div>
      <div class="info">
        <h3>{{teacher.firstName}} {{teacher.lastName}}</h3>
        <p>{{teacher.bio}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TeacherList',
  props: {
    teachers: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.teachers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.teacher {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.teacher img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.teacher .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: var(--indigo);
  color: #000;
  padding: 10px;
  height: 100px;
}

.info h3 {
  font-size: 19px !important;
  color: var(--white) !important;
  margin: 0px !important;
}

.info p {
  margin: 0px;
  padding: 5px 0px !important;
  font-size: 12px !important;
}
</style>
