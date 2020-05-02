import { useForm } from 'react-hook-form';
import fetcher from '../utils/fetcher';

const NewsletterForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = async (values) => {
    try {
      await fetcher(`/api/newsletter-signup`, {
        method: 'POST',
        body: values,
      });
    } catch (err) {
      console.log('err', err);
      // TODO
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-fields">
        <p>
          <input
            type="text"
            name="name"
            placeholder="your name"
            required=""
            ref={register({
              required: 'please add your name',
              pattern: {
                value: /[a-z]+/i,
                message: 'please add your name',
              },
            })}
          />
          {errors.name && errors.name.message}
        </p>
        <p>
          <input
            type="email"
            name="email"
            placeholder="email"
            required=""
            ref={register({
              required: 'please add your email',
              pattern: {
                value: /@/,
                message: 'invalid email address',
              },
            })}
          />
          {errors.email && errors.email.message}
        </p>
        <p>
          <button type="submit">Sign me up!</button>
        </p>
      </div>
      <label style={{ display: 'none' }} htmlFor="hp">
        {`Leave this field empty if you're human: `}
        <input
          type="text"
          name="hp"
          value=""
          tabIndex="-1"
          autoComplete="off"
        />
      </label>
    </form>
  );
};

export default NewsletterForm;
