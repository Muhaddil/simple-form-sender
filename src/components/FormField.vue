<template>
  <div class="form-field">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :maxlength="maxlength"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'FormField',
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    maxlength: { type: Number, default: null },
    modelValue: { type: String, required: true },
  },
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement | null;
      if (target) {
        this.$emit('update:modelValue', target.value);
      }
    },
  },
};
</script>

<style scoped>
.form-field {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}
</style>
