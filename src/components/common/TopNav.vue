<template>
  <div class="topNav">
    <router-link to="/" class="logo">Mini-El </router-link>

    <ul class="menu">
      <li>
        <a href="https://github.com/songwen02/Mini-Element-UI" target="_blank">
          <svg class="githubIcon">
            <use xlink:href="#icon-github"></use>
          </svg>
        </a>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, onMounted, Ref, ref } from "vue";

export default {
  props: {
    toggleMenuButtonVisible: { type: Boolean, default: false },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); //<>就是在标记类型
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    onMounted(() => {
      const screenWidth = ref(document.documentElement.clientWidth);
      window.onresize = () => {
        screenWidth.value = document.documentElement.clientWidth;
        menuVisible.value = screenWidth.value > 510;
      };
    });
    return { toggleMenu }; //只有return之后，外部的template才能获取到这个函数
  },
};
</script>
<style lang="scss" scoped>
$wordColor: #007974;
.topNav {
  color: $wordColor;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px #f0f1f2;
  background: #fff;

  > .logo {
    margin-right: auto;
    padding-left: 24px;

    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }

    .githubIcon {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 510px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>