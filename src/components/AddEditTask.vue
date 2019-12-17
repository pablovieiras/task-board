<template>
  <Modal
    :show="modalAddEdit"
    :color="colorModal"
    :title="'Oi'"
    @CLOSE="setModalAddEditTask(false)"
  >
    <template slot="content">
      <form action="#">
        <CustomInput placeholder="Task title" />
        <CustomInput textarea placeholder="Description" />
      </form>
    </template>
  </Modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Modal from '@/components/Modal';
import CustomInput from '@/components/Input';

export default {
  name: 'AddEditTask',
  components: {
    Modal,
    CustomInput,
  },
  computed: {
    ...mapGetters({
      colorModal: 'getColorModal',
      modalAddEdit: 'getModalAddEditTask',
    }),
  },
  methods: {
    ...mapActions(['setModalAddEditTask']),
  },
};
</script>
