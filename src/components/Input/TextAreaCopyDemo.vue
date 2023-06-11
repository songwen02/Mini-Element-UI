<demo>
自适应多文本框
</demo>
<template>
  <div>
    <z-input-text-area auto-size placeholder="根据内容行数自适应高度"></z-input-text-area>
    <div style="margin: 24px 0"/>
    <z-input-text-area :auto-size="{minRow:2,maxRow:5}" placeholder="根据内容行数自适应高度"></z-input-text-area>
  </div>
</template>
