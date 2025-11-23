<template>
    <div class="collection">
      <h2 class="collection__title">Collection</h2>
      <div class="collection__table">
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import Card from './Card.vue';
  </script>
  
  <style scoped lang="scss">
  @use '@/assets/scss/var.scss';
  
  .collection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
  
      width: 100%;
  }
  
  .collection__title {
      margin: 10px 0 0 0;
      font-family: var.$default-font-family;
      color: var.$default-text-color;
      text-align: center;
  }
  
  .collection__table {
      display: flex;
  
      width: 100%;
      height: min-content;

      flex-wrap: wrap;
  
      border-radius: 20px;
      background-color: var.$table-background-color;
  }
  </style>