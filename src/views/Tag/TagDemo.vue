<template>
  <h1 class="demoHeader">Tag 标签</h1>
  <p>用于标记和选择</p>
  <Demo :component="Basic" :desc-component="BasicDesc"></Demo>
  <Demo :component="Closable" :desc-component="ClosableDesc"></Demo>
  <Demo :component="DiffSize" :desc-component="DiffSizeDesc"></Demo>
  <Demo :component="Effect" :desc-component="EffectDesc"></Demo>
  <Demo :component="Round" :desc-component="RoundDesc"></Demo>
  <Demo :component="Dynamic" :desc-component="DynamicDesc"></Demo>
</template>

<script lang='ts' setup>
import Basic from '../../components/Tag/Basic.vue';
import BasicDesc from '../../components/Tag/BasicDesc.vue';
import Closable from '../../components/Tag/Closable.vue';
import ClosableDesc from '../../components/Tag/ClosableDesc.vue';
import DiffSize from '../../components/Tag/DiffSize.vue';
import DiffSizeDesc from '../../components/Tag/DiffSizeDesc.vue';
import Effect from '../../components/Tag/Effect.vue';
import EffectDesc from '../../components/Tag/EffectDesc.vue';
import Round from '../../components/Tag/Round.vue';
import RoundDesc from '../../components/Tag/RoundDesc.vue';
import Dynamic from '../../components/Tag/Dynamic.vue';
import DynamicDesc from '../../components/Tag/DynamicDesc.vue';
</script>
