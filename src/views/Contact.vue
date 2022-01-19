<template>
  <div class="container col-lg-8 border p-5">
    <form v-if="!response.status" class="form row" @submit.prevent="submitForm">
      <div class="form-group col-12 row mx-auto mb-5">
        <label for="form-subject">Subject</label>
        <input
          disabled
          type="email"
          class="form-control"
          ref="form-subject"
          id="form-subject"
          v-model="form.subject"
        />
      </div>
      <div class="form-group col-12 row mx-auto mb-5">
        <label for="form-email">Email</label>
        <input
          type="email"
          class="form-control"
          ref="form-email"
          id="form-email"
          placeholder="name@example.com"
          v-model="form.email"
        />
      </div>
      <div class="form-group col-12 row mx-auto">
        <label for="form-content">Body</label>
        <textarea
          placeholder="Your text here..."
          class="form-control col-12"
          ref="form-body"
          id="form-body"
          v-model="form.body"
        ></textarea>
      </div>
      <div class="form-group col-12 row mx-auto">
        <input class="btn btn-primary" type="submit" value="Submit" />
      </div>
    </form>
    <div v-else-if="response.status == 200" id="success">
      <span class="mb-5">Well done, message was sent!</span><br/>
      <input class="btn btn-primary" value="Back to form" @click="response.status = 0"/>
    </div>
    <div v-else id="error">
      Error occured
    </div>
  </div>
</template>

<style lang="scss" scoped>
form {
  label {
    font-weight: 600;
    text-align: left;
  }

  textarea {
    min-height: 200px !important;
  }
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Contact',
  components: {},
  data: () => ({
    form: {
      subject: 'skills-vue Submission',
      email: '',
      body: '',
    },
    response: {
      status: 0,
    },
  }),
  async mounted() {
    /**/
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://enociv9ekmecyez.m.pipedream.net/', {
          method: 'POST',
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.response.status = response.status;
      } catch (error) {
        console.error(error);
      }
    },
  },
})
export default class Contact extends Vue {
  form!: Record<string, unknown>;
}
</script>
