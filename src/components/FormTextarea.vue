<template>
  <div class="form-field">
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FormTextarea',
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    modelValue: { type: String, required: true },
  },
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLTextAreaElement | null;
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

textarea {
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s, box-shadow 0.3s;
  resize: vertical;
}
</style>
