<template>
  <BaseFormField :title="title" :error="error">
    <label>
      <input class="form__input"
      v-model="dataValue"
      :type="type"
      :placeholder="placeholder">
    </label>
  </BaseFormField>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  props: ['type'],
  mixins: [formFieldMixin],
};
</script>
