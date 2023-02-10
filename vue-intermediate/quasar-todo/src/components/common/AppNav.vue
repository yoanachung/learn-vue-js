<template>
  <q-drawer
    show-if-above
    :value="propsdata"
    :width="250"
    :breakpoint="700"
  >
    <q-scroll-area
      style="
        height: calc(100% - 176px);
        margin-top: 176px;
        border-right: 1px solid #ddd;
      "
    >
      <q-list padding>
        <q-item to="/" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section> Todo </q-item-section>
        </q-item>

        <q-item to="/help" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>

          <q-item-section> Help </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="../../statics/mountains.jpeg"
      style="height: 176px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div class="text-weight-bold">Yoana Chung</div>
        <div>@yoanachung</div>
      </div>
    </q-img>
  </q-drawer>
</template>

<script>
export default {
  props: ["propsdata"]
};
</script>

<style>
</style>