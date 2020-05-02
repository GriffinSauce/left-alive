import { useForm } from 'react-hook-form';
import fetcher from '../utils/fetcher';

const NewsletterForm = () => {
  const {
    handleSubmit,
    register,
    errors,
    setError,
    clearError,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (values) => {
    clearError('submit');
    try {
      await fetcher(`/api/newsletter-signup`, {
        method: 'POST',
        body: values,
      });
    } catch (err) {
      console.error(err);
      setError('submit');
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
          {errors?.name?.message}
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
        </p>
        <p>
          <button type="submit" disabled={isSubmitting}>
            Sign me up!
          </button>
        </p>
        {errors.submit ? (
          <p className="text-sm">
            Something went wrong, please try again or send an email to
            <a href="mailto:mail@leftalive.nl">mail@leftalive.nl</a>
          </p>
        ) : null}
      </div>
      <label style={{ display: 'none' }} htmlFor="hp">
        {`Leave this field empty if you're human: `}
        <input
          type="text"
          name="hp"
          value=""
          tabIndex="-1"
          autoComplete="off"
          ref={register()}
        />
      </label>
    </form>
  );
};

export default NewsletterForm;
