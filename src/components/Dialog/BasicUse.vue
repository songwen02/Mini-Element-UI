<demo>
基础用法
</demo>
<template>
  <div>
    <z-dialog title="标题" v-model="visible" :closeOnClickOverlay="true" :confirm-callback="confirm"
              :cancel-callback="cancel">
      <template #content>
        <span>主要内容</span>
      </template>
    </z-dialog>
    <z-button @click="showDialog">展示对话框</z-button>

  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import Notify from '../../lib/Notification/notify';

const visible = ref(false);
const showDialog = () => {
  visible.value = true;
};

function confirm() {
  Notify['success']({
        message: '点击确定'
      }
  );
}

function cancel() {
  Notify['warning']({
        message: '点击取消'
      }
  );
}

</script>