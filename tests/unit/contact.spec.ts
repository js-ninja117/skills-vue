import { shallowMount } from '@vue/test-utils';
import Contact from '@/views/Contact.vue';

describe('Contact.vue', () => {
  it('collects form data', async () => {
    const wrapper = shallowMount(Contact, {});
    const template = {subject: "skills-vue Submission", email: "leqer375@gmail.com", body: "Hey there!"}
    const input_subject = wrapper.find('input[id="form-subject"]');
    await input_subject.setValue(template.subject);

    const input_email = wrapper.find('input[id="form-email"]');
    await input_email.setValue(template.email);

    const input_body = wrapper.find('textarea[id="form-body"]');
    await input_body.setValue(template.body);

    expect(wrapper.vm.form.subject).toBe(template.subject)
    expect(wrapper.vm.form.email).toBe(template.email)
    expect(wrapper.vm.form.body).toBe(template.body)
  });
});
